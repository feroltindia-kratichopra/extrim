'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Package, Truck, ShieldCheck, Factory, X } from 'lucide-react';
import ProductCategoryGallery, { ProductImageCategory } from '@/components/products/ProductCategoryGallery';

interface ProductDetailProps {
  name: string;
  tagline: string;
  image: string;
  images?: string[];
  imageCategories?: ProductImageCategory[];
  shortDesc: string;
  features: string[];
  highlights: string[];
  longDesc: string;
  applications: string[];
  packaging: string[];
}

export default function ProductDetail({
  name,
  tagline,
  image,
  images,
  imageCategories,
  shortDesc,
  features,
  highlights,
  longDesc,
  applications,
  packaging,
}: ProductDetailProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero section */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-card">
              <Image src={image} alt={name} fill className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-gold text-white px-5 py-3 rounded-2xl shadow-gold hidden sm:block">
              <p className="font-poppins font-bold text-sm">Premium Quality</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-poppins font-semibold text-sm uppercase tracking-wider">
              Product Category
            </span>
            <h1 className="font-jakarta font-bold text-3xl md:text-4xl text-text-dark mt-3 mb-3">
              {name}
            </h1>
            <p className="text-lg text-text-muted mb-5">{tagline}</p>
            <p className="text-text-muted leading-relaxed mb-6">{shortDesc}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {highlights.map((h) => (
                <span key={h} className="text-xs px-3 py-1.5 rounded-full bg-green-pale text-green-primary font-medium">
                  {h}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-poppins font-semibold px-6 py-3 rounded-full transition-all shadow-gold"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border border-border-light text-text-dark hover:bg-white font-poppins font-semibold px-6 py-3 rounded-full transition-all"
              >
                All Products
              </Link>
            </div>
          </motion.div>
        </div>

        {imageCategories && imageCategories.length > 0 && (
          <ProductCategoryGallery categories={imageCategories} />
        )}

        {images && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="font-jakarta font-bold text-2xl text-text-dark mb-2">Product Gallery</h2>
            <p className="text-text-muted mb-8">Browse our full range of {name.toLowerCase()} products.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {images.map((src, i) => (
                <motion.button
                  key={src}
                  type="button"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-card cursor-pointer"
                  onClick={() => setLightbox(src)}
                >
                  <Image
                    src={src}
                    alt={`${name} ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Detailed description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 shadow-card border border-border-light mb-12"
        >
          <h2 className="font-jakarta font-bold text-2xl text-text-dark mb-4">Product Overview</h2>
          <p className="text-text-muted leading-relaxed mb-6">{longDesc}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-jakarta font-bold text-lg text-text-dark mb-3">Featured Products</h3>
              <div className="space-y-2">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-text-dark">
                    <Check className="w-4 h-4 text-green-primary shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-jakarta font-bold text-lg text-text-dark mb-3">Applications</h3>
              <div className="space-y-2">
                {applications.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-text-dark">
                    <Check className="w-4 h-4 text-green-primary shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Package, title: 'Packaging Options', desc: packaging.join(', ') },
            { icon: Truck, title: 'Shipping & Logistics', desc: 'Sea, air, and land freight available worldwide.' },
            { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Pre-shipment inspection and lab testing.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card border border-border-light"
            >
              <div className="w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-green-primary" />
              </div>
              <h3 className="font-jakarta font-bold text-text-dark mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-green-dark to-green-primary rounded-3xl p-10 text-center text-white"
        >
          <Factory className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="font-jakarta font-bold text-2xl mb-3">Interested in {name}?</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Get in touch for a custom quote, samples, or private-label manufacturing options.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-poppins font-semibold px-8 py-3.5 rounded-full transition-all shadow-gold"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightbox} alt={`${name} preview`} fill className="object-contain rounded-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
