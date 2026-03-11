'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Building, Calendar, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Building, value: 150, suffix: '+', label: 'Projets Réalisés', description: 'Chantiers livrés avec succès' },
  { icon: Users, value: 120, suffix: '+', label: 'Clients Satisfaits', description: 'Particuliers et professionnels' },
  { icon: Calendar, value: 10, suffix: '+', label: "Ans d'Expérience", description: 'Dans le secteur du BTP' },
  { icon: ThumbsUp, value: 100, suffix: '%', label: 'Satisfaction', description: 'Recommandé par nos clients' },
];

function useCountUp(target: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, shouldStart]);
  return count;
}

function StatCard({ icon: Icon, value, suffix, label, description, isVisible, index }: {
  icon: typeof Building; value: number; suffix: string; label: string; description: string; isVisible: boolean; index: number;
}) {
  const count = useCountUp(value, 2000, isVisible);
  return (
    <div
      className="relative group"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative bg-white/[0.07] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-secondary/30 hover:bg-white/[0.12] transition-all duration-500">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-secondary" />
          </div>
          <div className="text-5xl font-black text-white mb-1 tracking-tight">
            {count}<span className="text-secondary">{suffix}</span>
          </div>
          <p className="text-white font-semibold text-lg mb-1">{label}</p>
          <p className="text-white/40 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/ferraillage-poteau-paris.jpg)' }}
      />
      <div className="absolute inset-0 bg-primary/92" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-secondary rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
            En chiffres
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            OZDE BAT en <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Quelques Chiffres</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
