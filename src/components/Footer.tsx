import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const serviceLinks = [
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
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <Image
              src="/images/logo.png"
              alt="OZDE BAT"
              width={140}
              height={105}
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Construction, rénovation et location de matériel BTP en Île-de-France.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">Liens</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+33768059389" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  07 68 05 93 89
                </a>
              </li>
              <li>
                <a href="mailto:contact@ozdebat.fr" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  contact@ozdebat.fr
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>1 Avenue Jean Jacques Rousseau, 93290 Tremblay-en-France</span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>Lun-Ven: 8h-18h &middot; Sam: 9h-14h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} OZDE BAT SAS &middot; RCS Bobigny 101 200 830
          </p>
          <Link href="/devis" className="inline-flex items-center gap-1.5 text-secondary text-xs font-medium hover:underline">
            Devis gratuit <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
