'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Award, Clock, ChevronDown } from 'lucide-react';

const heroSlides = [
  {
    title: 'Construction &',
    highlight: 'Rénovation',
    subtitle: 'en Île-de-France',
    description: 'Maçonnerie générale, carrelage, travaux publics et construction neuve. Votre partenaire de confiance pour tous vos projets BTP.',
    bgImage: '/images/chantier-ferraillage-mur.jpg',
  },
  {
    title: 'Location de',
    highlight: 'Matériel BTP',
    subtitle: 'Engins & Équipements',
    description: 'Pelleteuses, camions, bétonnières et tout le matériel nécessaire pour vos chantiers. Livraison sur site disponible.',
    bgImage: '/images/mini-pelle.jpg',
  },
  {
    title: 'Expertise &',
    highlight: 'Qualité',
    subtitle: 'Garanties',
    description: 'Une équipe de professionnels qualifiés pour des résultats impeccables. Devis gratuit et sans engagement.',
    bgImage: '/images/construction-maison-piscine.jpg',
  },
];

const trustBadges = [
  { icon: Shield, label: 'Assurance Décennale' },
  { icon: Award, label: 'Qualité Garantie' },
  { icon: Clock, label: 'Devis sous 24h' },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${s.bgImage})` }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm mb-8 border border-white/10">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Disponible pour vos projets en Île-de-France
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            {slide.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              {slide.highlight}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/60 font-light mb-6">{slide.subtitle}</p>
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">{slide.description}</p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-secondary/25 active:scale-95 group"
            >
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-200 border border-white/20"
            >
              Découvrir nos Services
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-white/60">
                <badge.icon className="w-5 h-5 text-accent" />
                <span className="text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-3 mt-16">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-12 bg-secondary' : 'w-6 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
