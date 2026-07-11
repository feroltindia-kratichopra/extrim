'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { PRODUCTS } from '@/lib/data';

export default function ProductsContent() {
  return (
    <div className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-gold font-poppins font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-text-dark mt-3 mb-4">
            Explore Our Export Categories
          </h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-text-muted max-w-2xl mx-auto">
            Four premium product categories, each backed by verified manufacturing partners and
            rigorous quality assurance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-border-light"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="font-jakarta font-bold text-white text-xl">{product.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{product.tagline}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-text-muted leading-relaxed mb-4">{product.shortDesc}</p>
                <div className="space-y-2 mb-5">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-text-dark">
                      <Check className="w-4 h-4 text-green-primary shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-2 bg-green-primary hover:bg-green-dark text-white font-poppins text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
