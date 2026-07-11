'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const maxIndex = Math.max(0, TESTIMONIALS.length - visible);

  const next = () => setIndex((p) => Math.min(p + 1, maxIndex));
  const prev = () => setIndex((p) => Math.max(p - 1, 0));

  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-gold font-poppins font-semibold text-sm uppercase tracking-wider">
            Client Reviews
          </span>
          <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-text-dark mt-3 mb-4">
            What Our Buyers Say
          </h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-text-muted max-w-2xl mx-auto">
            Trusted by buyers across the USA, UK, Europe, UAE, Japan, Australia, and beyond.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `calc(-${index * (100 / visible)}%)` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex"
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3">
                  <div className="bg-white rounded-2xl p-7 shadow-card border border-border-light h-full flex flex-col">
                    <Quote className="w-8 h-8 text-gold/40 mb-4" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed flex-1 mb-5">
                      “{t.review}”
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                      <div className="w-11 h-11 rounded-full bg-green-pale flex items-center justify-center font-jakarta font-bold text-green-primary">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-jakarta font-bold text-sm text-text-dark">{t.name}</p>
                        <p className="text-xs text-text-muted">
                          {t.flag} {t.company}, {t.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-10 h-10 rounded-full border border-border-light bg-white text-green-primary hover:bg-green-primary hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={index >= maxIndex}
              className="w-10 h-10 rounded-full border border-border-light bg-white text-green-primary hover:bg-green-primary hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
