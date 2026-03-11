import Link from 'next/link';
import Image from 'next/image';
import { Building2, PaintBucket, Hammer, HardHat, Ruler, Truck } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Maçonnerie Générale',
    description: 'Murs porteurs, fondations, dalles béton et gros œuvre. Maçonnerie traditionnelle et moderne.',
    href: '/services#maconnerie',
  },
  {
    icon: PaintBucket,
    title: 'Carrelage & Revêtements',
    description: 'Pose de carrelage intérieur et extérieur, faïence, mosaïque et pierre naturelle.',
    href: '/services#carrelage',
  },
  {
    icon: Hammer,
    title: 'Rénovation Complète',
    description: 'Rénovation intégrale d\'appartements, maisons et locaux commerciaux.',
    href: '/services#renovation',
  },
  {
    icon: HardHat,
    title: 'Travaux Publics',
    description: 'Terrassement, voirie, réseaux, assainissement et aménagements extérieurs.',
    href: '/services#travaux-publics',
  },
  {
    icon: Ruler,
    title: 'Construction Neuve',
    description: 'Maisons individuelles, immeubles résidentiels et bâtiments commerciaux clé en main.',
    href: '/services#construction',
  },
  {
    icon: Truck,
    title: 'Location Matériel',
    description: 'Pelleteuses, camions, bétonnières et équipements BTP avec livraison sur site.',
    href: '/location-materiel',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-24 bg-light">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-3xl sm:text-4xl font-bold text-dark section-line">
            Nos Services
          </h3>
          <p className="text-muted mt-6 max-w-xl mx-auto">
            Une gamme complète de services BTP pour vos projets en Île-de-France.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <service.icon className="w-12 h-12 text-secondary group-hover:scale-110 transition-transform" />
              </div>
              <h5 className="text-lg font-bold text-dark mb-3 group-hover:text-secondary transition-colors">
                {service.title}
              </h5>
              <p className="text-muted text-sm leading-6">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
