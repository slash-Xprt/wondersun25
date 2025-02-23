import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';

// Load environment variables
dotenv.config();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Accept']
}));
app.use(express.json({ limit: '10kb' }));
app.use(hpp());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: { 
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  }
});

// Apply rate limiting to contact endpoints
app.use('/contact', limiter);
app.use('/newsletter', limiter);

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'ssl0.ovh.net',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Validation middleware
const contactValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-ZÀ-ÿ\s'-]+$/).withMessage('Name contains invalid characters'),
  
  body('email')
    .isEmail().withMessage('Valid email is required')
    .normalizeEmail({ gmail_remove_dots: false })
    .isLength({ max: 100 }).withMessage('Email is too long'),
  
  body('subject')
    .trim()
    .notEmpty().withMessage('Subject is required')
    .isLength({ min: 2, max: 200 }).withMessage('Subject must be between 2 and 200 characters')
    .matches(/^[a-zA-ZÀ-ÿ0-9\s'-]+$/).withMessage('Subject contains invalid characters'),
  
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters')
];

const newsletterValidation = [
  body('email')
    .isEmail().withMessage('Valid email is required')
    .normalizeEmail({ gmail_remove_dots: false })
    .isLength({ max: 100 }).withMessage('Email is too long')
];

// Strip the /api prefix from the request URL if present
app.use((req, res, next) => {
  req.url = req.url.replace(/^\/api/, '');
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Contact form endpoint
app.post('/contact', contactValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }

    const { name, email, subject, message } = req.body;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Message reçu - Wondersun Festival',
      text: `
        Bonjour ${name},

        Nous avons bien reçu votre message et nous vous en remercions.
        Notre équipe vous répondra dans les plus brefs délais.

        Cordialement,
        L'équipe Wondersun Festival
      `,
      html: `
        <h2>Message reçu</h2>
        <p>Bonjour ${name},</p>
        <p>Nous avons bien reçu votre message et nous vous en remercions.</p>
        <p>Notre équipe vous répondra dans les plus brefs délais.</p>
        <br>
        <p>Cordialement,<br>L'équipe Wondersun Festival</p>
      `,
    });

    res.status(200).json({ 
      success: true,
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error sending message' 
    });
  }
});

// Newsletter subscription endpoint
app.post('/newsletter', newsletterValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }

    const { email } = req.body;

    // Send confirmation email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Bienvenue à la newsletter du Wondersun Festival',
      text: `
        Merci de vous être inscrit à notre newsletter !
        Vous serez les premiers informés de nos actualités et annonces.
        
        Si vous n'avez pas demandé cette inscription, veuillez ignorer cet email.
      `,
      html: `
        <h2>Bienvenue à la newsletter du Wondersun Festival !</h2>
        <p>Merci de vous être inscrit à notre newsletter !</p>
        <p>Vous serez les premiers informés de nos actualités et annonces.</p>
        <br>
        <p><small>Si vous n'avez pas demandé cette inscription, veuillez ignorer cet email.</small></p>
      `,
    });

    // Notify admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: 'Nouvelle inscription newsletter',
      text: `Nouvel inscrit: ${email}`,
      html: `<p>Nouvel inscrit à la newsletter: <strong>${email}</strong></p>`,
    });

    res.status(200).json({ 
      success: true,
      message: 'Subscription successful' 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error processing subscription' 
    });
  }
});

// Export the serverless function
export const handler = serverless(app); 