'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  {
    href: '/services',
    label: 'Services',
    submenu: [
      { href: '/services#maconnerie', label: 'Maçonnerie Générale' },
      { href: '/services#carrelage', label: 'Carrelage' },
      { href: '/services#renovation', label: 'Rénovation' },
      { href: '/services#travaux-publics', label: 'Travaux Publics' },
      { href: '/services#construction', label: 'Construction Neuve' },
    ],
  },
  { href: '/location-materiel', label: 'Location' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#f6f6f6] hidden md:block">
        <div className="max-w-[1170px] mx-auto px-4 flex items-center justify-between py-2">
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="tel:+33768059389" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              07 68 05 93 89
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              1 Av. Jean Jacques Rousseau, 93290 Tremblay-en-France
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted">
            <a href="mailto:contact@ozdebat.fr" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              contact@ozdebat.fr
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_3px_16px_rgba(0,0,0,0.1)]'
          : 'bg-white'
      }`}>
        <div className="max-w-[1170px] mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2">
            <Image
              src="/images/logo.png"
              alt="OZDE BAT"
              width={165}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.submenu && setHoveredMenu(link.href)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={link.href}
                  className="px-5 text-sm font-medium uppercase text-dark leading-[80px] hover:text-secondary transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-3 h-3" />}
                </Link>
                {link.submenu && hoveredMenu === link.href && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-[0_3px_16px_rgba(0,0,0,0.1)] z-50">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-6 py-3 text-sm text-dark border-b border-gray-100 last:border-0 hover:bg-secondary hover:text-white transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/devis" className="main-btn">
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            className="lg:hidden p-2 text-secondary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[340px] overflow-y-auto">
          <div className="max-w-[1170px] mx-auto px-4 py-2">
            {navLinks.map((link) => (
              <div key={link.href} className="border-b border-gray-50">
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => setMobileSubmenu(!mobileSubmenu)}
                      className="flex items-center justify-between w-full py-3 text-sm font-medium uppercase text-dark hover:text-secondary transition-colors"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileSubmenu && (
                      <div className="pl-4 pb-2">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-sm text-muted hover:text-secondary transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-sm font-medium uppercase text-dark hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="py-3">
              <Link
                href="/devis"
                onClick={() => setIsOpen(false)}
                className="main-btn block text-center"
              >
                Devis Gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
