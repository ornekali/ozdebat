import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nos Réalisations',
  description: 'Découvrez nos projets de construction, rénovation et travaux publics réalisés en Île-de-France. Portfolio OZDE BAT.',
};

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
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/construction-maison-piscine.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-4 mb-6">
            Nos <span className="text-secondary">Réalisations</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Découvrez une sélection de nos projets récents en construction,
            rénovation et travaux publics.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
                  cat === 'Tous'
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group"
              >
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="inline-block px-3 py-1 bg-secondary/90 text-white text-xs font-semibold rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1">
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
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        <Tag className="w-3 h-3" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
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
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all group"
          >
            Demander un Devis Gratuit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
