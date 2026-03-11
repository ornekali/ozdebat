'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Calendar, Tag, Filter } from 'lucide-react';

const projects = [
  {
    title: 'Extension Maison avec Piscine',
    category: 'Construction Neuve',
    location: 'Île-de-France',
    date: '2026',
    description: 'Extension d\'une maison individuelle avec création d\'une piscine béton. Gros œuvre, maçonnerie en parpaing, baie vitrée et aménagements extérieurs.',
    image: '/images/construction-maison-piscine.jpg',
    tags: ['Construction', 'Piscine', 'Gros Œuvre'],
  },
  {
    title: 'Extension & Agrandissement Maison',
    category: 'Construction Neuve',
    location: 'Île-de-France',
    date: '2026',
    description: 'Agrandissement d\'une maison existante. Construction de murs en parpaing, dalle béton, et intégration avec le bâti existant.',
    image: '/images/construction-maison-extension.jpg',
    tags: ['Extension', 'Maçonnerie', 'Dalle'],
  },
  {
    title: 'Ferraillage & Béton Armé - Immeuble Paris',
    category: 'Maçonnerie',
    location: 'Paris',
    date: '2026',
    description: 'Travaux de structure en béton armé dans un immeuble parisien. Ferraillage de poteaux porteurs, coulage béton et renforcement structurel.',
    image: '/images/ferraillage-poteau-paris.jpg',
    tags: ['Béton Armé', 'Ferraillage', 'Structure'],
  },
  {
    title: 'Reprise en Sous-Œuvre & Fondations',
    category: 'Maçonnerie',
    location: 'Île-de-France',
    date: '2026',
    description: 'Reprise en sous-œuvre de fondations existantes. Terrassement, ferraillage de semelles filantes, micropieux et coulage béton.',
    image: '/images/fondation-longrines.jpg',
    tags: ['Fondations', 'Reprise Sous-Œuvre', 'Ferraillage'],
  },
  {
    title: 'Coulage Dalle Béton Armé',
    category: 'Maçonnerie',
    location: 'Île-de-France',
    date: '2026',
    description: 'Réalisation d\'une dalle béton armé avec ferraillage double nappe, membrane d\'étanchéité et coulage par pompe à béton. Travail d\'équipe soigné.',
    image: '/images/coulage-beton-equipe.jpg',
    tags: ['Dalle', 'Béton', 'Ferraillage'],
  },
  {
    title: 'Chantier Mur de Soutènement',
    category: 'Travaux Publics',
    location: 'Île-de-France',
    date: '2026',
    description: 'Construction d\'un mur de soutènement en béton armé de grande hauteur. Ferraillage, coffrage et coulage béton avec équipe spécialisée.',
    image: '/images/chantier-ferraillage-mur.jpg',
    tags: ['Travaux Publics', 'Soutènement', 'Béton'],
  },
  {
    title: 'Fondations & Semelles Filantes',
    category: 'Maçonnerie',
    location: 'Île-de-France',
    date: '2026',
    description: 'Terrassement et réalisation de semelles filantes pour un bâtiment neuf. Ferraillage en cage, calage et coulage béton.',
    image: '/images/semelle-fondation-mur.jpg',
    tags: ['Fondations', 'Semelles', 'Terrassement'],
  },
  {
    title: 'Micropieux & Renforcement Structurel',
    category: 'Maçonnerie',
    location: 'Île-de-France',
    date: '2026',
    description: 'Mise en place de micropieux et ancrages pour le renforcement des fondations d\'un bâtiment existant. Injection béton et scellement chimique.',
    image: '/images/micropieux-beton.jpg',
    tags: ['Micropieux', 'Renforcement', 'Fondations'],
  },
  {
    title: 'Plancher Béton Armé Intérieur',
    category: 'Maçonnerie',
    location: 'Île-de-France',
    date: '2026',
    description: 'Réalisation d\'un plancher en béton armé avec treillis soudé et ferraillage complémentaire. Préparation avant coulage en intérieur.',
    image: '/images/plancher-ferraillage-interieur.jpg',
    tags: ['Plancher', 'Béton Armé', 'Intérieur'],
  },
];

const categories = ['Tous', 'Construction Neuve', 'Maçonnerie', 'Travaux Publics'];

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects = activeCategory === 'Tous'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-primary overflow-hidden">
        <Image src="/images/construction-maison-piscine.jpg" alt="" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Nos Réalisations</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Une sélection de nos projets récents en construction, rénovation et travaux publics.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            <Filter className="w-5 h-5 text-gray-400 self-center mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={cat === activeCategory}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-secondary ${
                  cat === activeCategory
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/25'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full mb-2 shadow-lg">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {project.date}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 text-gray-500 text-xs rounded-lg border border-gray-100"
                      >
                        <Tag className="w-3 h-3" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Votre Projet Sera le Prochain
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Chaque réalisation est le fruit d&apos;une collaboration étroite avec nos clients.
            Parlons de votre projet.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all group hover:shadow-xl hover:shadow-secondary/25 active:scale-95"
          >
            Demander un Devis Gratuit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
