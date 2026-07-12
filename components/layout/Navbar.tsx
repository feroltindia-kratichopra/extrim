'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top contact bar */}
      <div className="hidden lg:block bg-blue-800 text-white/90 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs">{COMPANY.address}</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="text-xs">{COMPANY.email}</span>
            </a>
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs">{COMPANY.phone}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-primary px-3 py-1 rounded-full hover:bg-green-light transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">WhatsApp</span>
            </a>
            <div className="flex items-center gap-3 pl-3 border-l border-white/20">
              <a href={COMPANY.social.linkedin} className="hover:text-gold transition-colors" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href={COMPANY.social.facebook} className="hover:text-gold transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.643c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/></svg>
              </a>
              <a href={COMPANY.social.instagram} className="hover:text-gold transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed inset-x-0 top-0 lg:top-10 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-12 h-12">
              <Image src="/images/logo/logo1_icon.png" alt="JD EXIM Logo" fill className="object-contain" priority />
            </div>
            <div className={`font-jakarta font-bold text-xl ${scrolled ? 'text-green-dark' : 'text-white'}`}>
              <Image src="/images/logo/logo1_name.png" alt="JD EXIM Logo" width={100} height={100} className="object-contain" />
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-1 font-bold text-text-muted text-xl text-lg">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(link.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-bold text-lg transition-colors ${
                      scrolled
                        ? 'text-gray-800 hover:text-gold'
                        : 'text-gray-800 hover:text-blue-900'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-card-hover border border-border-light overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-gold transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-bold  text-lg transition-colors ${
                    scrolled
                      ? 'text-text-dark hover:text-green-primary'
                      : 'text-gray-800 hover:text-blue-900'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-3 lg:justify-self-end">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-poppins font-semibold text-sm px-5 py-2.5 rounded-full transition-all shadow-gold hover:shadow-lg"
            >
              Request Quote
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-green-dark' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-green-dark' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-border-light overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                {NAV_LINKS.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <p className="px-3 py-2.5 text-sm font-medium text-text-dark">
                        {link.label}
                      </p>
                      <div className="pl-6 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-text-muted hover:text-green-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-3 py-2.5 text-sm font-medium text-text-dark hover:text-green-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <Link
                  href="/contact"
                  className="block mt-3 text-center bg-gold text-white font-poppins font-semibold text-sm px-5 py-3 rounded-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      </header>
    </>
  );
}
