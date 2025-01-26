import React from 'react';
import { MapPin, Clock, Car, UtensilsCrossed, Leaf, Truck, Globe, Coffee, ParkingMeter as Parking, Train } from 'lucide-react';
import { Header } from '../components/Header';

export default function InfosPratiques() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 text-yellow-400">
            Infos pratiques
          </h1>

          <div className="max-w-4xl mx-auto grid gap-6">
            {/* Essential Info Grid */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center text-center border border-white/20">
                <Clock className="h-6 w-6 text-yellow-400 mb-2" />
                <p className="text-white font-bold">15-16 août</p>
                <p className="text-sm text-gray-300">14h - 02h</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center text-center border border-white/20">
                <MapPin className="h-6 w-6 text-yellow-400 mb-2" />
                <p className="text-white font-bold">Vieil Allan</p>
                <p className="text-sm text-gray-300">Drôme (26)</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center text-center border border-white/20">
                <Parking className="h-6 w-6 text-yellow-400 mb-2" />
                <p className="text-white font-bold">Parking gratuit</p>
                <p className="text-sm text-gray-300">1000 places</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center text-center border border-white/20">
                <UtensilsCrossed className="h-6 w-6 text-yellow-400 mb-2" />
                <p className="text-white font-bold">Food & Drinks</p>
                <p className="text-sm text-gray-300">CB & Cashless</p>
              </div>
            </div>

            {/* Access Section */}
            <section className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <Car className="h-6 w-6 text-yellow-400" />
                <h2 className="text-xl font-bold text-white">Accès</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-yellow-400 font-medium">
                    <Car className="h-4 w-4" />
                    En voiture
                  </div>
                  <ul className="text-white space-y-1 text-sm pl-6">
                    <li>• A7 sortie Montélimar Sud</li>
                    <li>• D206 direction Allan</li>
                    <li>• Suivre signalétique festival</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-yellow-400 font-medium">
                    <Train className="h-4 w-4" />
                    En train + navette
                  </div>
                  <ul className="text-white space-y-1 text-sm pl-6">
                    <li>• Gare de Montélimar</li>
                    <li>• Navettes gratuites (12h-20h)</li>
                    <li>• Départ toutes les 30 min</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <UtensilsCrossed className="h-6 w-6 text-yellow-400" />
                <h2 className="text-xl font-bold text-white">Services</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-yellow-400 font-medium">
                    <Truck className="h-4 w-4" />
                    Restauration
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm pl-6">
                    <div className="flex items-center gap-1 text-white">
                      <Leaf className="h-3 w-3 text-yellow-400" />
                      Végétarien
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <Globe className="h-3 w-3 text-yellow-400" />
                      World Food
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-yellow-400 font-medium">
                    <Coffee className="h-4 w-4" />
                    Bars
                  </div>
                  <ul className="text-white space-y-1 text-sm pl-6">
                    <li>• Cocktails & Bières</li>
                    <li>• Vins locaux</li>
                    <li>• Soft drinks</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-center">
                <p className="text-sm text-gray-300">
                  💳 Paiement par CB et cashless uniquement
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}