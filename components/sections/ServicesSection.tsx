'use client';

import { motion } from 'framer-motion';
import { Ship, Search, Factory, FileText } from 'lucide-react';
import { SERVICES } from '@/lib/data';

const ICONS: Record<string, React.ElementType> = { Ship, Search, Factory, FileText };

export default function ServicesSection() {
  return (
    <section className="py-20 bg-bg-section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-gold font-poppins font-semibold text-sm uppercase tracking-wider">
            Our Capabilities
          </span>
          <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-text-dark mt-3 mb-4">
            What We Do
          </h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-text-muted max-w-2xl mx-auto">
            Comprehensive export services designed to simplify international trade and deliver
            excellence at every step.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] || Ship;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow border border-border-light"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-pale group-hover:bg-green-primary flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-7 h-7 text-green-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-jakarta font-bold text-lg text-text-dark mb-3">{service.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
