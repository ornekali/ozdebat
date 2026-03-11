import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-dark relative">
      <div className="max-w-[1170px] mx-auto px-4 text-center">
        <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-6">
          Prêt à Démarrer<br />
          Votre Projet ?
        </h3>
        <p className="text-white/60 text-base leading-7 max-w-xl mx-auto mb-10">
          Contactez-nous pour un devis gratuit et sans engagement.
          Notre équipe vous répondra sous 24 heures.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/devis" className="main-btn">
            Demander un Devis Gratuit
          </Link>
          <a
            href="tel:+33768059389"
            className="main-btn-white flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            07 68 05 93 89
          </a>
        </div>
      </div>
    </section>
  );
}
