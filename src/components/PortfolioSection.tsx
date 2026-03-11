'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Extension Maison avec Piscine',
    category: 'Construction Neuve',
    image: '/images/construction-maison-piscine.jpg',
  },
  {
    title: 'Ferraillage & Béton Armé',
    category: 'Maçonnerie',
    image: '/images/ferraillage-poteau-paris.jpg',
  },
  {
    title: 'Fondations & Semelles Filantes',
    category: 'Maçonnerie',
    image: '/images/fondation-longrines.jpg',
  },
  {
    title: 'Coulage Dalle Béton Armé',
    category: 'Maçonnerie',
    image: '/images/coulage-beton-equipe.jpg',
  },
  {
    title: 'Extension & Agrandissement',
    category: 'Construction Neuve',
    image: '/images/construction-maison-extension.jpg',
  },
  {
    title: 'Mur de Soutènement',
    category: 'Travaux Publics',
    image: '/images/chantier-ferraillage-mur.jpg',
  },
];

const categories = ['Tous', 'Construction Neuve', 'Maçonnerie', 'Travaux Publics'];

export default function PortfolioSection() {
  const [active, setActive] = useState('Tous');

  const filtered = active === 'Tous' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-20 lg:py-24 bg-light">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h3 className="text-3xl sm:text-4xl font-bold text-dark section-line">
            Nos Réalisations
          </h3>
          <p className="text-muted mt-6 max-w-xl mx-auto">
            Une sélection de nos projets récents en construction et rénovation.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm font-medium uppercase tracking-wider px-4 py-2 transition-colors ${
                cat === active
                  ? 'text-secondary border-b-2 border-secondary'
                  : 'text-muted hover:text-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.title} className="group relative overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 translate-y-0 group-hover:-translate-y-0 transition-transform">
                <p className="text-secondary text-xs font-medium uppercase tracking-wider mb-1">
                  {project.category}
                </p>
                <h4 className="text-dark font-bold text-base">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link href="/realisations" className="main-btn">
            Voir Toutes les Réalisations
          </Link>
        </div>
      </div>
    </section>
  );
}
