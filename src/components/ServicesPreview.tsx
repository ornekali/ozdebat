'use client';

import Link from 'next/link';
import { Building2, Hammer, PaintBucket, HardHat, Truck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Maçonnerie Générale',
    description: 'Construction de murs, fondations, dalles et tous travaux de gros œuvre. Expertise en béton armé et maçonnerie traditionnelle.',
    image: '/images/ferraillage-dalle-grande.jpg',
    href: '/services#maconnerie',
  },
  {
    icon: PaintBucket,
    title: 'Carrelage',
    description: 'Pose de carrelage intérieur et extérieur, faïence, mosaïque. Finitions soignées pour sols et murs.',
    image: '/images/beton-ancrage-fini.jpg',
    href: '/services#carrelage',
  },
  {
    icon: Hammer,
    title: 'Rénovation',
    description: 'Rénovation complète ou partielle d\'appartements, maisons et locaux commerciaux. Du sol au plafond.',
    image: '/images/renovation-combles-avant.jpg',
    href: '/services#renovation',
  },
  {
    icon: HardHat,
    title: 'Travaux Publics',
    description: 'Terrassement, voirie, réseaux divers et aménagements extérieurs. Projets de toutes envergures.',
    image: '/images/fondation-longrines.jpg',
    href: '/services#travaux-publics',
  },
  {
    icon: Building2,
    title: 'Construction Neuve',
    description: 'Construction de bâtiments résidentiels et commerciaux de A à Z. Respect des normes et délais.',
    image: '/images/construction-maison-extension.jpg',
    href: '/services#construction',
  },
  {
    icon: Truck,
    title: 'Location Matériel',
    description: 'Pelleteuses, camions, bétonnières et équipements BTP. Location courte et longue durée.',
    image: '/images/mini-pelle.jpg',
    href: '/location-materiel',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Ce que nous faisons</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-3 mb-4">
            Nos Services
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            De la construction neuve à la rénovation, en passant par la location de matériel,
            nous offrons une gamme complète de services BTP.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-secondary/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-secondary text-sm font-semibold group-hover:gap-2 transition-all">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
