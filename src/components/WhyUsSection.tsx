import { Shield, Clock, Award, Wrench, Users, HeartHandshake } from 'lucide-react';

const reasons = [
  { icon: Shield, title: 'Assurance Décennale', description: 'Tous nos travaux sont couverts pour votre tranquillité d\'esprit.' },
  { icon: Clock, title: 'Respect des Délais', description: 'Nous respectons les délais convenus pour chaque projet.' },
  { icon: Award, title: 'Qualité Certifiée', description: 'Matériaux de qualité et finitions irréprochables.' },
  { icon: Wrench, title: 'Équipement Moderne', description: 'Matériel récent et bien entretenu.' },
  { icon: Users, title: 'Équipe Qualifiée', description: 'Professionnels expérimentés et formés.' },
  { icon: HeartHandshake, title: 'Devis Transparent', description: 'Devis gratuit sous 24h, pas de coûts cachés.' },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Pourquoi nous</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            La confiance au cœur de nos projets
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-white rounded-xl p-6 border border-slate-100 hover:border-secondary/20 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300">
              <reason.icon className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold text-primary mb-2">{reason.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
