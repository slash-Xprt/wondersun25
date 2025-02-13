import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ff8f96] bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <Link to="/" className="inline-block">
          <Logo className="h-16 w-auto text-white hover:text-yellow-300 transition-colors" />
        </Link>
      </div>
    </header>
  );
}