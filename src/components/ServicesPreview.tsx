'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, Hammer, PaintBucket, HardHat, Truck, ArrowRight, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Maçonnerie Générale',
    description: 'Murs, fondations, dalles et gros œuvre. Béton armé et maçonnerie traditionnelle.',
    image: '/images/ferraillage-dalle-grande.jpg',
    href: '/services#maconnerie',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: PaintBucket,
    title: 'Carrelage',
    description: 'Carrelage intérieur, extérieur, faïence, mosaïque. Finitions impeccables.',
    image: '/images/beton-ancrage-fini.jpg',
    href: '/services#carrelage',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Hammer,
    title: 'Rénovation',
    description: 'Rénovation complète d\'appartements, maisons et locaux commerciaux.',
    image: '/images/renovation-combles-avant.jpg',
    href: '/services#renovation',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: HardHat,
    title: 'Travaux Publics',
    description: 'Terrassement, voirie, réseaux divers et aménagements extérieurs.',
    image: '/images/fondation-longrines.jpg',
    href: '/services#travaux-publics',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Building2,
    title: 'Construction Neuve',
    description: 'Construction résidentielle et commerciale de A à Z.',
    image: '/images/construction-maison-extension.jpg',
    href: '/services#construction',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Truck,
    title: 'Location Matériel',
    description: 'Pelleteuses, camions, bétonnières. Courte et longue durée.',
    image: '/images/mini-pelle.jpg',
    href: '/location-materiel',
    color: 'from-secondary to-rose-500',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <Link href={service.href} className="group block relative h-[420px] rounded-3xl overflow-hidden">
        {/* Background Image */}
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500" />

        {/* Colored accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        {/* Icon Badge */}
        <div className={`absolute top-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="w-7 h-7 text-white" />
        </div>

        {/* Arrow */}
        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white/20">
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
            {service.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-xs">
            {service.description}
          </p>
          <span className="inline-flex items-center gap-2 text-secondary text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            Découvrir <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function ServicesPreview() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
            Ce que nous faisons
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Services</span>
          </h2>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all group mt-4"
          >
            Voir tous les services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
