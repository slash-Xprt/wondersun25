import React from 'react';
import { Shield, Lock, UserCheck, FileCheck } from 'lucide-react';
import { Header } from '../components/Header';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12">
              Politique de confidentialité
            </h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">INTRODUCTION</h2>
                <p className="text-gray-300">
                  Devant le développement des nouveaux outils de communication, il est nécessaire de porter une attention particulière 
                  à la protection de la vie privée. C'est pourquoi, nous nous engageons à respecter la confidentialité des 
                  renseignements personnels que nous collectons.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">COLLECTE DES RENSEIGNEMENTS PERSONNELS</h2>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Informations collectées</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Nom</li>
                    <li>Prénom</li>
                    <li>Adresse postale</li>
                    <li>Code postal</li>
                    <li>Adresse électronique</li>
                    <li>Numéro de téléphone / télécopieur</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">FORMULAIRES ET INTERACTIVITÉ</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FileCheck className="h-6 w-6 text-yellow-400" />
                      <h3 className="text-xl font-bold text-yellow-400">Sources de collecte</h3>
                    </div>
                    <ul className="text-gray-300 space-y-2">
                      <li>Formulaire d'inscription au site Web</li>
                      <li>Formulaire de commande</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <UserCheck className="h-6 w-6 text-yellow-400" />
                      <h3 className="text-xl font-bold text-yellow-400">Finalités</h3>
                    </div>
                    <ul className="text-gray-300 space-y-2">
                      <li>Informations / Offres promotionnelles</li>
                      <li>Statistiques</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">DROIT D'OPPOSITION ET DE RETRAIT</h2>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                  <p className="text-gray-300 mb-4">
                    Nous nous engageons à vous offrir un droit d'opposition et de retrait quant à vos renseignements personnels.
                  </p>
                  <div className="space-y-4 text-gray-300">
                    <p>Pour exercer ces droits, vous pouvez nous contacter :</p>
                    <ul className="space-y-2">
                      <li>Courriel : contact@dromers.fr</li>
                      <li>Téléphone : 0475010203</li>
                      <li>Site web : http://www.wondersun-festival.fr</li>
                      <li>Adresse : 1 Avenue Saint-Martin, 26200 Montélimar</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">SÉCURITÉ</h2>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-6 w-6 text-yellow-400" />
                    <h3 className="text-xl font-bold text-yellow-400">Mesures de sécurité</h3>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-yellow-400" />
                      Protocole SSL
                    </li>
                    <li className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-yellow-400" />
                      Gestion des accès
                    </li>
                    <li className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-yellow-400" />
                      Surveillance réseau
                    </li>
                    <li className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-yellow-400" />
                      Sauvegardes
                    </li>
                    <li className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-yellow-400" />
                      Certificats numériques
                    </li>
                    <li className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-yellow-400" />
                      Pare-feu
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">LÉGISLATION</h2>
                <p className="text-gray-300">
                  Nous nous engageons à respecter les dispositions législatives énoncées dans la Loi n° 78-17 Informatique et Libertés.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}