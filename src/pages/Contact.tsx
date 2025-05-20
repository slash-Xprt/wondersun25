import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Header } from '../components/Header';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#699ae0] to-[#ff8f96]">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-yellow-400 mb-12 text-center">
              Contactez-nous
            </h1>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Informations de contact</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-yellow-400 mt-1" />
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-gray-300">contact@dromers.fr</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-yellow-400 mt-1" />
                      <div>
                        <p className="text-white font-medium">Adresse</p>
                        <p className="text-gray-300">
                          1 Avenue Saint-Martin<br />
                          26200 Montélimar<br />
                          France
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez un sujet</option>
                      <option value="billetterie" className="bg-gray-900">Billetterie</option>
                      <option value="programme" className="bg-gray-900">Programme</option>
                      <option value="partenariat" className="bg-gray-900">Partenariat</option>
                      <option value="presse" className="bg-gray-900">Presse</option>
                      <option value="autre" className="bg-gray-900">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none transition-all"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full flex items-center justify-center gap-2 bg-yellow-400 text-black font-medium py-3 px-6 rounded-md hover:bg-yellow-300 transition-all transform hover:scale-[1.02]`}
                  >
                    <Send className="h-5 w-5" />
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}