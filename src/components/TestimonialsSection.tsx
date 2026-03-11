'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Pierre Dumont',
    role: 'Propriétaire, Paris 15e',
    content: 'Rénovation complète de mon appartement. Travail soigné, respect des délais et budget. Je recommande vivement OZDE BAT.',
    initials: 'PD',
  },
  {
    name: 'Marie Lambert',
    role: 'Gérante, Restaurant Le Parisien',
    content: 'Excellente prestation pour la rénovation de notre restaurant. L\'équipe est professionnelle et le résultat magnifique.',
    initials: 'ML',
  },
  {
    name: 'Ahmed Benali',
    role: 'Promoteur Immobilier',
    content: 'Nous travaillons avec OZDE BAT depuis plusieurs projets. Fiabilité, qualité et prix compétitifs. Un partenaire de confiance.',
    initials: 'AB',
  },
  {
    name: 'Sophie Moreau',
    role: 'Propriétaire, Tremblay-en-France',
    content: 'Carrelage et maçonnerie pour notre maison. Le travail est impeccable et l\'équipe très sympathique. Je recommande sans hésiter.',
    initials: 'SM',
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

  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-3xl sm:text-4xl font-bold text-dark section-line">
            Avis de Nos Clients
          </h3>
          <p className="text-muted mt-6 max-w-xl mx-auto">
            La satisfaction de nos clients est notre meilleure référence.
          </p>
        </div>

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-light p-8 sm:p-12">
            <Quote className="w-10 h-10 text-secondary/20 absolute top-6 left-6" />

            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center text-lg font-bold shrink-0">
                {testimonials[current].initials}
              </div>

              {/* Content */}
              <div>
                <h4 className="text-lg font-bold text-dark mb-1">
                  {testimonials[current].name}
                </h4>
                <p className="text-secondary text-sm mb-4">
                  {testimonials[current].role}
                </p>
                <p className="text-muted text-base leading-7">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-end gap-2 mt-6">
              <button
                onClick={prev}
                aria-label="Précédent"
                className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
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
