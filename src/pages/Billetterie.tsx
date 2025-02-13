import React, { useEffect } from 'react';
import { Header } from '../components/Header';

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
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center">
            Billetterie
          </h1>

          {/* Billetweb Widget */}
          <div className="max-w-4xl mx-auto">
            <a 
              title="Vente de billets en ligne" 
              href="https://www.billetweb.fr/shop.php?event=wondersun-festival1" 
              className="shop_frame" 
              target="_blank" 
              data-src="https://www.billetweb.fr/shop.php?event=wondersun-festival1" 
              data-max-width="100%" 
              data-initial-height="600" 
              data-scrolling="no" 
              data-id="wondersun-festival1" 
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