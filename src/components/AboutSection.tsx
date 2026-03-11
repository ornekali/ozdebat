import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered heading */}
        <div className="text-center mb-14">
          <h3 className="text-3xl sm:text-4xl font-bold text-dark section-line">
            Qui Sommes-Nous
          </h3>
          <p className="text-muted mt-6 max-w-2xl mx-auto">
            OZDE BAT est une entreprise de construction et rénovation
            basée à Tremblay-en-France, spécialisée dans les services BTP en Île-de-France.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
            <Image
              src="/images/ouvrier-chantier-coffrage.jpg"
              alt="Équipe OZDE BAT sur chantier"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-muted text-base leading-7 mb-6">
              Fondée par <strong className="text-dark">Ebubekir Ozdemir</strong>,
              notre société offre une gamme complète de services BTP : maçonnerie générale,
              carrelage, travaux publics, construction neuve et location de matériel.
            </p>
            <p className="text-muted text-base leading-7 mb-8">
              Notre engagement : qualité, respect des délais et transparence totale.
              Nous vous accompagnons de A à Z, de la conception à la livraison.
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
