import React from 'react';
import { Header } from '../components/Header';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Politique de confidentialité
          </h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">INTRODUCTION</h2>
              <p className="text-gray-600">
                Devant le développement des nouveaux outils de communication, il est nécessaire de porter une attention particulière 
                à la protection de la vie privée. C'est pourquoi, nous nous engageons à respecter la confidentialité des 
                renseignements personnels que nous collectons.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">COLLECTE DES RENSEIGNEMENTS PERSONNELS</h2>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Informations collectées</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Nom</li>
                <li>Prénom</li>
                <li>Adresse postale</li>
                <li>Code postal</li>
                <li>Adresse électronique</li>
                <li>Numéro de téléphone / télécopieur</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">FORMULAIRES ET INTERACTIVITÉ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Sources de collecte</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Formulaire d'inscription au site Web</li>
                    <li>Formulaire de commande</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Finalités</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Informations / Offres promotionnelles</li>
                    <li>Statistiques</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">DROIT D'OPPOSITION ET DE RETRAIT</h2>
              <p className="text-gray-600 mb-4">
                Nous nous engageons à vous offrir un droit d'opposition et de retrait quant à vos renseignements personnels.
              </p>
              <p className="text-gray-600 mb-2">Pour exercer ces droits, vous pouvez nous contacter :</p>
              <ul className="text-gray-600 space-y-1">
                <li>Courriel : contact@dromers.fr</li>
                <li>Téléphone : 0475010203</li>
                <li>Site web : http://www.wondersun-festival.fr</li>
                <li>Adresse : 1 Avenue Saint-Martin, 26200 Montélimar</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">SÉCURITÉ</h2>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Mesures de sécurité</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                <li>Protocole SSL</li>
                <li>Gestion des accès</li>
                <li>Surveillance réseau</li>
                <li>Sauvegardes</li>
                <li>Certificats numériques</li>
                <li>Pare-feu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">LÉGISLATION</h2>
              <p className="text-gray-600">
                Nous nous engageons à respecter les dispositions législatives énoncées dans la Loi n° 78-17 Informatique et Libertés.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}