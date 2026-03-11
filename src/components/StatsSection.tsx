'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const stats = [
  { value: 150, suffix: '+', label: 'Projets Réalisés' },
  { value: 120, suffix: '+', label: 'Clients Satisfaits' },
  { value: 10, suffix: '/10', label: 'Note Moyenne' },
];

function StatItem({ value, suffix, label, shouldStart }: { value: number; suffix: string; label: string; shouldStart: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const increment = value / 100;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [value, shouldStart]);

  return (
    <div className="text-center lg:text-left">
      <h5 className="text-4xl sm:text-5xl font-bold text-dark mb-1">
        <span className="text-secondary tabular-nums">{count}</span>{suffix}
      </h5>
      <p className="text-muted text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-24">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="lg:w-5/12">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/equipe-ferraillage-beton.jpg"
                alt="Équipe OZDE BAT"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-7/12">
            <h4 className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug text-dark mb-6">
              Un Service Personnalisé<br />
              et de Haute Qualité
            </h4>
            <p className="text-muted text-base leading-7 mb-10">
              Chaque projet est unique et mérite une attention particulière.
              Nous vous accompagnons de A à Z, de la conception à la livraison,
              avec un engagement total envers la qualité et le respect des délais.
              Notre équipe de professionnels qualifiés garantit un résultat à la
              hauteur de vos attentes.
            </p>

            <div className="flex flex-wrap gap-8 sm:gap-12">
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} shouldStart={visible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
