'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative pt-28 lg:pt-[8.5rem] pb-16 bg-gradient-to-br from-green-dark via-green-primary to-green-dark overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold/30"
            style={{ left: `${10 + i * 15}%`, top: `${30 + (i % 3) * 20}%` }}
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
            {breadcrumbs.map((bc, i) => (
              <span key={i} className="flex items-center gap-2">
                {bc.href ? (
                  <Link href={bc.href} className="hover:text-gold transition-colors">
                    {bc.label}
                  </Link>
                ) : (
                  <span className="text-gold">{bc.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="w-3 h-3" />}
              </span>
            ))}
          </nav>
          <h1 className="font-jakarta font-bold text-4xl md:text-5xl text-white mb-3">{title}</h1>
          {subtitle && <p className="text-white/80 text-lg max-w-2xl">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
