'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-dark via-green-primary to-green-dark">
      {/* World map decorative background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cpath fill='%23D4AF37' d='M200 100l50 30 60-10 40 40 80-20 60 40 100-30 80 20 60-40 100 10 60 30 50-20 40 30 60-10v300H200z'/%3E%3C/svg%3E\")",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold/40"
            style={{ left: `${15 + i * 11}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-jakarta font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-5">
            Ready to Source Premium Products from India?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Partner with JD EXIM for reliable, high-quality exports backed by years of global
            trade expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-poppins font-semibold px-8 py-4 rounded-full transition-all shadow-gold hover:shadow-lg hover:scale-105"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white font-poppins font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/20 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Download Catalogue
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
