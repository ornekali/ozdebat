'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Pierre Dumont',
    role: 'Propriétaire, Paris 15e',
    content: 'Rénovation complète de mon appartement. Travail soigné, respect des délais et budget. Je recommande vivement OZDE BAT pour tous vos travaux.',
    rating: 5,
    project: 'Rénovation Appartement',
    initials: 'PD',
  },
  {
    name: 'Marie Lambert',
    role: 'Gérante, Restaurant Le Parisien',
    content: 'Excellente prestation pour la rénovation de notre restaurant. L\'équipe est professionnelle, à l\'écoute et le résultat est magnifique.',
    rating: 5,
    project: 'Rénovation Commerciale',
    initials: 'ML',
  },
  {
    name: 'Ahmed Benali',
    role: 'Promoteur Immobilier',
    content: 'Nous travaillons avec OZDE BAT depuis plusieurs projets. Fiabilité, qualité et prix compétitifs. Un partenaire de confiance pour nos chantiers.',
    rating: 5,
    project: 'Construction Neuve',
    initials: 'AB',
  },
  {
    name: 'Sophie Moreau',
    role: 'Propriétaire, Tremblay-en-France',
    content: 'Carrelage et maçonnerie pour notre maison. Le travail est impeccable et l\'équipe très sympathique. Merci pour cette belle réalisation !',
    rating: 5,
    project: 'Carrelage & Maçonnerie',
    initials: 'SM',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prev = () => goTo(current === 0 ? testimonials.length - 1 : current - 1);
  const next = useCallback(() => goTo((current + 1) % testimonials.length), [current, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
            Témoignages
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
            Nos Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Parlent</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative">
            {/* Large quote mark */}
            <Quote className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-20 h-20 sm:w-28 sm:h-28 text-secondary/[0.07]" />

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2rem] p-8 sm:p-14 border border-gray-100 shadow-xl shadow-gray-100/50 relative overflow-hidden">
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-[4rem]" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1.5 mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Star className="w-5 h-5 fill-accent text-accent" />
                    </div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-2xl sm:text-3xl text-primary font-medium leading-relaxed mb-10">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-secondary/25">
                      {testimonials[current].initials}
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg">{testimonials[current].name}</p>
                      <p className="text-gray-500">{testimonials[current].role}</p>
                    </div>
                  </div>
                  <span className="px-5 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                    {testimonials[current].project}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  aria-label={`Témoignage ${index + 1}`}
                  aria-current={index === current ? 'true' : undefined}
                  className={`h-2 rounded-full transition-all duration-500 focus-visible:ring-2 focus-visible:ring-secondary ${
                    index === current ? 'w-10 bg-gradient-to-r from-secondary to-accent' : 'w-2 bg-gray-200 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Témoignage précédent"
                className="w-14 h-14 bg-gray-100 hover:bg-secondary hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={next}
                aria-label="Témoignage suivant"
                className="w-14 h-14 bg-gray-100 hover:bg-secondary hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
