'use client';

import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    lines: ['1 Avenue Jean Jacques Rousseau', '93290 Tremblay-en-France'],
    href: 'https://maps.google.com/?q=1+Avenue+Jean+Jacques+Rousseau+93290+Tremblay-en-France',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    lines: ['01 XX XX XX XX'],
    href: 'tel:+33XXXXXXXXX',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['contact@ozdebat.fr'],
    href: 'mailto:contact@ozdebat.fr',
  },
  {
    icon: Clock,
    title: 'Horaires',
    lines: ['Lun - Ven: 8h00 - 18h00', 'Sam: 9h00 - 14h00'],
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      nom: formData.get('nom'),
      email: formData.get('email'),
      telephone: formData.get('telephone'),
      sujet: formData.get('sujet'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error || 'Une erreur est survenue.');
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setError('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/ferraillage-dalle-ouvrier.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Contactez-nous</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-4 mb-6">
            Nous <span className="text-secondary">Contacter</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Une question ? Un projet ? N&apos;hésitez pas à nous contacter.
            Nous vous répondons sous 24 heures.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href || '#'}
                className="card-hover bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm group"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                  <info.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-primary mb-2">{info.title}</h3>
                {info.lines.map((line) => (
                  <p key={line} className="text-gray-600 text-sm">{line}</p>
                ))}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Envoyez-nous un Message</h2>
              <div className="section-divider mb-8" />

              {submitted ? (
                <div className="bg-green-50 rounded-2xl p-12 text-center border border-green-100">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Envoyé !</h3>
                  <p className="text-green-700">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          id="nom"
                          name="nom"
                          type="text"
                          required
                          placeholder="Jean Dupont"
                          className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="jean@exemple.fr"
                          className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          placeholder="01 XX XX XX XX"
                          className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                          Sujet *
                        </label>
                        <select
                          id="sujet"
                          name="sujet"
                          required
                          className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900"
                          defaultValue=""
                        >
                          <option value="" disabled>Choisir un sujet</option>
                          <option value="Demande de devis">Demande de devis</option>
                          <option value="Information sur un service">Information sur un service</option>
                          <option value="Location de matériel">Location de matériel</option>
                          <option value="Suivi de chantier">Suivi de chantier</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Décrivez votre projet ou votre demande..."
                        className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-lg hover:shadow-secondary/25 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer le Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Nous Trouver</h2>
              <div className="section-divider mb-8" />
              <div className="map-container h-[500px] bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.5!2d2.5698!3d48.9547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e614c5468f94e1%3A0x5c006e82a4ed3b0!2s1%20Av.%20Jean%20Jacques%20Rousseau%2C%2093290%20Tremblay-en-France!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OZDE BAT - Localisation"
                />
              </div>
              <p className="text-gray-500 text-sm mt-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                1 Avenue Jean Jacques Rousseau, 93290 Tremblay-en-France
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
