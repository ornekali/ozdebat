'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown, Hammer } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  {
    href: '/services',
    label: 'Nos Services',
    submenu: [
      { href: '/services#maconnerie', label: 'Maçonnerie Générale' },
      { href: '/services#carrelage', label: 'Carrelage' },
      { href: '/services#renovation', label: 'Rénovation' },
      { href: '/services#travaux-publics', label: 'Travaux Publics' },
      { href: '/services#construction', label: 'Construction Neuve' },
    ],
  },
  { href: '/location-materiel', label: 'Location Matériel' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled
                ? 'bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-secondary/20'
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
            } group-hover:scale-110`}>
              <Hammer className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-primary' : 'text-white'
              }`}>
                OZDE <span className="text-secondary">BAT</span>
              </span>
              <p className={`text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                scrolled ? 'text-gray-400' : 'text-white/60'
              }`}>
                Construction & Rénovation
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.href)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    scrolled
                      ? 'text-gray-600 hover:text-secondary hover:bg-secondary/5'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {link.submenu && <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeSubmenu === link.href ? 'rotate-180' : ''}`} />}
                </Link>
                {link.submenu && activeSubmenu === link.href && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 py-2 overflow-hidden">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-5 py-2.5 text-sm text-gray-600 hover:text-secondary hover:bg-secondary/5 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+33768059389"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-500 hover:text-secondary' : 'text-white/70 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>07 68 05 93 89</span>
            </a>
            <Link
              href="/devis"
              className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-secondary/25 active:scale-95"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.href}>
              {link.submenu ? (
                <>
                  <button
                    onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-gray-700 hover:text-secondary hover:bg-secondary/5 font-medium transition-colors"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 pb-2 space-y-0.5">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-500 hover:text-secondary rounded-lg hover:bg-secondary/5 transition-colors font-medium"
                      >
                        Tous les services
                      </Link>
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-500 hover:text-secondary rounded-lg hover:bg-secondary/5 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:text-secondary hover:bg-secondary/5 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <a
              href="tel:+33768059389"
              className="flex items-center justify-center gap-2 text-gray-600 font-medium py-2"
            >
              <Phone className="w-4 h-4 text-secondary" />
              07 68 05 93 89
            </a>
            <Link
              href="/devis"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-secondary text-white text-center py-3 rounded-xl font-semibold hover:bg-secondary/90 transition-colors"
            >
              Devis Gratuit
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
