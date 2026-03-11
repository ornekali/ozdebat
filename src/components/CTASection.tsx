import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">Démarrons ensemble</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Prêt à démarrer votre projet ?
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
          Contactez-nous pour un devis gratuit et sans engagement. Réponse sous 24h.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 bg-secondary text-white px-7 py-3.5 rounded-lg text-base font-semibold transition-all hover:bg-secondary/90 active:scale-[0.98] group"
          >
            Demander un Devis Gratuit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="tel:+33768059389"
            className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-lg text-base font-medium transition-all hover:bg-white/15 border border-white/10"
          >
            <Phone className="w-4 h-4" />
            07 68 05 93 89
          </a>
        </div>
      </div>
    </section>
  );
}
