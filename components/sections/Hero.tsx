'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Package } from 'lucide-react';

const SLIDES = [
  {
    image: 'https://images.pexels.com/photos/2240207/pexels-photo-2240207.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Your Trusted Global Export Partner',
    subtitle: 'Premium-quality products sourced ethically from India, delivered to 40+ countries worldwide.',
    cta1: { label: 'Get a Quote', href: '/contact' },
    cta2: { label: 'Explore Products', href: '/products' },
  },
  {
    image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Premium Psyllium Products',
    subtitle: 'Pharmacopeia-grade psyllium husk from Gujarat — the world’s finest source.',
    cta1: { label: 'Get a Quote', href: '/contact' },
    cta2: { label: 'View Details', href: '/products/psyllium-husk' },
  },
  {
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Eco-Friendly Packaging Solutions',
    subtitle: 'Sustainable, biodegradable packaging for a greener planet.',
    cta1: { label: 'Get a Quote', href: '/contact' },
    cta2: { label: 'View Details', href: '/products/eco-friendly-packaging' },
  },
  {
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Quality Garments Export',
    subtitle: 'Ethically manufactured apparel — from casual wear to premium fashion.',
    cta1: { label: 'Get a Quote', href: '/contact' },
    cta2: { label: 'View Details', href: '/products/garments' },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <AnimatePresence >
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 6, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <Image src={SLIDES[current].image} alt={SLIDES[current].title} fill className="object-cover" priority />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-dark/90 via-green-dark/70 to-green-dark/40" />
        </motion.div>
      </AnimatePresence>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold/30"
            style={{ left: `${10 + i * 8}%`, top: `${20 + (i % 4) * 20}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center pt-20 lg:pt-[7.5rem]">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-sm font-medium mb-6">
              {current === 0 ? 'Welcome to JD EXIM' : `Product Highlight ${current}`}
            </span>
            <h1 className="font-jakarta font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              {SLIDES[current].title}
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              {SLIDES[current].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={SLIDES[current].cta1.href}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-poppins font-semibold px-7 py-3.5 rounded-full transition-all shadow-gold hover:shadow-lg hover:scale-105"
              >
                {SLIDES[current].cta1.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={SLIDES[current].cta2.href}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white font-poppins font-semibold px-7 py-3.5 rounded-full transition-all hover:bg-white/20 hover:scale-105"
              >
                <Package className="w-4 h-4" />
                {SLIDES[current].cta2.label}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-gold' : 'w-2 bg-white/50'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
