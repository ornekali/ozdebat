import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="hidden lg:block flex-1">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/ouvrier-chantier-coffrage.jpg"
                alt="Équipe OZDE BAT sur chantier"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h4 className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug text-dark mb-6">
              Experts en Construction<br />
              et Rénovation BTP<br />
              en Île-de-France
            </h4>
            <p className="text-muted text-base leading-7 mb-8">
              <strong className="text-dark">OZDE BAT</strong> est une entreprise de construction et rénovation
              basée à Tremblay-en-France (93290). Fondée par Ebubekir Ozdemir,
              nous offrons une gamme complète de services BTP : maçonnerie générale,
              carrelage, travaux publics, construction neuve et location de matériel.
              Notre engagement : qualité, respect des délais et transparence.
            </p>
            <Link href="/a-propos" className="main-btn">
              En Savoir Plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
