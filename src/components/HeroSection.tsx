'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';

const heroSlides = [
  {
    title: 'Construction & Rénovation',
    description: 'Maçonnerie générale, carrelage, travaux publics et construction neuve en Île-de-France.',
    bgImage: '/images/chantier-ferraillage-mur.jpg',
  },
  {
    title: 'Location de Matériel BTP',
    description: 'Pelleteuses, camions, bétonnières. Livraison sur site disponible.',
    bgImage: '/images/mini-pelle.jpg',
  },
  {
    title: 'Expertise & Qualité',
    description: 'Une équipe de professionnels qualifiés. Devis gratuit et sans engagement.',
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
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {heroSlides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={s.bgImage} alt="" fill className="object-cover" priority={index === 0} sizes="100vw" />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">OZDE BAT</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
          {heroSlides[currentSlide].title}
        </h1>
        <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          {heroSlides[currentSlide].description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/devis"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg text-base font-semibold transition-all hover:bg-secondary/90 active:scale-[0.98] group"
          >
            Demander un Devis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="tel:+33768059389"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-base font-medium transition-all hover:bg-white/20 border border-white/20"
          >
            <Phone className="w-4 h-4" />
            07 68 05 93 89
          </a>
        </div>

        {/* Slide dots */}
        <div className="flex justify-center gap-2 mt-14">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-10 bg-secondary' : 'w-4 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
