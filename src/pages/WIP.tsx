import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import { MainHeader } from '../components/MainHeader';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { subscribeToNewsletter } from '../utils/api';

function WIP() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubscribing, setIsSubscribing] = useState(false);

  const renderHomePage = () => (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('public/images/Header Website low file.mp4')`
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-1xl md:text-5xl font-bold mb-5 tracking-large text-white">4 & 5 juillet 2025 • Vieil Allan</h1>
          <Link 
            to="/billetterie"
            className="inline-block px-8 py-3 bg-yellow-400 text-black font-medium rounded-md hover:bg-yellow-300 transition-colors"
          >
            Ticket
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#ff8f96]">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Un festival unique</h2>
              <h3 className="text-1xl md:text-2xl font-bold text-white">Viens vivre l'experience Wondersun</h3>
              <p className="text-lg text-gray-300">
                Venez célébrer avec nous le pouvoir de la musique. Rejoignez-nous pour deux jours inoubliables, 
                dans le cadre unique des ruines du vieil Allan au coeur de la Drôme Provençale. 
                Découvrez des installations artistiques immersives et le belvédère offrant une vue unique sur la vallée de la Drôme.
              </p>
            </div>
            <div className="relative h-96">
              <img
                src="/images/belvedere.JPG"
                alt="Festival atmosphere"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-t from-[#699ae0] to-[#ff8f96]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Reste informé.e</h2>
          <p className="text-xl mb-8 text-white">Abonne toi et sois le ou la première informée des actus et mise en vente des billets.</p>
          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
              
              if (emailInput.value && !isSubscribing) {
                setIsSubscribing(true);
                try {
                  const response = await subscribeToNewsletter(emailInput.value);
                  if (response.success) {
                    emailInput.value = '';
                    alert('Inscription réussie ! Vous recevrez bientôt un email de confirmation.');
                  } else {
                    throw new Error(response.message || 'Erreur lors de l\'inscription');
                  }
                } catch (error) {
                  console.error('Newsletter error:', error);
                  const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.';
                  alert(errorMessage);
                } finally {
                  setIsSubscribing(false);
                }
              }
            }} 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
          >
            <input
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-yellow-400"
              placeholder="ton adresse email"
              type="email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Veuillez entrer une adresse email valide"
              disabled={isSubscribing}
            />
            <button 
              type="submit" 
              className="bg-yellow-400 text-black text-xl hover:bg-yellow-300 px-6 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 w-full sm:w-auto"
              disabled={isSubscribing}
            >
              {isSubscribing ? 'Inscription...' : 'S\'inscrire'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {location.pathname === '/' ? <MainHeader /> : <Header />}
      {location.pathname === '/' ? renderHomePage() : <Outlet />}
      <Footer onNavigate={(page) => navigate(`/${page === 'home' ? '' : page}`)} />
    </div>
  );
}

export default WIP;
