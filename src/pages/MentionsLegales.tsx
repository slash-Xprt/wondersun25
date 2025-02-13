import React from 'react';
import { Header } from '../components/Header';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#699ae0] to-[#ff8f96]">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-yellow-400 mb-12">
              Mentions légales
            </h1>

            <div className="space-y-8 bg-white/10 backdrop-blur-md rounded-lg p-8">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-gray-300 text-justify">
                  Les conditions générales suivantes s'appliquent à tous les utilisateurs du site www.wondersun-festival.fr.
                  En accédant à ce site, vous acceptez de vous conformer aux présentes conditions d'utilisation.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Éditeur du site</h2>
                <div className="text-gray-300 text-justify space-y-4">
                  <p>
                    Association Drômers (ci-après désigné Drômers)<br />
                    Association à but non lucratif relevant de la loi 1901<br />
                    Siège social : 1 Avenue Saint-Martin, 26200 Montélimar<br />
                    Email : contact@dromers.fr
                  </p>
                  <p>
                    Directeur de la publication : Association Drômers<br />
                    Responsable de la rédaction : Association Drômers
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Hébergement</h2>
                <p className="text-gray-300 text-justify">
                  OVH SAS<br />
                  Capital social : 10 069 020 €<br />
                  RCS Lille Métropole 424 761 419 00045<br />
                  Siège social : 2 rue Kellermann – 59100 Roubaix – France
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Propriété intellectuelle</h2>
                <p className="text-gray-300 text-justify">
                  L'ensemble du contenu de ce site (structure, textes, logos, images, photographies, vidéos, sons, etc.) 
                  est la propriété exclusive de l'Association Drômers ou de ses partenaires. Toute reproduction, 
                  représentation, modification, publication ou adaptation totale ou partielle des éléments du site est 
                  strictement interdite sans autorisation écrite préalable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Accès au site</h2>
                <p className="text-gray-300 text-justify">
                  L'accès au site www.wondersun-festival.fr est gratuit. Les frais d'accès et d'utilisation du réseau 
                  de télécommunication sont à la charge de l'utilisateur, selon les modalités fixées par ses fournisseurs 
                  d'accès et opérateurs de télécommunication.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Limitation de responsabilité</h2>
                <p className="text-gray-300 text-justify">
                  L'Association Drômers ne pourra être tenue responsable des dommages directs et indirects causés au 
                  matériel de l'utilisateur, lors de l'accès au site www.wondersun-festival.fr. L'Association Drômers 
                  décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations et contenus 
                  présents sur www.wondersun-festival.fr.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-gray-300">
                    Pour toute question concernant ces mentions légales, vous pouvez nous contacter :<br /><br />
                    Email : contact@dromers.fr<br />
                    Adresse : 1 Avenue Saint-Martin, 26200 Montélimar
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}