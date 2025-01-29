import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface MenuProps {
  scrollPosition: number;
  onNavigate: (page: 'home' | 'infos' | 'legal' | 'privacy' | 'contact' | 'billetterie') => void;
  currentPage: 'home' | 'infos' | 'legal' | 'privacy' | 'contact' | 'billetterie';
}

export function Menu({ scrollPosition, onNavigate, currentPage }: MenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollPosition > 50 || currentPage !== 'home' ? 'bg-black bg-opacity-80 backdrop-blur-md' : ''}`}>
      <div className="container mx-auto px-10 py-5 flex justify-between items-center">
        <Link 
          to="/"
          className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100" className="h-12 w-auto">
            <defs>
              <style>
                {`.cls-1 {
                  fill: none;
                  stroke: #fff;
                  stroke-miterlimit: 10;
                  stroke-width: 3px;
                }
                .cls-2 {
                  fill: #fff;
                  stroke-width: 0px;
                }`}
              </style>
            </defs>
            <g>
              <path className="cls-2" d="m63.43,46.4c-1.68,2.73-4.89,3.68-5.89,3.68-1.74,0-2.68-1-3.47-2.84-.11-.26-.95-2.47-1.74-4.79l-7.15-20.4c-.37-1-.79-2.52-2.21-3.94-.63-.63-1.47-1.52-1.47-2.58,0-1.74,1.16-2.26,3.52-2.26,1.63,0,3.05.16,5.89.16s4.79-.16,6.57-.16c1.68,0,2.58.79,2.58,2.05,0,1.84-2.58,2.52-2.58,5.47,0,1.47,2,9.67,3.26,12.51.16.37.37.63.47.63s.26-.26.42-.74c.95-2.68,2.68-10.67,2.68-12.67,0-2.79-2.42-3.58-2.42-5.36,0-1.05.53-1.89,2.47-1.89,1.31,0,3.94.16,5.42.16,2.73,0,4.79-.16,6.52-.16s2.58.79,2.58,2.05c0,1.84-2.26,2.52-2.26,5.31,0,1.37,1.73,9.67,2.89,12.46.21.53.42.84.58.84.1,0,.26-.32.47-.89.95-2.79,2.52-10.83,2.52-12.83,0-2.58-2.68-3.26-2.68-5.05,0-1.05.53-1.89,2.47-1.89,1.31,0,3.89.16,5.36.16,1.37,0,2.16-.16,3.47-.16s1.95.68,1.95,1.84c0,2.05-2.26,2.1-3.73,7.26l-4.84,16.72c-.74,2.63-1.89,5.84-2.79,7.31-1.68,2.73-5,3.68-6.05,3.68-1.74,0-2.63-1.1-3.47-2.84-1.42-2.94-2.73-8.1-4.26-12.3-.21-.63-.42-.84-.58-.84-.21,0-.47.53-.74,1.42-1.89,6.63-2.89,9.46-3.79,10.88Z"/>
              <path className="cls-2" d="m102.35,21.69c7.52,0,14.25,5.21,14.25,14.72,0,8.89-6.31,13.3-13.99,13.3-8.41,0-13.83-5.78-13.83-13.78,0-8.47,5.68-14.25,13.57-14.25Zm-2.68,10.25c0,2.73.42,6.15,1.42,8.57.63,1.58,1.52,2.73,2.84,2.73,1.1,0,2.26-.89,2.26-4.1,0-2.47-.68-6.05-1.68-8.52-.95-2.37-2.05-3.58-3.1-3.58-.74,0-1.73.68-1.73,4.89Z"/>
              <path className="cls-2" d="m144.78,41.04c0,1.47.42,2.94,1.31,3.79,1,.95,1.84,1.16,1.84,2.58,0,1.16-.84,1.95-2.63,1.95s-3.58-.16-5.1-.16c-2.1,0-2.84.16-5.15.16-1.37,0-1.89-.84-1.89-1.84,0-1.42.47-2.52.74-3.26.53-1.47,1-6.15,1-9.83,0-4.1-1-5.84-3.26-5.84-.95,0-2.79.63-2.79,3.84v7.68c0,2.58.05,3.47.84,4.52.79,1.05,1.74,1.26,1.74,2.79,0,1.16-.63,1.95-2.42,1.95s-3.63-.16-5.15-.16c-2.1,0-4.05.16-6.36.16-1.37,0-1.89-.84-1.89-1.84,0-1.42,1.1-2.26,1.58-2.89,1.31-1.84,1.42-3.63,1.42-5v-7.83c0-1.89-1.16-2.73-1.68-3.1-.58-.42-1.05-.79-1.05-1.68,0-1.68,2.16-1.95,4.79-3.15,3.37-1.58,3.84-2.16,4.89-2.16,1.31,0,2,.53,2.52,2.31.16.63.37,1.16.79,1.16.68,0,3.63-3.47,8.31-3.47,6.26,0,8.31,3.84,8.31,9.25,0,3.42-.68,8.05-.68,10.1Z"/>
              <path className="cls-2" d="m164.72,47.29c-.42-.5-.58-1.05-1-1.05-.26,0-.63.42-1.21.95-1.16,1.05-3.05,2.52-6.15,2.52-5.21,0-9.62-4.15-9.62-12.99,0-9.57,4.57-15.04,10.57-15.04,4.21,0,5.47,1.95,5.89,1.95.26,0,.42-.42.42-2.42v-.53c0-1.68-1.16-2.73-1.68-3.1-.58-.42-1.1-.79-1.1-1.68,0-1.52,2.21-1.84,4.89-2.94,2.73-1.1,4.89-2.42,6.31-2.42,1.16,0,2.05.58,2.05,1.95,0,3.94-.26,3.58-.26,11.88v15.88c0,.84.42,2,1.63,2,.37,0,.68-.1,1.05-.1.42,0,.63.63.63,1.21,0,3.79-3.1,6.36-6.94,6.36-2.73,0-4.08-.71-5.47-2.42Zm-1-12.09c0-6.1-1.37-7.94-2.89-7.94-1.63,0-3,1.58-3,7.2s1.58,7.89,3.42,7.89c1.42,0,2.47-1.21,2.47-7.15Z"/>
              <path className="cls-2" d="m188.07,37.51c-.53.05-.74.16-.74.53,0,1.42,1.58,3.47,5.26,3.47,3.21,0,5.05-1.42,6.36-2.16.42-.26.84-.42,1.16-.42.63,0,1,.58,1,1.79,0,3.94-4.58,9.1-11.99,9.1-8.68,0-13.62-5.57-13.62-13.46s5.73-14.67,14.46-14.67c8.26,0,10.68,6.36,10.68,9.46,0,2.1-1.16,3.31-2.79,4.1-2.84,1.37-7.73,2.05-9.78,2.26Zm.79-10.62c-1.95,0-3.05,2.1-3.05,4.15,0,1.26.42,2,1.31,2,1,0,2.94-.79,3.73-2.26.21-.42.32-.84.32-1.37,0-1.42-.89-2.52-2.31-2.52Z"/>
              <path className="cls-2" d="m213.2,33.83v5.73c0,2.58.21,3.63,1.79,5.1.95.89,2.58,1.21,2.58,2.73,0,1.16-.63,1.95-2.42,1.95s-3.58-.16-6.94-.16c-2.1,0-4.05.16-6.36.16-1.37,0-1.89-.84-1.89-1.84,0-1.42,1.1-2.26,1.58-2.89,1.31-1.84,1.42-3.63,1.42-5v-7.83c0-1.89-1.16-2.73-1.68-3.1-.58-.42-1.05-.79-1.05-1.68,0-1.68,2.16-1.95,4.79-3.15,3.37-1.58,3.84-2.16,4.89-2.16,1.31,0,2,.53,2.52,2.31.16.63.37,1.16.79,1.16.68,0,2.76-3.47,6.52-3.47,2.97,0,5.6,1.71,5.6,6.76,0,3.52-2.76,7.31-6,7.31-2.15,0-2.47-1.31-2.97-3.5-.39-1.71-.95-2.58-1.47-2.58-1.31,0-1.68,1.84-1.68,4.15Z"/>
              <path className="cls-2" d="m243.65,23.37c1.47,1.47,1.79,3.31,1.79,5.47,0,1.52-1,2.42-2.1,2.42-.95,0-1.79-.68-2.63-1.52-1.42-1.37-3-3.21-5.52-3.21-1.37,0-1.95.74-1.95,1.58,0,1.47,1.58,1.74,5.47,3.26,3.79,1.47,7.89,3.63,7.89,9.52,0,5.15-4.52,9.1-11.99,9.1-2.58,0-6.89-.63-8.99-2.26-1-.79-1.84-3-1.84-5.94,0-1.37.74-2.42,2.21-2.42.63,0,1.26.47,1.89,1.05,1.53,1.37,3.26,3.79,6.31,3.79,1.21,0,1.79-.68,1.79-1.58,0-1.74-3.05-2.1-6.31-4-2.58-1.52-5.42-3.26-5.42-8.04,0-5.21,5-8.99,11.25-8.99,2.84,0,6.84.47,8.15,1.79Z"/>
              <path className="cls-2" d="m274.52,40.25c0,.84.42,2,1.63,2,.37,0,.68-.1,1.05-.1.42,0,.63.63.63,1.21,0,3.79-3.1,6.36-6.94,6.36-3.21,0-4.89-1.31-5.78-2.84-.16-.26-.37-.63-.79-.63-.16,0-.42.21-.84.58-1.21,1-3.47,2.89-7.04,2.89-6.52,0-8.62-3.84-8.62-9.25,0-3.42.68-8.2.68-9.57,0-1.47-.42-2.42-1.32-3.26-1-.95-1.84-1.16-1.84-2.58,0-1.16.84-1.79,2.63-1.95,5.89-.58,7.68-1.31,9.04-1.31,1.68,0,2.05,1.21,2.05,2.21,0,4.26-.68,6.78-.68,12.99,0,4.1.95,5.84,3.26,5.84,1,0,2.63-.63,2.63-3.84v-6.63c0-2.58-.16-3.47-.95-4.52-.79-1.05-1.73-1.26-1.73-2.79,0-1.16.79-1.73,2.58-1.95,4.94-.53,8.04-1.31,9.04-1.31,1.63,0,1.89,1.21,1.89,2.21,0,2.05-.58,3.37-.58,7.78v8.47Z"/>
              <path className="cls-2" d="m305.34,41.04c0,1.47.42,2.94,1.31,3.79,1,.95,1.84,1.16,1.84,2.58,0,1.16-.84,1.95-2.63,1.95s-3.58-.16-5.1-.16c-2.1,0-2.84.16-5.15.16-1.37,0-1.89-.84-1.89-1.84,0-1.42.47-2.52.74-3.26.53-1.47,1-6.15,1-9.83,0-4.1-1-5.84-3.26-5.84-.95,0-2.79.63-2.79,3.84v7.68c0,2.58.05,3.47.84,4.52s1.74,1.26,1.74,2.79c0,1.16-.63,1.95-2.42,1.95s-3.63-.16-5.15-.16c-2.1,0-4.05.16-6.36.16-1.37,0-1.89-.84-1.89-1.84,0-1.42,1.11-2.26,1.58-2.89,1.31-1.84,1.42-3.63,1.42-5v-7.83c0-1.89-1.16-2.73-1.68-3.1-.58-.42-1.05-.79-1.05-1.68,0-1.68,2.16-1.95,4.79-3.15,3.37-1.58,3.84-2.16,4.89-2.16,1.32,0,2,.53,2.53,2.31.16.63.37,1.16.79,1.16.68,0,3.63-3.47,8.31-3.47,6.26,0,8.31,3.84,8.31,9.25,0,3.42-.68,8.05-.68,10.1Z"/>
            </g>
            <g id="FESTIVAL">
              <g>
                <path className="cls-2" d="m113.78,92.99l-.71-2.58,2.54-1.29,7.62-19.6h-2.85l.71-2.94h3.3l4.19-10.73,4.41,1.56c-.04,2.85-1.51,7.08-3.96,9.18h3.96l-.94,2.94h-4.14l-6.9,18.44c-1.34,3.65-4.77,5.39-7.22,5.03Z"/>
                <path className="cls-2" d="m132.71,87.96l-4.45-2.4c-.58-10.38,4.99-18.48,12.16-19.87l5.75,2.81-3.07,8.95-9.31,2.14c-.45,1.38-.67,2.85-.71,4.41l9.44-3.12.94,3.21-10.73,3.88Zm7.22-12.16l1.96-6.86c-3.03,1.51-5.61,4.45-7.22,8.11l5.26-1.25Z"/>
                <path className="cls-2" d="m142.77,86.84l.36-3.3h10.38v-1.92c-3.56-.36-6.32-1.2-8.69-2.67,1.25-6.37,6.24-12.52,11.58-13.27l5.75,2.81-2.81,8.11-3.38-.58,1.07-6.77c-2.67,1.43-5.34,4.41-6.77,8.42l6.68,2.18.13,5.34c-1.56,1.83-4.1,2.72-7.35,2.72-2,0-4.32-.36-6.95-1.07Z"/>
                <path className="cls-2" d="m163.57,87.96l-4.5-2.4,6.28-16.04h-2.76l.76-2.94h3.16l2.14-5.48,4.14,1.65-1.43,3.83h4.85l-.94,2.94h-5.03l-5.26,14.21,5.75-2.09,1.07,3.34-8.24,2.98Z"/>
                <path className="cls-2" d="m171.23,85.86l8.33-20.13,4.19,1.65-7.93,20.53-4.59-2.05Zm13.01-22.22l-3.7-.67c-.13-2.18.18-4.37.8-6.55l4.14.71-1.25,6.5Z"/>
                <path className="cls-2" d="m180.58,85.46l6.19-19.73,4.46,2.05c-.89,4.5-2.63,8.95-5.7,15.23l3.21,1.11c3.52-4.28,6.55-11.13,8.15-18.4l4.41,1.56c-2.05,10.78-7.08,19.06-13.45,20.62l-7.26-2.45Z"/>
                <path className="cls-2" d="m210.47,85.91l3.34-10.38-8.64,12.38-6.81-2.4c-.04-8.86,6.15-19.11,13.1-19.82l4.45,4.05,1.47-3.7,3.92,1.38-6.55,20.49-4.28-2Zm1.25-15.95c-4.05,2.32-7.22,7.17-8.64,13.18l1.6.76,9.27-12.07-2.23-1.87Z"/>
                <path className="cls-2" d="m229.57,55.84l4.23,1.69-12.16,30.38-3.92-2.05,11.85-30.02Z"/>
              </g>
              <rect className="cls-1" x="114.37" y="59.95" width="124.21" height="31.14" rx="15.57" ry="15.57"/>
            </g>
          </svg>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {currentPage === 'home' ? (
            <>
              <a href="#lineup" className="text-lg font-medium text-white hover:text-yellow-400 transition-colors">
                Lineup
              </a>
              <a href="#about" className="text-lg font-medium text-white hover:text-yellow-400 transition-colors">
                About
              </a>
            </>
          ) : (
            <Link 
              to="/"
              className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
            >
              Accueil
            </Link>
          )}
          <Link 
            to="/infos"
            className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
          >
            Infos Pratiques
          </Link>
        </nav>

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
          <nav className="container mx-auto px-10 py-6 flex flex-col space-y-4">
            {currentPage === 'home' ? (
              <>
                <a 
                  href="#lineup" 
                  className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LineUp
                </a>
                <a 
                  href="#about" 
                  className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  A propos
                </a>
              </>
            ) : (
              <Link 
                to="/"
                className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
            )}
            <Link 
              to="/infos"
              className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Infos Pratiques
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}