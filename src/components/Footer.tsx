import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: 'home' | 'infos' | 'legal' | 'privacy' | 'contact') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#699ae0] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo className="h-12 w-auto text-white" />
          </div>
          <nav className="flex gap-8">
            <Link 
              to="/legal"
              className="text-sm text-white hover:text-yellow-400 transition-colors"
            >
              Mentions légales
            </Link>
            <Link 
              to="/privacy"
              className="text-sm text-white hover:text-yellow-400 transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link 
              to="/contact"
              className="text-sm text-white hover:text-yellow-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-white">
          © 2024 Wondersun Festival. All rights reserved.
        </div>
      </div>
    </footer>
  );
}