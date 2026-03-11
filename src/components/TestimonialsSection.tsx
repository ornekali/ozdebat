'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Pierre Dumont',
    role: 'Propriétaire, Paris 15e',
    content: 'Rénovation complète de mon appartement. Travail soigné, respect des délais et budget. Je recommande vivement OZDE BAT.',
    rating: 5,
    initials: 'PD',
  },
  {
    name: 'Marie Lambert',
    role: 'Gérante, Restaurant Le Parisien',
    content: 'Excellente prestation pour la rénovation de notre restaurant. L\'équipe est professionnelle et le résultat magnifique.',
    rating: 5,
    initials: 'ML',
  },
  {
    name: 'Ahmed Benali',
    role: 'Promoteur Immobilier',
    content: 'Nous travaillons avec OZDE BAT depuis plusieurs projets. Fiabilité, qualité et prix compétitifs.',
    rating: 5,
    initials: 'AB',
  },
  {
    name: 'Sophie Moreau',
    role: 'Propriétaire, Tremblay-en-France',
    content: 'Carrelage et maçonnerie pour notre maison. Le travail est impeccable et l\'équipe très sympathique.',
    rating: 5,
    initials: 'SM',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Témoignages</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-xl sm:text-2xl text-primary font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            &ldquo;{t.content}&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm">
              {t.initials}
            </div>
            <div className="text-left">
              <p className="font-semibold text-primary">{t.name}</p>
              <p className="text-slate-400 text-sm">{t.role}</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Précédent"
              className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-slate-400 text-sm tabular-nums min-w-[3ch] text-center">{current + 1}/{testimonials.length}</span>
            <button
              onClick={next}
              aria-label="Suivant"
              className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
