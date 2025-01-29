# Wondersun Festival Website

Official website for the Wondersun Festival, built with React, Vite, and Express.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/slash-Xprt/wondersun25.git
   cd wondersun25
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```
   Then update the `.env` file with your configuration.

4. Start development server:
   ```bash
   npm run dev
   ```

5. For production:
   ```bash
   npm run build
   npm run preview
   ```

## Backend Server

The backend server runs separately. To start it:

```bash
npm run server
```

## Environment Variables

Create a `.env` file with the following variables:

- `PORT`: Server port (default: 3000)
- `SMTP_HOST`: SMTP server host
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `SMTP_FROM`: Sender email address
- `CONTACT_EMAIL`: Contact form recipient email
- `FRONTEND_URL`: Frontend URL for CORS (in development: http://localhost:5173)

## Deployment

- Frontend: Deployed on Netlify
- Backend: Deployed on Render

## License

All rights reserved © 2024 Wondersun Festival