'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { PRODUCTS } from '@/lib/data';

export default function ProductsSection() {
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
            Our Products
          </span>
          <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-text-dark mt-3 mb-4">
            What We Export
          </h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-text-muted max-w-2xl mx-auto">
            Premium product categories, each crafted to meet the highest international standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-border-light"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gray-200/20" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="font-jakarta text-text-dark font-bold text-xl">{product.name}</h3>
                  <p className=" text-text-dark text-sm mt-1">{product.tagline}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
