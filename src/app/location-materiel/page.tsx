import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import {
  Truck, HardHat, Wrench, ArrowRight, CheckCircle2, Phone,
  Clock, Shield, MapPin, Info
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Location de Matériel BTP',
  description: 'Location de pelleteuses, camions, bétonnières et équipements BTP en Île-de-France. OZDE BAT - Location courte et longue durée avec livraison.',
};

const equipment = [
  {
    category: 'Engins de Chantier',
    icon: HardHat,
    items: [
      {
        name: 'Mini-Pelle 1.5T - 3T',
        description: 'Idéale pour les petits terrassements, tranchées et travaux en espace restreint.',
        image: '/images/mini-pelle.jpg',
        features: ['Avec ou sans opérateur', 'Livraison sur site', 'Location à la journée/semaine'],
      },
      {
        name: 'Pelleteuse 8T - 14T',
        description: 'Pour les travaux de terrassement, démolition et manutention de grande envergure.',
        image: '/images/ouvrier-chantier-coffrage.jpg',
        features: ['Opérateur qualifié disponible', 'Plusieurs godets fournis', 'Assurance incluse'],
      },
      {
        name: 'Chargeuse sur Pneus',
        description: 'Chargement, déblaiement et transport de matériaux sur chantier.',
        image: '/images/chantier-ferraillage-mur.jpg',
        features: ['Capacité 1 à 3 m³', 'Polyvalente', 'Entretien inclus'],
      },
    ],
  },
  {
    category: 'Camions & Transport',
    icon: Truck,
    items: [
      {
        name: 'Camion Benne 3.5T',
        description: 'Transport de gravats, terre et matériaux de construction. Permis B suffisant.',
        image: '/images/fondation-longrines.jpg',
        features: ['PTAC 3.5T', 'Benne basculante', 'Avec ou sans chauffeur'],
      },
      {
        name: 'Camion Benne 19T - 26T',
        description: 'Pour les gros volumes de matériaux et les chantiers importants.',
        image: '/images/construction-maison-extension.jpg',
        features: ['Grande capacité', 'Chauffeur inclus possible', 'Livraison Île-de-France'],
      },
      {
        name: 'Fourgon Utilitaire',
        description: 'Transport d\'outils, équipements et petits matériaux de chantier.',
        image: '/images/equipe-dalle-etancheite.jpg',
        features: ['12 à 20 m³', 'Hayon en option', 'Kilométrage illimité'],
      },
    ],
  },
  {
    category: 'Matériel & Outillage',
    icon: Wrench,
    items: [
      {
        name: 'Bétonnière & Malaxeur',
        description: 'Bétonnières électriques et thermiques pour tous volumes de béton.',
        image: '/images/coulage-beton-equipe.jpg',
        features: ['De 130L à 350L', 'Électrique ou thermique', 'Location à la journée'],
      },
      {
        name: 'Échafaudage',
        description: 'Échafaudages fixes et roulants pour travaux en hauteur.',
        image: '/images/ferraillage-poteau-paris.jpg',
        features: ['Hauteur jusqu\'à 12m', 'Montage inclus possible', 'Conforme aux normes'],
      },
      {
        name: 'Compacteur & Plaque Vibrante',
        description: 'Compactage de sols, tranchées et enrobés.',
        image: '/images/semelle-filante.jpg',
        features: ['Différentes tailles', 'Location courte durée', 'Livraison possible'],
      },
    ],
  },
];

const advantages = [
  { icon: Clock, title: 'Disponibilité Rapide', description: 'Matériel disponible sous 24 à 48h' },
  { icon: Shield, title: 'Matériel Assuré', description: 'Tous nos engins sont assurés tous risques' },
  { icon: Wrench, title: 'Bien Entretenu', description: 'Maintenance régulière et contrôles techniques' },
  { icon: MapPin, title: 'Livraison Sur Site', description: 'Livraison et récupération sur votre chantier' },
];

export default function LocationMaterielPage() {
  return (
    <>
      <PageHeader
        title="Location de Matériel BTP"
        breadcrumb="Location Matériel"
        bgImage="/images/mini-pelle.jpg"
      />

      {/* Advantages */}
      <section className="py-16 bg-light">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="flex items-start gap-4 bg-white p-6 shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center shrink-0">
                  <adv.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1 text-sm">{adv.title}</h4>
                  <p className="text-muted text-xs">{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1170px] mx-auto px-4">
          {equipment.map((category) => (
            <div key={category.category} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center">
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-dark">{category.category}</h2>
                  <div className="w-12 h-[3px] bg-secondary mt-2" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <div key={item.name} className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-dark mb-2">{item.name}</h3>
                      <p className="text-muted text-sm mb-4">{item.description}</p>
                      <ul className="space-y-2 mb-6">
                        {item.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-dark/80">
                            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link href="/devis" className="text-secondary font-semibold text-sm hover:underline inline-flex items-center gap-1">
                        Demander un devis <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-light">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="bg-white p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <Info className="w-8 h-8 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-dark mb-4">Comment ça marche ?</h3>
                <ol className="space-y-4 text-muted">
                  <li className="flex gap-3">
                    <span className="w-7 h-7 bg-secondary text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <span><strong className="text-dark">Contactez-nous</strong> par téléphone ou via le formulaire de devis.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-7 h-7 bg-secondary text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <span><strong className="text-dark">Recevez votre devis</strong> personnalisé sous 24h.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-7 h-7 bg-secondary text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <span><strong className="text-dark">Livraison sur site</strong> à la date convenue.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Besoin de Matériel ?
          </h2>
          <p className="text-white/60 text-base mb-8">
            Contactez-nous pour connaître les disponibilités et tarifs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/devis" className="main-btn inline-flex items-center gap-2">
              Demander un Devis <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+33768059389" className="main-btn-white inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> 07 68 05 93 89
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
