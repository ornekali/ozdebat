'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Send, CheckCircle, Phone, Clock, Shield, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

const serviceOptions = [
  'Maçonnerie Générale',
  'Carrelage & Revêtements',
  'Rénovation Complète',
  'Travaux Publics',
  'Construction Neuve',
  'Location de Matériel BTP',
  'Terrassement',
  'Reprise en Sous-Œuvre',
  'Fondations & Ferraillage',
  'Autre',
];

export default function DevisPage() {
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
      ville: formData.get('ville'),
      service: formData.get('service'),
      surface: formData.get('surface'),
      budget: formData.get('budget'),
      dateDebut: formData.get('dateDebut'),
      description: formData.get('description'),
    };

    try {
      const res = await fetch('/api/devis', {
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
      {/* Page Header */}
      <section className="relative py-20 mt-[112px] md:mt-[120px] bg-dark overflow-hidden">
        <Image src="/images/construction-maison-extension.jpg" alt="" fill className="object-cover opacity-20" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/60" />
        <div className="relative z-10 max-w-[1170px] mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Devis Gratuit</h2>
          <nav aria-label="breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-secondary transition-colors">Accueil</Link></li>
              <li className="text-white/40">/</li>
              <li className="text-secondary font-medium">Devis</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-light border-b border-gray-200">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted">
            <span className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" /> Sans engagement
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" /> Réponse sous 24h
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-secondary" /> Suivi personnalisé
            </span>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[800px] mx-auto px-4">
          {submitted ? (
            <div className="bg-green-50 p-12 text-center border border-green-100">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Demande de Devis Envoyée !
              </h2>
              <p className="text-green-700 text-base mb-8 max-w-lg mx-auto">
                Merci pour votre demande. Notre équipe va étudier votre projet
                et vous contactera sous 24 heures avec un devis détaillé.
              </p>
              <Link href="/" className="main-btn inline-flex items-center gap-2">
                Retour à l&apos;accueil <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="bg-white shadow-xl border border-gray-100 p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-2">Votre Projet</h2>
              <div className="w-12 h-[3px] bg-secondary mb-8" />
              <p className="text-muted mb-10">
                Remplissez le formulaire ci-dessous pour recevoir votre devis gratuit.
                Plus votre description est détaillée, plus le devis sera précis.
              </p>

              {error && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 flex items-center gap-3 text-red-700">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1 */}
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-secondary text-white flex items-center justify-center text-sm">1</span>
                    Vos Coordonnées
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-dark mb-2">Nom complet *</label>
                      <input id="nom" name="nom" type="text" required placeholder="Jean Dupont"
                        className="form-input w-full px-4 py-3 border border-gray-200 bg-light text-dark placeholder-muted text-sm" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">Email *</label>
                      <input id="email" name="email" type="email" required placeholder="jean@exemple.fr"
                        className="form-input w-full px-4 py-3 border border-gray-200 bg-light text-dark placeholder-muted text-sm" />
                    </div>
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-dark mb-2">Téléphone *</label>
                      <input id="telephone" name="telephone" type="tel" required placeholder="06 XX XX XX XX"
                        className="form-input w-full px-4 py-3 border border-gray-200 bg-light text-dark placeholder-muted text-sm" />
                    </div>
                    <div>
                      <label htmlFor="ville" className="block text-sm font-medium text-dark mb-2">Ville / Code Postal *</label>
                      <input id="ville" name="ville" type="text" required placeholder="93290 Tremblay-en-France"
                        className="form-input w-full px-4 py-3 border border-gray-200 bg-light text-dark placeholder-muted text-sm" />
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-secondary text-white flex items-center justify-center text-sm">2</span>
                    Votre Projet
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-dark mb-2">Type de service *</label>
                      <select id="service" name="service" required defaultValue=""
                        className="form-input w-full px-4 py-3 border border-gray-200 bg-light text-dark text-sm">
                        <option value="" disabled>Choisir un service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="surface" className="block text-sm font-medium text-dark mb-2">Surface approximative</label>
                        <input id="surface" name="surface" type="text" placeholder="ex: 80 m²"
                          className="form-input w-full px-4 py-3 border border-gray-200 bg-light text-dark placeholder-muted text-sm" />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-dark mb-2">Budget estimé</label>
                        <select id="budget" name="budget" defaultValue=""
                          className="form-input w-full px-4 py-3 border border-gray-200 bg-light text-dark text-sm">
                          <option value="">Fourchette de budget</option>
                          <option value="Moins de 5 000 €">Moins de 5 000 &euro;</option>
                          <option value="5 000 - 15 000 €">5 000 - 15 000 &euro;</option>
                          <option value="15 000 - 30 000 €">15 000 - 30 000 &euro;</option>
                          <option value="30 000 - 50 000 €">30 000 - 50 000 &euro;</option>
                          <option value="Plus de 50 000 €">Plus de 50 000 &euro;</option>
                          <option value="Je ne sais pas encore">Je ne sais pas encore</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="dateDebut" className="block text-sm font-medium text-dark mb-2">Date souhaitée</label>
                      <select id="dateDebut" name="dateDebut" defaultValue=""
                        className="form-input w-full px-4 py-3 border border-gray-200 bg-light text-dark text-sm">
                        <option value="">Quand souhaitez-vous commencer ?</option>
                        <option value="Dès que possible">Dès que possible</option>
                        <option value="Dans le mois">Dans le mois</option>
                        <option value="Dans 1 à 3 mois">Dans 1 à 3 mois</option>
                        <option value="Dans plus de 3 mois">Dans plus de 3 mois</option>
                        <option value="Date flexible">Date flexible</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-dark mb-2">Description du projet *</label>
                      <textarea id="description" name="description" required rows={6}
                        placeholder="Décrivez votre projet en détail..."
                        className="form-input w-full px-4 py-3 border border-gray-200 bg-light text-dark placeholder-muted resize-none text-sm" />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4 border-t border-gray-100">
                  <button type="submit" disabled={loading}
                    className="main-btn inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                    {loading ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Envoyer ma Demande de Devis</>
                    )}
                  </button>
                  <p className="text-muted text-xs mt-4">
                    * Champs obligatoires. Vos données sont traitées de manière confidentielle.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
