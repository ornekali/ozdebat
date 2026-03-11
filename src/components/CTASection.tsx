import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/coulage-beton-equipe.jpg"
        alt="Équipe OZDE BAT"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-secondary px-5 py-2 rounded-full text-sm font-semibold mb-8 border border-white/10">
            <Sparkles className="w-4 h-4" />
            Devis gratuit sous 24h
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Prêt à Démarrer Votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Projet
            </span>{' '}?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous dès aujourd&apos;hui pour discuter de votre projet.
            Notre équipe vous accompagne de A à Z.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/devis"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary hover:to-secondary text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/30 active:scale-95"
            >
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+33768059389"
              className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              07 68 05 93 89
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
