'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Pierre Dumont',
    role: 'Propriétaire, Paris 15e',
    content: 'Rénovation complète de mon appartement. Travail soigné, respect des délais et budget. Je recommande vivement OZDE BAT.',
    initials: 'PD',
    rating: 5,
  },
  {
    name: 'Marie Lambert',
    role: 'Gérante, Restaurant Le Parisien',
    content: 'Excellente prestation pour la rénovation de notre restaurant. L\'équipe est professionnelle et le résultat magnifique.',
    initials: 'ML',
    rating: 5,
  },
  {
    name: 'Ahmed Benali',
    role: 'Promoteur Immobilier',
    content: 'Nous travaillons avec OZDE BAT depuis plusieurs projets. Fiabilité, qualité et prix compétitifs. Un partenaire de confiance.',
    initials: 'AB',
    rating: 5,
  },
  {
    name: 'Sophie Moreau',
    role: 'Propriétaire, Tremblay-en-France',
    content: 'Carrelage et maçonnerie pour notre maison. Le travail est impeccable et l\'équipe très sympathique. Je recommande sans hésiter.',
    initials: 'SM',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-3xl sm:text-4xl font-bold text-dark section-line">
            Avis de Nos Clients
          </h3>
          <p className="text-muted mt-6 max-w-xl mx-auto">
            La satisfaction de nos clients est notre meilleure référence.
          </p>
        </div>

        {/* Centered testimonial card */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-light p-8 sm:p-12">
            <Quote className="w-10 h-10 text-secondary/20 mx-auto mb-4" />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-xl sm:text-2xl text-dark font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
              &ldquo;{t.content}&rdquo;
            </p>

            {/* Avatar + Name */}
            <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center text-lg font-bold mx-auto mb-3">
              {t.initials}
            </div>
            <h4 className="text-lg font-bold text-dark">{t.name}</h4>
            <p className="text-secondary text-sm mb-6">{t.role}</p>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={prev}
                aria-label="Précédent"
                className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-muted text-sm tabular-nums">{current + 1} / {testimonials.length}</span>
              <button
                onClick={next}
                aria-label="Suivant"
                className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
