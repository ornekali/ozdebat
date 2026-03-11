import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Instagram, Linkedin, Hammer } from 'lucide-react';

const services = [
  { label: 'Maçonnerie Générale', href: '/services#maconnerie' },
  { label: 'Carrelage', href: '/services#carrelage' },
  { label: 'Rénovation', href: '/services#renovation' },
  { label: 'Travaux Publics', href: '/services#travaux-publics' },
  { label: 'Construction Neuve', href: '/services#construction' },
  { label: 'Location Matériel', href: '/location-materiel' },
];

const quickLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Devis Gratuit', href: '/devis' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Band */}
      <div className="relative bg-gradient-to-r from-secondary via-secondary to-accent">
        <Image src="/images/ferraillage-dalle-grande.jpg" alt="" fill className="object-cover opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                Vous avez un projet ?
              </h3>
              <p className="text-white/80 mt-2 text-lg">
                Contactez-nous pour un devis gratuit et sans engagement
              </p>
            </div>
            <Link
              href="/devis"
              className="group bg-white text-secondary px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-3 whitespace-nowrap shadow-xl shadow-black/10 hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              Demander un Devis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-primary relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Company Info - wider column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20">
                  <Hammer className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">
                    OZDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">BAT</span>
                  </span>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Construction & Rénovation
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                Entreprise de construction et rénovation en Île-de-France.
                Maçonnerie, carrelage, travaux publics et location de matériel BTP.
                Votre partenaire de confiance depuis plus de 10 ans.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 bg-white/5 hover:bg-gradient-to-br hover:from-secondary hover:to-accent rounded-xl flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-secondary/20"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full" />
                Nos Services
              </h4>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/50 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 group hover:translate-x-1"
                    >
                      <ArrowRight className="w-3 h-3 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-5 group-hover:ml-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full" />
                Liens Rapides
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/50 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 group hover:translate-x-1"
                    >
                      <ArrowRight className="w-3 h-3 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-5 group-hover:ml-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full" />
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://maps.google.com/?q=1+Avenue+Jean+Jacques+Rousseau+93290+Tremblay-en-France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <span className="text-white/50 text-sm group-hover:text-white/70 transition-colors block">
                        1 Avenue Jean Jacques Rousseau
                      </span>
                      <span className="text-white/50 text-sm group-hover:text-white/70 transition-colors">
                        93290 Tremblay-en-France
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="tel:+33768059389" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-white/50 text-sm group-hover:text-white transition-colors font-medium">
                      07 68 05 93 89
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@ozdebat.fr" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-white/50 text-sm group-hover:text-white transition-colors">
                      contact@ozdebat.fr
                    </span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <span className="text-white/50 text-sm block">Lun - Ven: 8h00 - 18h00</span>
                      <span className="text-white/50 text-sm">Sam: 9h00 - 14h00</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/30 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} OZDE BAT SAS. Tous droits réservés.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-white/30 text-xs">
                <span>RCS Bobigny 101 200 830</span>
                <span className="hidden sm:inline">|</span>
                <span>Capital: 9 000 &euro;</span>
                <span className="hidden sm:inline">|</span>
                <span>Assurance Décennale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
