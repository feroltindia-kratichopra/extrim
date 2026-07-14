'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/data';

const CATEGORIES = ['All', 'Products'] as const;
const PRODUCT_TABS = ['All Products', 'Psyllium Husk', 'Gift Bags', 'Eco-Friendly Packaging'] as const;

type Category = (typeof CATEGORIES)[number];
type ProductTab = (typeof PRODUCT_TABS)[number];

export default function GalleryContent() {
  const [filter, setFilter] = useState<Category>('All');
  const [productTab, setProductTab] = useState<ProductTab>('All Products');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let images = GALLERY_IMAGES;

    if (filter !== 'All') {
      images = images.filter((img) => img.category === filter);
    }

    if (filter === 'Products' && productTab !== 'All Products') {
      images = images.filter((img) => img.product === productTab);
    }

    return images;
  }, [filter, productTab]);

  const handleCategoryChange = (cat: Category) => {
    setFilter(cat);
    if (cat !== 'Products') {
      setProductTab('All Products');
    }
  };

  return (
    <div className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2.5 rounded-full font-poppins text-sm font-semibold transition-all ${
                filter === cat
                  ? 'bg-green-primary text-white shadow-green'
                  : 'bg-white text-text-dark border border-border-light hover:bg-green-pale hover:text-green-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filter === 'Products' && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {PRODUCT_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setProductTab(tab)}
                className={`px-4 py-2 rounded-full font-poppins text-xs font-semibold transition-all ${
                  productTab === tab
                    ? 'bg-gold text-white shadow-gold'
                    : 'bg-white text-text-muted border border-border-light hover:bg-gold/10 hover:text-gold'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {filter !== 'Products' && <div className="mb-10" />}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-card cursor-pointer bg-white"
                onClick={() => setLightbox(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`group-hover:scale-110 transition-transform duration-500 ${
                    img.category === 'Products' ? 'object-contain p-2' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  {/* <p className="text-white text-sm font-jakarta font-bold">{img.alt}</p> */}
                  <p className="text-gold text-xs">{img.product ?? img.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-12">No images found for this filter.</p>
        )}
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
              <Image src={lightbox} alt="Gallery image" fill className="object-contain rounded-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
