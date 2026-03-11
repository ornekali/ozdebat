import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Award, Target, Users, Shield, ArrowRight, CheckCircle2,
  Building2, Calendar, MapPin, Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos',
  description: 'Découvrez OZDE BAT, entreprise de construction et rénovation en Île-de-France. Notre histoire, nos valeurs et notre équipe.',
};

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Nous visons la perfection dans chaque détail de nos réalisations.',
  },
  {
    icon: Shield,
    title: 'Fiabilité',
    description: 'Respect des engagements, des délais et des budgets convenus.',
  },
  {
    icon: Users,
    title: 'Proximité',
    description: 'Un interlocuteur dédié et une communication transparente tout au long du projet.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Utilisation des techniques et matériaux les plus récents du secteur BTP.',
  },
];

const milestones = [
  { year: '2026', title: 'Création d\'OZDE BAT', description: 'Fondation de l\'entreprise à Tremblay-en-France avec une vision claire : offrir des services BTP de qualité en Île-de-France.' },
  { year: '2026', title: 'Premiers Chantiers', description: 'Lancement des premiers projets de maçonnerie et carrelage, établissant rapidement notre réputation de qualité.' },
  { year: '2026', title: 'Location Matériel', description: 'Développement de notre activité de location de matériel BTP pour répondre à la demande croissante.' },
  { year: '2026+', title: 'Croissance Continue', description: 'Extension de nos services et de notre zone d\'intervention dans toute l\'Île-de-France.' },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-primary overflow-hidden">
        <Image src="/images/equipe-ferraillage-beton.jpg" alt="" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Notre Histoire</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">À Propos d&apos;OZDE BAT</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Construction et rénovation à taille humaine en Île-de-France.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative">
                <Image src="/images/ouvrier-chantier-coffrage.jpg" alt="Équipe OZDE BAT sur chantier" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">SAS</p>
                    <p className="text-gray-500 text-sm">Société par Actions Simplifiée</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Qui Sommes-Nous</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-6">
                Votre Partenaire de Confiance en BTP
              </h2>
              <div className="w-12 h-0.5 bg-secondary rounded-full mb-8" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <strong>OZDE BAT</strong> est une entreprise de construction et rénovation
                basée à Tremblay-en-France (93290). Fondée par <strong>Ebubekir Ozdemir</strong>,
                notre société offre une gamme complète de services BTP : maçonnerie générale,
                carrelage, travaux publics et location de matériel.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Notre engagement : fournir des prestations de qualité, dans le respect des
                délais et du budget. Chaque projet est unique et mérite une attention
                particulière. C&apos;est pourquoi nous vous accompagnons de A à Z, de la
                conception à la livraison.
              </p>

              {/* Company Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-gray-500">Création</span>
                  </div>
                  <p className="font-bold text-primary">Février 2026</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-gray-500">Siège</span>
                  </div>
                  <p className="font-bold text-primary">Tremblay (93)</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-gray-500">RCS</span>
                  </div>
                  <p className="font-bold text-primary text-sm">Bobigny 101 200 830</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-gray-500">Capital</span>
                  </div>
                  <p className="font-bold text-primary">9 000 &euro;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Nos Principes</span>
            <h2 className="text-4xl font-bold text-primary mt-3 mb-4">Nos Valeurs</h2>
            <div className="w-12 h-0.5 bg-secondary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-7 text-center border border-slate-100 hover:border-secondary/20 hover:shadow-lg hover:shadow-secondary/5 transition-all">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Notre Parcours</span>
            <h2 className="text-4xl font-bold text-primary mt-3 mb-4">Notre Histoire</h2>
            <div className="w-12 h-0.5 bg-secondary rounded-full mx-auto" />
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-secondary/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-secondary font-semibold text-sm">{milestone.year}</span>
                  <h3 className="text-xl font-bold text-primary mt-1 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Compétences</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-4">Nos Domaines d&apos;Expertise</h2>
            <div className="w-12 h-0.5 bg-secondary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              'Maçonnerie générale et gros œuvre',
              'Carrelage et revêtements de sol',
              'Travaux publics et voirie',
              'Construction neuve résidentielle',
              'Rénovation intérieure et extérieure',
              'Location de matériel BTP',
              'Terrassement et fondations',
              'Aménagements extérieurs',
            ].map((expertise) => (
              <div key={expertise} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-white/80">{expertise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Prêt à Travailler avec Nous ?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Contactez-nous pour discuter de votre projet. Devis gratuit et sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all group"
          >
            Nous Contacter
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
