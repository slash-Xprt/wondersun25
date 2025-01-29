import React from 'react';
import { Shield } from 'lucide-react';
import { Header } from '../components/Header';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-yellow-400 mb-12">
              Politique de confidentialité
            </h1>

            <div className="space-y-8 bg-white/10 backdrop-blur-md rounded-lg p-8">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-gray-300 text-justify">
                  Devant le développement des nouveaux outils de communication, il est nécessaire de porter une attention particulière 
                  à la protection de la vie privée. C'est pourquoi, nous nous engageons à respecter la confidentialité des 
                  renseignements personnels que nous collectons.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Collecte des renseignements personnels</h2>
                <p className="text-gray-300 text-justify mb-4">
                  Nous collectons les renseignements suivants pour assurer le bon fonctionnement de nos services et améliorer votre expérience :
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Nom et prénom</li>
                  <li>Adresse postale</li>
                  <li>Code postal</li>
                  <li>Adresse électronique</li>
                  <li>Numéro de téléphone</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Utilisation des renseignements</h2>
                <p className="text-gray-300 text-justify">
                  Les renseignements personnels que nous collectons sont utilisés pour les finalités suivantes :
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4 ml-4">
                  <li>Communication sur les événements et actualités du festival</li>
                  <li>Traitement des commandes de billets</li>
                  <li>Amélioration de nos services</li>
                  <li>Analyses statistiques</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Droit d'accès et de rectification</h2>
                <p className="text-gray-300 text-justify">
                  Vous disposez d'un droit d'accès, de modification et de suppression de vos données personnelles. 
                  Pour exercer ces droits ou pour toute question relative à notre politique de confidentialité, 
                  vous pouvez nous contacter :
                </p>
                <div className="mt-4 bg-white/5 p-4 rounded-lg">
                  <p className="text-gray-300">
                    Email : contact@wondersun-festival.fr<br />
                    Téléphone : 04 75 01 02 03<br />
                    Adresse : 1 Avenue Saint-Martin, 26200 Montélimar
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Sécurité</h2>
                <p className="text-gray-300 text-justify">
                  Les renseignements personnels que nous collectons sont conservés dans un environnement sécurisé. 
                  Nos employés sont tenus de respecter la confidentialité de vos informations. Pour assurer la sécurité 
                  de vos renseignements personnels, nous avons recours aux mesures suivantes :
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4 ml-4">
                  <li>Protocole SSL (Secure Sockets Layer)</li>
                  <li>Gestion des accès - personne autorisée</li>
                  <li>Pare-feu (Firewall)</li>
                  <li>Sauvegarde informatique chiffrée</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Législation</h2>
                <p className="text-gray-300 text-justify">
                  Nous nous engageons à respecter les dispositions législatives énoncées dans la Loi n° 78-17 du 6 janvier 1978 
                  relative à l'informatique, aux fichiers et aux libertés, modifiée par le Règlement général sur la protection 
                  des données (RGPD) entré en vigueur le 25 mai 2018.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}