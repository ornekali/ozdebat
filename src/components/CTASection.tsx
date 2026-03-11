import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/coulage-beton-equipe.jpg)' }}
      />
      <div className="absolute inset-0 bg-primary/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Prêt à Démarrer Votre <span className="text-secondary">Projet</span> ?
        </h2>
        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          Contactez-nous dès aujourd&apos;hui pour discuter de votre projet.
          Devis gratuit et sans engagement sous 24 heures.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-xl hover:shadow-secondary/25 group"
          >
            Demander un Devis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+33XXXXXXXXX"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-medium transition-all border border-white/20"
          >
            <Phone className="w-5 h-5" />
            Appelez-nous
          </a>
        </div>
      </div>
    </section>
  );
}
