import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
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
        name: "Chicks Luv Us",
        description: "Originaire de Marseille, le groupe s'est forgé une solide réputation avec des sets énergiques et des productions signées sur des labels de renom comme Hot Creations et Repopulate Mars. Leur style festif et percutant, mêlant groove et basslines entraînantes, enflamme les clubs et festivals à travers le monde.",
        image: "/images/chicksluvus.JPG",
        instagram: "https://www.instagram.com/chicksluvus/",
        soundcloud: "https://soundcloud.com/chicksluvus",
        youtube: "https://www.youtube.com/watch?v=eaEK7cQ9mw4",
      },
      {
        name: "Dolfeels",
        description: "Dolfeels fait parti de ces jeunes artistes discrets qui font avancer la scène underground lyonnaise. Il s'emploie à diffuser ses sonorités Deep, Envoutante et Percutantes lors de ses set.",
        image: "images/dolfeels.jpg",
        instagram: "https://www.instagram.com/dolfeels/",
        soundcloud: "https://soundcloud.com/dolfeels",
        youtube: "https://www.youtube.com/watch?v=lT_AK2qnfX4",
      },
      {
        name: "Je t'Aime Rache L",
        description: "Figure incontournable du collectif drômois ROMANESQUE, Je t'aime Rache L est un éternel pacifiste qui cherche de manière continuelle à vous proposer ses disques laissant place au rêve, à l'amour et à la joie.",
        image: "images/jtmrachl.jpg",
        instagram: "https://www.instagram.com/jetaimerachel/",
        soundcloud: "https://soundcloud.com/kioskradio/je-taime-rache-l-kiosk-radio",
      },
      {
        name: "Sabor a mi",
        description: "Sabor a Mi (Sophie Legay Peñaloza), c'est une âme romantique avec une énergie débordante, beaucoup d'amour et une manière d'apprécier le moment présent comme si c'était le dernier.",
        image: "images/Saborami2.jpg",
        instagram: "https://www.instagram.com/sabor_a__mi/",
        soundcloud: "https://soundcloud.com/sophie-legay-1",
        youtube: "https://youtu.be/NB7YU-Q-R50",
      },
            },
         {
        name: "Louise UFO",
        image: "images/louise UFO.jpg",
      }
    ],
    day2: [
      {
        name: "Un*Deux & guests",
        description: "Originaire de Vitry Sur Seine, UN*DEUX est un jeune DJ/Producteur possédant une large palette d'influences qui se reflète dans ses propres productions et ses DJ set, ou il n'hésite pas à croiser House, Techno et Hip Hop.",
        image: "images/undeux.jpg",
        instagram: "https://www.instagram.com/undeux",
        soundcloud: "https://soundcloud.com/un-deux",
        youtube: "https://www.youtube.com/watch?v=8Qyqqthwpd8",
      },
            {
        name: "Loulou Ferrari",
        description: "Loulou Ferrari est une DJ française née à Annecy. Elle est inscrite dès l'âge de 5 ans au Conservatoire National d'Annecy. C'est naturellement qu'elle commença à mixer et joua dans divers endroits, allant de palaces prestigieux( Mandarin Oriental, Les Airelles) aux clubs les plus réputés( Rex Club, Audio, Sacré, Renate..) ainsi que pour des festivals ( Burning Man, Love International, Marvellous Island...).",
        image: "images/LOULOUFERRARI.jpg",
        instagram: "https://www.instagram.com/loulouferrari_",
        soundcloud: "https://soundcloud.com/loulouferrari",
        youtube: "https://www.youtube.com/watch?v=0WKprYXS9zI",
      },
         {
        name: "Martin Munier (Sacré)",
        image: "images/martin.jpg",
      },
              {
        name: "Baume",
        image: "images/Baume.jpg",
      },
      {
        name: "Charbeat & friends",
        image: "images/charbeat.jpeg",
        instagram: "https://www.instagram.com/dj_charbeat/",
      },
         {
        name: "Bonzanza Music",
        image: "images/Bonanza.jpeg",
      },
    ],
  };

  const renderHomePage = () => (
    <main className="flex-1">
       {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
    <video 
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay 
    loop 
    muted 
    playsInline
  >
    <source src="/images/Header Website.mp4" type="video/mp4" />
    Votre navigateur ne supporte pas les vidéos HTML5.
  </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-1xl md:text-5xl font-bold mb-5 tracking-large text-white">4 & 5 juillet 2025 • Vieil Allan!</h1>
          <Link 
            to="/billetterie"
            className="inline-block px-8 py-3 bg-yellow-400 text-black font-medium rounded-md hover:bg-yellow-300 transition-colors"
          >
            Ticket
          </Link>
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
                src="/images/belvedere.jpg"
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
            name="newsletter"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <input
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-yellow-400"
              placeholder="ton adresse email"
              type="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Veuillez entrer une adresse email valide"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-white text-xl hover:bg-yellow-300 px-6 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 w-full sm:w-auto"
            >
              S'inscrire
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
