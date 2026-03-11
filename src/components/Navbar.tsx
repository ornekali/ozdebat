'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold transition-colors ${
              scrolled ? 'bg-secondary text-white' : 'bg-white/10 text-white border border-white/20'
            }`}>
              OB
            </div>
            <span className={`text-lg font-bold transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
              OZDE <span className="text-secondary">BAT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.submenu && setHoveredMenu(link.href)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    scrolled
                      ? 'text-slate-600 hover:text-primary hover:bg-slate-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-3 h-3" />}
                </Link>
                {link.submenu && hoveredMenu === link.href && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-slate-100 py-1.5">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:text-secondary hover:bg-slate-50 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+33768059389"
              className={`flex items-center gap-1.5 text-sm transition-colors ${
                scrolled ? 'text-slate-500 hover:text-primary' : 'text-white/70 hover:text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              07 68 05 93 89
            </a>
            <Link
              href="/devis"
              className="bg-secondary text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-secondary/90 transition-colors"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            className={`lg:hidden p-1.5 rounded-md transition-colors ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-3 space-y-0.5">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => setMobileSubmenu(!mobileSubmenu)}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-50"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileSubmenu && (
                      <div className="pl-4 space-y-0.5">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-sm text-slate-500 hover:text-secondary rounded-md"
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
                    className="block px-3 py-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-50"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <Link
                href="/devis"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-secondary text-white text-center py-2.5 rounded-md text-sm font-semibold"
              >
                Devis Gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
