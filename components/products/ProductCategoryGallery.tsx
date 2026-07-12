'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';

export interface ProductImageCategory {
  label: string;
  mainImage: string;
  images: string[];
}

interface ProductCategoryGalleryProps {
  categories: ProductImageCategory[];
  title?: string;
}

export default function ProductCategoryGallery({
  categories,
  title = 'Product Gallery',
}: ProductCategoryGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const selected = categories.find((cat) => cat.label === activeCategory);

  const toggleCategory = (label: string) => {
    setActiveCategory((current) => (current === label ? null : label));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <h2 className="font-jakarta font-bold text-2xl text-text-dark mb-2">{title}</h2>
        <p className="text-text-muted mb-8">
          Select a category to explore our eco-friendly packaging range.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, i) => {
            const isActive = activeCategory === category.label;

            return (
              <motion.button
                key={category.label}
                type="button"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => toggleCategory(category.label)}
                className={`group text-left rounded-2xl overflow-hidden shadow-card border-2 transition-all ${
                  isActive
                    ? 'border-gold ring-2 ring-gold/30'
                    : 'border-transparent hover:border-green-pale'
                }`}
              >
                <div className="relative aspect-square bg-white">
                  <Image
                    src={category.mainImage}
                    alt={category.label}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div
                  className={`flex items-center justify-between px-4 py-3 ${
                    isActive ? 'bg-gold text-white' : 'bg-white text-text-dark'
                  }`}
                >
                  <span className="font-jakarta font-bold text-sm">{category.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.label}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="mt-8 bg-white rounded-3xl p-6 shadow-card border border-border-light">
                <h3 className="font-jakarta font-bold text-xl text-text-dark mb-6">
                  {selected.label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {selected.images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setLightbox(src)}
                      className="group relative aspect-square rounded-2xl overflow-hidden shadow-card bg-white cursor-pointer"
                    >
                      <Image
                        src={src}
                        alt={`${selected.label} ${i + 1}`}
                        fill
                        className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

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
              <Image src={lightbox} alt="Product preview" fill className="object-contain rounded-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
