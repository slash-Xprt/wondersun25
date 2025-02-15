import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

declare global {
  interface Window {
    bwUTracker: any;
  }
}

export default function Billetterie() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.billetweb.fr/js/export.js';
    script.async = true;
    script.id = 'billetweb-script';
    document.body.appendChild(script);

    return () => {
      try {
        const existingScript = document.getElementById('billetweb-script');
        if (existingScript) {
          existingScript.remove();
        }
      } catch (error) {
        console.error('Error cleaning up Billetweb script:', error);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#699ae0] to-[#ff8f96]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#ff8f96] bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-center">
            <Link to="/">
                <Logo className="h-16 w-auto text-white hover:text-yellow-300 transition-colors" />
            </Link>
        </div>
      </header>
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center">
            Billetterie
          </h1>

          {/* Billetweb Widget */}
          <div className="max-w-4xl mx-auto h-[calc(100vh-13rem)]">
            <a 
              title="Vente de billets en ligne" 
              href="https://www.billetweb.fr/shop.php?event=wondersun-festival-2025" 
              className="shop_frame" 
              target="_blank" 
              data-src="https://www.billetweb.fr/shop.php?event=wondersun-festival-2025" 
              data-max-width="100%" 
              data-initial-height="100%" 
              data-scrolling="no" 
              data-id="wondersun-festival-2025" 
              data-resize="1"
              rel="noopener noreferrer"
            >
              Vente de billets en ligne
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}