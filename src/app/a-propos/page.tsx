import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import {
  Award, Target, Users, Shield, ArrowRight, CheckCircle2,
  Calendar, MapPin, Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos',
  description: 'Découvrez OZDE BAT, entreprise de construction et rénovation en Île-de-France. Notre histoire, nos valeurs et notre équipe.',
};

const values = [
  { icon: Award, title: 'Excellence', description: 'Nous visons la perfection dans chaque détail de nos réalisations.' },
  { icon: Shield, title: 'Fiabilité', description: 'Respect des engagements, des délais et des budgets convenus.' },
  { icon: Users, title: 'Proximité', description: 'Un interlocuteur dédié et une communication transparente.' },
  { icon: Target, title: 'Innovation', description: 'Techniques et matériaux les plus récents du secteur BTP.' },
];

const milestones = [
  { year: '2026', title: 'Création d\'OZDE BAT', description: 'Fondation de l\'entreprise à Tremblay-en-France.' },
  { year: '2026', title: 'Premiers Chantiers', description: 'Lancement des premiers projets de maçonnerie et carrelage.' },
  { year: '2026', title: 'Location Matériel', description: 'Développement de l\'activité de location de matériel BTP.' },
  { year: '2026+', title: 'Croissance Continue', description: 'Extension des services dans toute l\'Île-de-France.' },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        title="À Propos d'OZDE BAT"
        breadcrumb="À Propos"
        bgImage="/images/equipe-ferraillage-beton.jpg"
      />

      {/* About Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image */}
            <div className="flex-1 hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                <Image
                  src="/images/ouvrier-chantier-coffrage.jpg"
                  alt="Équipe OZDE BAT"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
                Votre Partenaire de Confiance en BTP
              </h3>
              <div className="w-12 h-[3px] bg-secondary mb-6" />
              <p className="text-muted text-base leading-7 mb-4">
                <strong className="text-dark">OZDE BAT</strong> est une entreprise de construction et rénovation
                basée à Tremblay-en-France (93290). Fondée par <strong className="text-dark">Ebubekir Ozdemir</strong>,
                notre société offre une gamme complète de services BTP.
              </p>
              <p className="text-muted text-base leading-7 mb-8">
                Notre engagement : fournir des prestations de qualité, dans le respect des
                délais et du budget. C&apos;est pourquoi nous vous accompagnons de A à Z.
              </p>

              {/* Company Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-light p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-medium text-muted uppercase">Création</span>
                  </div>
                  <p className="font-bold text-dark text-sm">Février 2026</p>
                </div>
                <div className="bg-light p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-medium text-muted uppercase">Siège</span>
                  </div>
                  <p className="font-bold text-dark text-sm">Tremblay (93)</p>
                </div>
                <div className="bg-light p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-medium text-muted uppercase">RCS</span>
                  </div>
                  <p className="font-bold text-dark text-sm">Bobigny 101 200 830</p>
                </div>
                <div className="bg-light p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-medium text-muted uppercase">Capital</span>
                  </div>
                  <p className="font-bold text-dark text-sm">9 000 &euro;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-light">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="text-center mb-14">
            <h3 className="text-3xl sm:text-4xl font-bold text-dark section-line">
              Nos Valeurs
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h5 className="text-lg font-bold text-dark mb-3">{value.title}</h5>
                <p className="text-muted text-sm leading-6">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="text-center mb-14">
            <h3 className="text-3xl sm:text-4xl font-bold text-dark section-line">
              Notre Histoire
            </h3>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-secondary/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-secondary font-semibold text-sm">{milestone.year}</span>
                  <h4 className="text-lg font-bold text-dark mt-1 mb-2">{milestone.title}</h4>
                  <p className="text-muted text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 lg:py-24 bg-dark">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="text-center mb-14">
            <h3 className="text-3xl sm:text-4xl font-bold text-white section-line">
              Nos Domaines d&apos;Expertise
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
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
              <div key={expertise} className="flex items-center gap-3 bg-white/5 p-4 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-white/80 text-sm">{expertise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Prêt à Travailler avec Nous ?
          </h2>
          <p className="text-muted text-base mb-8">
            Contactez-nous pour discuter de votre projet. Devis gratuit et sans engagement.
          </p>
          <Link href="/contact" className="main-btn inline-flex items-center gap-2">
            Nous Contacter
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
