import { Shield, Clock, Award, Wrench, Users, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Assurance Décennale',
    description: 'Tous nos travaux sont couverts par une assurance décennale pour votre tranquillité.',
  },
  {
    icon: Clock,
    title: 'Respect des Délais',
    description: 'Nous nous engageons à respecter les délais convenus pour chaque projet.',
  },
  {
    icon: Award,
    title: 'Qualité Certifiée',
    description: 'Matériaux de qualité supérieure et finitions irréprochables sur chaque chantier.',
  },
  {
    icon: Wrench,
    title: 'Équipement Moderne',
    description: 'Parc de matériel récent et bien entretenu pour des travaux efficaces.',
  },
  {
    icon: Users,
    title: 'Équipe Qualifiée',
    description: 'Des professionnels expérimentés et formés aux dernières techniques du BTP.',
  },
  {
    icon: HeartHandshake,
    title: 'Devis Transparent',
    description: 'Devis détaillé et gratuit. Pas de surprise, pas de coûts cachés.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Pourquoi nous choisir</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-3 mb-4">
            La Confiance au Cœur
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Depuis notre création, nous mettons l&apos;excellence et la satisfaction client au centre de notre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="card-hover bg-white rounded-2xl p-8 border border-gray-100 shadow-sm group"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
