'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 150, suffix: '+', label: 'Projets Réalisés' },
  { value: 120, suffix: '+', label: 'Clients Satisfaits' },
  { value: 10, suffix: '+', label: "Ans d'Expérience" },
  { value: 100, suffix: '%', label: 'Satisfaction' },
];

function StatItem({ value, suffix, label, shouldStart }: { value: number; suffix: string; label: string; shouldStart: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const increment = value / 125;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [value, shouldStart]);

  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-white tabular-nums">
        {count}<span className="text-secondary">{suffix}</span>
      </div>
      <p className="text-white/50 text-sm mt-2">{label}</p>
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
    <section ref={ref} className="py-16 bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} shouldStart={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
