'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heroSlides = [
  {
    title: 'Construction & Rénovation',
    subtitle: 'Votre partenaire BTP',
    bgImage: '/images/chantier-ferraillage-mur.jpg',
  },
  {
    title: 'Location de Matériel BTP',
    subtitle: 'Pelleteuses · Camions · Bétonnières',
    bgImage: '/images/mini-pelle.jpg',
  },
  {
    title: 'Expertise & Qualité',
    subtitle: 'Des professionnels qualifiés',
    bgImage: '/images/construction-maison-piscine.jpg',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center mt-[112px] md:mt-[120px]">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.bgImage}
            alt=""
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <span className="inline-block text-secondary font-medium text-lg uppercase tracking-[3px] mb-4">
          {heroSlides[currentSlide].subtitle}
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 max-w-3xl mx-auto">
          {heroSlides[currentSlide].title}
        </h2>
        <Link href="/devis" className="main-btn">
          Demander un Devis
        </Link>

        {/* Slide dots */}
        <div className="flex justify-center gap-3 mt-16">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-secondary scale-125'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
