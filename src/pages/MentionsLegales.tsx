import React from 'react';
import { Header } from '../components/Header';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Mentions légales
          </h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">INTRODUCTION</h2>
              <p className="text-gray-600">
                Les conditions générales suivantes s'appliquent à tous les utilisateurs du site www.wondersun-festival.fr
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">OBJET</h2>
              <div className="space-y-4">
                <p className="text-gray-600">Les présentes Conditions Générales ont pour objet de définir les conditions d'utilisation du site www.wondersun-festival.fr</p>
                <p className="text-gray-600">Tout accès et/ou utilisation du site www.wondersun-festival.fr suppose l'acceptation et le respect de l'ensemble des termes des présentes Conditions.</p>
                <p className="text-gray-600">Elles constituent donc un contrat entre l'association Drômers et l'utilisateur.</p>
                <p className="text-gray-600">Dans le cas où l'utilisateur ne souhaite pas accepter tout ou partie des présentes conditions générales, il lui est demandé de quitter le site www.wondersun-festival.fr</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">MENTION LÉGALE</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Éditeur</h3>
                  <p className="text-gray-600">
                    Association Drômers (ci-après désigné Drômers)<br />
                    Association à but non lucratif relevant de la loi 1901<br />
                    Adresse : 1 Avenue Saint-Martin, 26200 Montélimar<br />
                    Email : contact@dromers.fr
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Hébergeur</h3>
                  <p className="text-gray-600">
                    OVH<br />
                    SAS au capital de 10 069 020 €<br />
                    RCS Lille Métropole 424 761 419 00045<br />
                    Code APE 2620Z<br />
                    N° TVA : FR 22 424 761 419<br />
                    Siège social : 2 rue Kellermann – 59100 Roubaix – France
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">ACCÈS AU SITE</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Le site www.wondersun-festival.fr est accessible gratuitement à tout utilisateur disposant d'un accès à internet. 
                  Tous les coûts afférents à l'accès au site www.wondersun-festival.fr, que ce soient les frais matériels, 
                  logiciels ou d'accès à internet sont exclusivement à la charge de l'utilisateur. Il est seul responsable du 
                  bon fonctionnement de son équipement informatique ainsi que de son accès à internet.
                </p>
                <p className="text-gray-600">
                  Drômers met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de qualité au site 
                  www.wondersun-festival.fr, mais n'est tenu à aucune obligation d'y parvenir.
                </p>
                <p className="text-gray-600">
                  Drômers ne peut, en outre, être tenue responsable de tout dysfonctionnement du réseau ou des serveurs ou 
                  de tout autre événement échappant au contrôle raisonnable, qui empêcherait ou dégraderait l'accès au site 
                  www.wondersun-festival.fr.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}