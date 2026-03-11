import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
      {/* Hero */}
      <section className="relative py-28 bg-primary overflow-hidden">
        <Image src="/images/chantier-ferraillage-mur.jpg" alt="" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Nos Expertises</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Nos Services</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Une gamme complète de services BTP pour vos projets en Île-de-France.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center scroll-mt-28`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    <div className="absolute top-4 left-4 w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mb-6" />
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/devis"
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-2xl font-semibold transition-all group hover:shadow-lg hover:shadow-secondary/25 active:scale-95"
                  >
                    Demander un Devis
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Besoin d&apos;un Service Sur Mesure ?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Chaque projet est unique. Contactez-nous pour discuter de vos besoins
            spécifiques et obtenir une solution adaptée.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all group hover:shadow-lg hover:shadow-secondary/25 active:scale-95"
            >
              Devis Gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+33768059389"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl text-lg font-medium transition-all"
            >
              <Phone className="w-5 h-5" />
              07 68 05 93 89
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
