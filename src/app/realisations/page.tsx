'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Calendar, Tag } from 'lucide-react';

const projects = [
  {
    title: 'Extension Maison avec Piscine',
    category: 'Construction Neuve',
    location: 'Île-de-France',
    date: '2026',
    description: 'Extension d\'une maison individuelle avec création d\'une piscine béton.',
    image: '/images/construction-maison-piscine.jpg',
    tags: ['Construction', 'Piscine', 'Gros Œuvre'],
  },
  {
    title: 'Extension & Agrandissement Maison',
    category: 'Construction Neuve',
    location: 'Île-de-France',
    date: '2026',
    description: 'Agrandissement d\'une maison existante avec murs en parpaing et dalle béton.',
    image: '/images/construction-maison-extension.jpg',
    tags: ['Extension', 'Maçonnerie', 'Dalle'],
  },
  {
    title: 'Ferraillage & Béton Armé',
    category: 'Maçonnerie',
    location: 'Paris',
    date: '2026',
    description: 'Travaux de structure en béton armé dans un immeuble parisien.',
    image: '/images/ferraillage-poteau-paris.jpg',
    tags: ['Béton Armé', 'Ferraillage', 'Structure'],
  },
  {
    title: 'Reprise en Sous-Œuvre & Fondations',
    category: 'Maçonnerie',
    location: 'Île-de-France',
    date: '2026',
    description: 'Reprise en sous-œuvre de fondations existantes avec ferraillage.',
    image: '/images/fondation-longrines.jpg',
    tags: ['Fondations', 'Reprise Sous-Œuvre'],
  },
  {
    title: 'Coulage Dalle Béton Armé',
    category: 'Maçonnerie',
    location: 'Île-de-France',
    date: '2026',
    description: 'Dalle béton armé avec ferraillage double nappe et membrane d\'étanchéité.',
    image: '/images/coulage-beton-equipe.jpg',
    tags: ['Dalle', 'Béton', 'Ferraillage'],
  },
  {
    title: 'Mur de Soutènement',
    category: 'Travaux Publics',
    location: 'Île-de-France',
    date: '2026',
    description: 'Construction d\'un mur de soutènement en béton armé de grande hauteur.',
    image: '/images/chantier-ferraillage-mur.jpg',
    tags: ['Travaux Publics', 'Soutènement'],
  },
  {
    title: 'Fondations & Semelles Filantes',
    category: 'Maçonnerie',
    location: 'Île-de-France',
    date: '2026',
    description: 'Terrassement et réalisation de semelles filantes pour un bâtiment neuf.',
    image: '/images/semelle-fondation-mur.jpg',
    tags: ['Fondations', 'Semelles'],
  },
  {
    title: 'Micropieux & Renforcement',
    category: 'Maçonnerie',
    location: 'Île-de-France',
    date: '2026',
    description: 'Micropieux et ancrages pour le renforcement des fondations existantes.',
    image: '/images/micropieux-beton.jpg',
    tags: ['Micropieux', 'Renforcement'],
  },
  {
    title: 'Plancher Béton Armé',
    category: 'Maçonnerie',
    location: 'Île-de-France',
    date: '2026',
    description: 'Plancher en béton armé avec treillis soudé et ferraillage complémentaire.',
    image: '/images/plancher-ferraillage-interieur.jpg',
    tags: ['Plancher', 'Béton Armé'],
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
      {/* Page Header */}
      <section className="relative py-20 mt-[112px] md:mt-[120px] bg-dark overflow-hidden">
        <Image src="/images/construction-maison-piscine.jpg" alt="" fill className="object-cover opacity-20" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/60" />
        <div className="relative z-10 max-w-[1170px] mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Nos Réalisations</h2>
          <nav aria-label="breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-secondary transition-colors">Accueil</Link></li>
              <li className="text-white/40">/</li>
              <li className="text-secondary font-medium">Réalisations</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-24 bg-light">
        <div className="max-w-[1170px] mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 justify-center mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={cat === activeCategory}
                className={`text-sm font-medium uppercase tracking-wider px-5 py-2 transition-colors ${
                  cat === activeCategory
                    ? 'text-white bg-secondary'
                    : 'text-muted bg-white hover:text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.title} className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0">
                    <span className="inline-block px-4 py-1 bg-secondary text-white text-xs font-bold uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 mb-3 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {project.date}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-6 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 bg-light text-muted text-xs">
                        <Tag className="w-2.5 h-2.5" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-muted">
              <p className="text-lg">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Votre Projet Sera le Prochain
          </h2>
          <p className="text-muted text-base mb-8">
            Chaque réalisation est le fruit d&apos;une collaboration étroite avec nos clients.
          </p>
          <Link href="/devis" className="main-btn inline-flex items-center gap-2">
            Demander un Devis Gratuit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
