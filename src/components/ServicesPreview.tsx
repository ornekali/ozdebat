import Link from 'next/link';
import Image from 'next/image';
import { Building2, Hammer, PaintBucket, HardHat, Truck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Maçonnerie Générale',
    description: 'Murs, fondations, dalles et gros œuvre.',
    image: '/images/ferraillage-dalle-grande.jpg',
    href: '/services#maconnerie',
  },
  {
    icon: PaintBucket,
    title: 'Carrelage',
    description: 'Carrelage intérieur, extérieur et faïence.',
    image: '/images/beton-ancrage-fini.jpg',
    href: '/services#carrelage',
  },
  {
    icon: Hammer,
    title: 'Rénovation',
    description: 'Rénovation complète d\'appartements et maisons.',
    image: '/images/renovation-combles-avant.jpg',
    href: '/services#renovation',
  },
  {
    icon: HardHat,
    title: 'Travaux Publics',
    description: 'Terrassement, voirie et aménagements.',
    image: '/images/fondation-longrines.jpg',
    href: '/services#travaux-publics',
  },
  {
    icon: Building2,
    title: 'Construction Neuve',
    description: 'Construction résidentielle et commerciale.',
    image: '/images/construction-maison-extension.jpg',
    href: '/services#construction',
  },
  {
    icon: Truck,
    title: 'Location Matériel',
    description: 'Pelleteuses, camions et bétonnières.',
    image: '/images/mini-pelle.jpg',
    href: '/location-materiel',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Nos Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Ce que nous faisons
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative h-72 rounded-xl overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <service.icon className="w-5 h-5 text-secondary" />
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/60 text-sm">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all group"
          >
            Voir tous les services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
