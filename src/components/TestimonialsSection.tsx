'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Pierre Dumont',
    role: 'Propriétaire, Paris 15e',
    content: 'Rénovation complète de mon appartement. Travail soigné, respect des délais et budget. Je recommande vivement OZDE BAT pour tous vos travaux.',
    rating: 5,
    project: 'Rénovation Appartement',
  },
  {
    name: 'Marie Lambert',
    role: 'Gérante, Restaurant Le Parisien',
    content: 'Excellente prestation pour la rénovation de notre restaurant. L\'équipe est professionnelle, à l\'écoute et le résultat est magnifique.',
    rating: 5,
    project: 'Rénovation Commerciale',
  },
  {
    name: 'Ahmed Benali',
    role: 'Promoteur Immobilier',
    content: 'Nous travaillons avec OZDE BAT depuis plusieurs projets. Fiabilité, qualité et prix compétitifs. Un partenaire de confiance pour nos chantiers.',
    rating: 5,
    project: 'Construction Neuve',
  },
  {
    name: 'Sophie Moreau',
    role: 'Propriétaire, Tremblay-en-France',
    content: 'Carrelage et maçonnerie pour notre maison. Le travail est impeccable et l\'équipe très sympathique. Merci pour cette belle réalisation !',
    rating: 5,
    project: 'Carrelage & Maçonnerie',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Témoignages</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-3 mb-4">
            Ce que Disent nos Clients
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-secondary/10" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary">{testimonials[current].name}</p>
                    <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
                <span className="hidden sm:block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  {testimonials[current].project}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current ? 'bg-secondary w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
