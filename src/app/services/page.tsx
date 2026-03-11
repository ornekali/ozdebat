import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import {
  Building2, PaintBucket, Hammer, HardHat, Ruler, ArrowRight,
  CheckCircle2, Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nos Services',
  description: 'Découvrez nos services de construction, rénovation, maçonnerie, carrelage et travaux publics en Île-de-France. OZDE BAT, votre partenaire BTP.',
};

const services = [
  {
    id: 'maconnerie',
    icon: Building2,
    title: 'Maçonnerie Générale',
    description: 'Notre expertise en maçonnerie couvre l\'ensemble des travaux de gros œuvre. Du mur de clôture à la construction complète, nous maîtrisons toutes les techniques de maçonnerie traditionnelle et moderne.',
    image: '/images/ferraillage-dalle-ouvrier.jpg',
    features: [
      'Construction de murs porteurs et non porteurs',
      'Fondations et dalles béton',
      'Élévation de murs en parpaing, brique et pierre',
      'Ouverture et fermeture de murs',
      'Enduits de façade',
      'Réparation de structures existantes',
    ],
  },
  {
    id: 'carrelage',
    icon: PaintBucket,
    title: 'Carrelage & Revêtements',
    description: 'Pose de carrelage intérieur et extérieur avec des finitions impeccables. Nous travaillons avec tous types de matériaux : grès cérame, faïence, mosaïque, pierre naturelle.',
    image: '/images/beton-ancrage-fini.jpg',
    features: [
      'Carrelage sols et murs',
      'Faïence de salle de bain et cuisine',
      'Mosaïque décorative',
      'Carrelage extérieur et terrasse',
      'Pierre naturelle (marbre, travertin)',
      'Pose de plinthes et finitions',
    ],
  },
  {
    id: 'renovation',
    icon: Hammer,
    title: 'Rénovation Complète',
    description: 'Rénovation intégrale ou partielle de vos espaces. Nous transformons vos intérieurs pour leur donner une nouvelle vie, tout en respectant vos envies et votre budget.',
    image: '/images/renovation-interieur-ouvriers.jpg',
    features: [
      'Rénovation d\'appartements et maisons',
      'Rénovation de locaux commerciaux',
      'Démolition et reconstruction',
      'Aménagement intérieur complet',
      'Isolation thermique et phonique',
      'Mise aux normes électriques et plomberie',
    ],
  },
  {
    id: 'travaux-publics',
    icon: HardHat,
    title: 'Travaux Publics',
    description: 'Nos équipes interviennent sur des chantiers de travaux publics de toutes envergures. Terrassement, voirie, réseaux et aménagements extérieurs.',
    image: '/images/fondation-longrines.jpg',
    features: [
      'Terrassement et nivellement',
      'Voirie et aménagement urbain',
      'Réseaux divers (VRD)',
      'Assainissement',
      'Clôtures et portails',
      'Aménagements paysagers',
    ],
  },
  {
    id: 'construction',
    icon: Ruler,
    title: 'Construction Neuve',
    description: 'De la conception à la livraison, nous construisons votre projet de A à Z. Maisons individuelles, immeubles résidentiels ou bâtiments commerciaux.',
    image: '/images/construction-maison-extension.jpg',
    features: [
      'Maisons individuelles',
      'Immeubles résidentiels',
      'Bâtiments commerciaux',
      'Extensions et surélévations',
      'Gros œuvre complet',
      'Suivi de chantier personnalisé',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Nos Services"
        breadcrumb="Services"
        bgImage="/images/chantier-ferraillage-mur.jpg"
      />

      {/* Services */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center scroll-mt-32`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] overflow-hidden shadow-2xl group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 w-14 h-14 bg-secondary flex items-center justify-center shadow-lg">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
                    {service.title}
                  </h2>
                  <div className="w-12 h-[3px] bg-secondary mb-6" />
                  <p className="text-muted text-base leading-7 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                        <span className="text-dark/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/devis" className="main-btn inline-flex items-center gap-2">
                    Demander un Devis
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-light">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Besoin d&apos;un Service Sur Mesure ?
          </h2>
          <p className="text-muted text-base mb-8">
            Chaque projet est unique. Contactez-nous pour discuter de vos besoins
            spécifiques et obtenir une solution adaptée.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/devis" className="main-btn inline-flex items-center gap-2">
              Devis Gratuit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+33768059389" className="inline-flex items-center gap-2 text-dark font-medium hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              07 68 05 93 89
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
