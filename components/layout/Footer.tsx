'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { MapPin, Mail, Phone, MessageCircle, Send, ArrowUp } from 'lucide-react';
import { COMPANY, PRODUCTS, FOOTER_LINKS } from '@/lib/data';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="font-semibold text-text-muted text-xl border-t border-border-light">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12">
              <Image src="/images/logo/logo1_icon.png" alt="JD EXIM Logo" fill className="object-contain" priority />
              </div>
              <Image src="/images/logo/logo1_name.png" alt="JD EXIM Logo" width={100} height={100}/>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              {COMPANY.description}
            </p>
            <div className="flex items-center gap-3">
              <a href={COMPANY.social.linkedin} className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href={COMPANY.social.facebook} className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.643c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/></svg>
              </a>
              <a href={COMPANY.social.instagram} className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="font-jakarta font-bold text-blue-800 text-lg mb-5">Product Categories</h3>
            <ul className="space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="text-sm hover:text-gold transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-jakarta font-bold text-blue-800 text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.flatMap((link) =>
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-gold transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {link.label}
                  </Link>
                </li>
              )}
           
            </ul>
          </div>

          {/* Column 4: Newsletter + Contact */}
          <div>
            <h3 className="font-jakarta font-bold text-blue-800 text-lg mb-5">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{COMPANY.address}</span>
              </p>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                {COMPANY.phone}
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-gold shrink-0" />
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-border-light">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs ">
            &copy; {new Date().getFullYear()} JD EXIM. All rights reserved.
          </p>
          <p className="text-xs text-white/60">
            Designed &amp; developed with excellence for global trade.
          </p>
          <ul className="flex items-center gap-2">
            <li>
              <Link href="/privacy-policy" className="text-sm hover:text-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-sm hover:text-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Terms &amp; Conditions
                </Link>
              </li>
          </ul>
          
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-green-primary hover:bg-green-dark text-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
