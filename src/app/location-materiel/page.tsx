import { Metadata } from 'next';
import Link from 'next/link';
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
        features: ['PTAC 3.5T', 'Benne basculante', 'Location avec ou sans chauffeur'],
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
        features: ['12 à 20 m³', 'Hayon élévateur en option', 'Kilométrage illimité'],
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
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/mini-pelle.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Location</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-4 mb-6">
            Location de <span className="text-secondary">Matériel BTP</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Pelleteuses, camions, bétonnières et tout l&apos;équipement nécessaire
            pour vos chantiers en Île-de-France.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                  <adv.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{adv.title}</h3>
                  <p className="text-gray-600 text-sm">{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {equipment.map((category) => (
            <div key={category.category} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center">
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary">{category.category}</h2>
                  <div className="section-divider mt-2" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <div key={item.name} className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <ul className="space-y-2 mb-6">
                        {item.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/devis"
                        className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all"
                      >
                        Demander un devis <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Box */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4">
              <Info className="w-8 h-8 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Comment ça marche ?</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex gap-3">
                    <span className="w-7 h-7 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <span><strong>Contactez-nous</strong> par téléphone ou via le formulaire de devis avec vos besoins.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-7 h-7 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <span><strong>Recevez votre devis</strong> personnalisé sous 24h avec tarifs et disponibilité.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-7 h-7 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <span><strong>Livraison sur site</strong> à la date convenue. Récupération en fin de location.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Besoin de Matériel pour Votre Chantier ?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Contactez-nous pour connaître les disponibilités et tarifs.
            Devis gratuit et livraison sur site.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all group"
            >
              Demander un Devis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+33XXXXXXXXX"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all border border-white/20"
            >
              <Phone className="w-5 h-5" />
              01 XX XX XX XX
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
