import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { submitContactForm } from '../utils/api';
import { Header } from '../components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                {status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">Message envoyé !</h3>
                    <p className="text-white mb-6">Nous vous répondrons dans les plus brefs délais.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="bg-yellow-400 text-black font-medium py-2 px-6 rounded-md hover:bg-yellow-300 transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
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
                          value={formData.email}
                          onChange={handleChange}
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
                        value={formData.subject}
                        onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none transition-all"
                        placeholder="Votre message..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-md p-3">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className={`w-full flex items-center justify-center gap-2 bg-yellow-400 text-black font-medium py-3 px-6 rounded-md hover:bg-yellow-300 transition-all transform hover:scale-[1.02] ${
                        status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <Send className="h-5 w-5" />
                      {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}