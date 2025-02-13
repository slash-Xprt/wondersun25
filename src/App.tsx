import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { MainHeader } from './components/MainHeader';
import { Footer } from './components/Footer';
import { ArtistModal } from './components/ArtistModal';
import { Artist } from './types';
import { subscribeToNewsletter } from './utils/api';

function App(): JSX.Element {
  const [selectedDay, setSelectedDay] = useState<'day1' | 'day2'>('day1');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const lineup = {
    day1: [
      {
        name: "Artist 1",
        description: "Artist 1 is known for their energetic performances and chart-topping hits. With a unique blend of pop and electronic music, they've become one of the most sought-after performers in the industry.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
        time: "21:00",
        instagram: "https://instagram.com/artist1",
        spotify: "https://open.spotify.com/artist/artist1",
        deezer: "https://www.deezer.com/artist/artist1"
      },
      {
        name: "Dolfeels",
        description: "Artist 2 brings raw energy and powerful vocals to every performance. Their latest album has received critical acclaim for its innovative approach to modern rock.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
        time: "22:30",
        instagram: "https://instagram.com/artist2",
        spotify: "https://open.spotify.com/artist/artist2",
        deezer: "https://www.deezer.com/artist/artist2"
      },
      {
        name: "Je t'Aime Rachel",
        description: "Artist 3 is a pioneer in electronic music, known for creating immersive sonic landscapes and unforgettable live experiences.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
        time: "00:00",
        instagram: "https://instagram.com/artist3",
        spotify: "https://open.spotify.com/artist/artist3",
        deezer: "https://www.deezer.com/artist/artist3"
      },
      {
        name: "Sabor a mi",
        description: "Artist 4 represents the new wave of hip hop, combining clever wordplay with innovative production to create a unique sound.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
        time: "01:30",
        instagram: "https://instagram.com/artist4",
        spotify: "https://open.spotify.com/artist/artist4",
        deezer: "https://www.deezer.com/artist/artist4"
      }
    ],
    day2: [
      {
        name: "Un*Deux",
        description: "Artist 5 is a rising star in the R&B scene, known for their smooth vocals and emotional performances. Their music blends traditional R&B with modern production.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
        time: "20:00",
        instagram: "https://instagram.com/artist5",
        spotify: "https://open.spotify.com/artist/artist5",
        deezer: "https://www.deezer.com/artist/artist5"
      },
      {
        name: "Artist 6",
        description: "Artist 6 brings a fresh perspective to indie music with their unique sound and compelling songwriting.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
        time: "21:30",
        instagram: "https://instagram.com/artist6",
        spotify: "https://open.spotify.com/artist/artist6",
        deezer: "https://www.deezer.com/artist/artist6"
      },
      {
        name: "Gis",
        description: "Artist 7 pushes the boundaries of contemporary jazz, creating innovative compositions that respect tradition while embracing modernity.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
        time: "23:00",
        instagram: "https://instagram.com/artist7",
        spotify: "https://open.spotify.com/artist/artist7",
        deezer: "https://www.deezer.com/artist/artist7"
      },
      {
        name: "Ilan",
        description: "Artist 8 captivates audiences with their storytelling and authentic approach to folk music, creating intimate connections through their performances.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
        time: "00:30",
        instagram: "https://instagram.com/artist8",
        spotify: "https://open.spotify.com/artist/artist8",
        deezer: "https://www.deezer.com/artist/artist8"
      }
    ],
  };

  const renderHomePage = () => (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white">Wondersun Festival</h1>
          <h3 className="text-xl md:text-2xl mb-8 text-white">4 & 5 juillet 2025 • Vieil Allan</h3>
        </div>
      </section>

      {/* Lineup Section */}
      <section id="lineup" className="py-20 bg-gradient-to-b from-[#699ae0] to-[#ff8f96]"      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Lineup</h2>
          <div className="flex justify-center space-x-4 mb-12">
            {[
              { key: 'day1', label: 'Vendredi' },
              { key: 'day2', label: 'Samedi' },
            ].map((day) => (
              <button
                key={day.key}
                onClick={() => setSelectedDay(day.key as 'day1' | 'day2')}
                className={`text-2xl font-bold py-3 px-6 rounded-md transition-colors ${
                  selectedDay === day.key 
                    ? 'bg-yellow-400 text-white' 
                    : 'border border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {lineup[selectedDay].map((artist, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-yellow-400 transition-colors cursor-pointer"
                onClick={() => setSelectedArtist(artist)}
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-md">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-2 text-white">{artist.name}</h3>
                <p className="text-sm text-gray-400">{artist.genre}</p>
              </div>
            ))}
          </div>
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
                src="src/assets/belvedere.JPG"
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
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Veuillez entrer une adresse email valide"
              disabled={isSubscribing}
            />
            <button 
              type="submit" 
              className="bg-yellow-400 text-white text-xl hover:bg-yellow-300 px-6 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 w-full sm:w-auto"
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

      {selectedArtist && (
        <ArtistModal
          artist={selectedArtist}
          onClose={() => setSelectedArtist(null)}
          performanceDay={selectedDay === 'day1' ? 'Vendredi' : 'Samedi'}
        />
      )}

      {location.pathname === '/' ? renderHomePage() : <Outlet />}

      <Footer onNavigate={(page) => navigate(`/${page === 'home' ? '' : page}`)} />
    </div>
  );
}

export default App;