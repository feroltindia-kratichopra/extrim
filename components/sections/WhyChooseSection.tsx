'use client';

import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Globe,
  TrendingDown,
  Truck,
  Tags,
  FileCheck,
} from 'lucide-react';
import { WHY_CHOOSE } from '@/lib/data';

const ICONS: Record<string, React.ElementType> = {
  BadgeCheck,
  Globe,
  TrendingDown,
  Truck,
  Tags,
  FileCheck,
};

export default function WhyChooseSection() {
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
            Why Partner With Us
          </span>
          <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-text-dark mt-3 mb-4">
            Why Choose JD EXIM
          </h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-text-muted max-w-2xl mx-auto">
            Six reasons international buyers trust JD EXIM as their long-term export partner.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = ICONS[item.icon] || BadgeCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all border border-border-light overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-primary to-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-green-pale group-hover:bg-gold flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-blue-800 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-lg text-text-dark mb-2">{item.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
