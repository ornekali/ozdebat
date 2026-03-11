import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const footerLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Nos Services', href: '/services' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Location Matériel', href: '/location-materiel' },
  { label: 'Devis Gratuit', href: '/devis' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Maçonnerie Générale', href: '/services#maconnerie' },
  { label: 'Carrelage', href: '/services#carrelage' },
  { label: 'Rénovation', href: '/services#renovation' },
  { label: 'Travaux Publics', href: '/services#travaux-publics' },
  { label: 'Construction Neuve', href: '/services#construction' },
  { label: 'Location Matériel', href: '/location-materiel' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white pt-16 pb-0">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="OZDE BAT"
              width={140}
              height={70}
              className="h-14 w-auto brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-6 mb-4">
              Construction, rénovation et location de matériel BTP en Île-de-France.
              Qualité, fiabilité et transparence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-base font-bold mb-5 text-white">Liens Utiles</h6>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-gray-400 text-sm hover:text-secondary transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h6 className="text-base font-bold mb-5 text-white">Horaires</h6>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-gray-400">
                <span>Lundi - Vendredi</span>
                <span className="text-white">8h - 18h</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Samedi</span>
                <span className="text-white">9h - 14h</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Dimanche</span>
                <span className="text-white">Fermé</span>
              </li>
            </ul>
            <p className="text-secondary text-sm font-medium mt-4">
              Intervention d&apos;urgence disponible !
            </p>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-base font-bold mb-5 text-white">Contact</h6>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="text-white font-medium block mb-1">Adresse</span>
                1 Av. Jean Jacques Rousseau,<br />
                93290 Tremblay-en-France
              </li>
              <li>
                <span className="text-white font-medium block mb-1">Téléphone</span>
                <a href="tel:+33768059389" className="hover:text-secondary transition-colors">
                  07 68 05 93 89
                </a>
              </li>
              <li>
                <span className="text-white font-medium block mb-1">Email</span>
                <a href="mailto:contact@ozdebat.fr" className="hover:text-secondary transition-colors">
                  contact@ozdebat.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1170px] mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} OZDE BAT SAS &middot; RCS Bobigny 101 200 830
          </p>
          <Link
            href="/devis"
            className="text-secondary text-xs font-medium hover:underline"
          >
            Devis gratuit →
          </Link>
        </div>
      </div>
    </footer>
  );
}
