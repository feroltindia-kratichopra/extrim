'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATIONS } from '@/lib/data';

export default function Certifications() {
  const [current, setCurrent] = useState(0);

  // Number of logos visible at once
  const visibleItems = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CERTIFICATIONS.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const visibleCertificates = Array.from(
    { length: Math.min(visibleItems, CERTIFICATIONS.length) },
    (_, index) => CERTIFICATIONS[(current + index) % CERTIFICATIONS.length]
  );

  return (
    <section className="py-20 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-gold font-poppins font-semibold text-sm uppercase tracking-wider">
            Compliance & Trust
          </span>

          <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-text-dark mt-3 mb-4">
            Certifications & Compliance
          </h2>

          <div className="section-divider mx-auto mb-5" />
        </motion.div>

        {/* Carousel */}
        <AnimatePresence >
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
     
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {visibleCertificates.map((cert) => (
              <motion.div
                key={cert.name}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-border-light p-6 flex items-center justify-center h-50 transition-all"
              >
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={50}
                  height={50}
                  className="object-contain  w-auto  "
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {CERTIFICATIONS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? 'w-8 h-2 bg-gold'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}