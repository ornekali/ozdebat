import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-secondary to-secondary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Vous avez un projet ?</h3>
            <p className="text-white/80 mt-1">Contactez-nous pour un devis gratuit et sans engagement</p>
          </div>
          <Link
            href="/devis"
            className="bg-white text-secondary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 group whitespace-nowrap"
          >
            Demander un Devis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center font-bold text-lg">
                OB
              </div>
              <div>
                <span className="text-xl font-bold">OZDE <span className="text-secondary">BAT</span></span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Construction & Rénovation</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Entreprise de construction et rénovation en Île-de-France.
              Maçonnerie, carrelage, travaux publics et location de matériel BTP.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Maçonnerie Générale', href: '/services#maconnerie' },
                { label: 'Carrelage', href: '/services#carrelage' },
                { label: 'Rénovation', href: '/services#renovation' },
                { label: 'Travaux Publics', href: '/services#travaux-publics' },
                { label: 'Construction Neuve', href: '/services#construction' },
                { label: 'Location Matériel', href: '/location-materiel' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-secondary text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'À Propos', href: '/a-propos' },
                { label: 'Réalisations', href: '/realisations' },
                { label: 'Devis Gratuit', href: '/devis' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-secondary text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  1 Avenue Jean Jacques Rousseau<br />
                  93290 Tremblay-en-France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+33768059389" className="text-white/60 hover:text-secondary text-sm transition-colors">
                  07 68 05 93 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:contact@ozdebat.fr" className="text-white/60 hover:text-secondary text-sm transition-colors">
                  contact@ozdebat.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  Lun - Ven: 8h00 - 18h00<br />
                  Sam: 9h00 - 14h00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} OZDE BAT SAS. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>RCS Bobigny 101 200 830</span>
            <span className="mx-2">|</span>
            <span>SIRET: 101 200 830 000 XX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
