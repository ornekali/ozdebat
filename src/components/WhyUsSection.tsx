'use client';

import { useEffect, useRef, useState } from 'react';
import { Shield, Clock, Award, Wrench, Users, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Assurance Décennale',
    description: 'Tous nos travaux sont couverts par une assurance décennale pour votre tranquillité d\'esprit.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-500',
  },
  {
    icon: Clock,
    title: 'Respect des Délais',
    description: 'Nous nous engageons à respecter les délais convenus pour chaque projet, sans surprise.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Award,
    title: 'Qualité Certifiée',
    description: 'Matériaux de qualité supérieure et finitions irréprochables sur chaque chantier.',
    gradient: 'from-amber-500/20 to-yellow-500/20',
    iconColor: 'text-amber-500',
  },
  {
    icon: Wrench,
    title: 'Équipement Moderne',
    description: 'Parc de matériel récent et bien entretenu pour des travaux rapides et efficaces.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-500',
  },
  {
    icon: Users,
    title: 'Équipe Qualifiée',
    description: 'Des professionnels expérimentés et formés aux dernières techniques du BTP.',
    gradient: 'from-secondary/20 to-rose-500/20',
    iconColor: 'text-secondary',
  },
  {
    icon: HeartHandshake,
    title: 'Devis Transparent',
    description: 'Devis détaillé et gratuit sous 24h. Pas de surprise, pas de coûts cachés.',
    gradient: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-500',
  },
];

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
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
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 h-full">
        {/* Hover gradient bg */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative z-10">
          {/* Number */}
          <span className="absolute -top-2 -right-2 text-8xl font-black text-gray-100 group-hover:text-secondary/10 transition-colors duration-500 select-none">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            <reason.icon className={`w-8 h-8 ${reason.iconColor}`} />
          </div>
          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
            {reason.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{reason.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyUsSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/[0.03] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
            Pourquoi nous choisir
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            La Confiance au{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Cœur</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg mt-4">
            Depuis notre création, nous mettons l&apos;excellence et la satisfaction client au centre de chaque projet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
