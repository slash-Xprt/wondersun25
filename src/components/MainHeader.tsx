import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Logo } from './Logo';

export function MainHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollPosition > 50 ? 'bg-black bg-opacity-80 backdrop-blur-md' : ''
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo className="h-16 w-auto text-yellow-400 hover:text-yellow-300 transition-colors" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#lineup" 
            className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
          >
            Lineup
          </a>
          <a 
            href="#about" 
            className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
          >
            A propos
          </a>
          <Link 
            to="/infos" 
            className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
          >
            Infos Pratiques
          </Link>
          <Link 
            to="/billetterie"
            className="px-6 py-2 bg-yellow-400 text-black font-medium rounded-md hover:bg-yellow-300 transition-colors"
          >
            Tickets
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-yellow-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-md">
          <nav className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            <a 
              href="#lineup" 
              className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Lineup
            </a>
            <a 
              href="#about" 
              className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Link 
              to="/infos"
              className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Infos Pratiques
            </Link>
            <Link 
              to="/billetterie"
              className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tickets
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}