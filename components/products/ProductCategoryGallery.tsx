'use client';

import { useLayoutEffect, useState } from 'react';
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

function getGalleryCols() {
  if (typeof window === 'undefined') return 4;
  const width = window.innerWidth;
  if (width >= 1024) return 4;
  if (width >= 640) return 3;
  return 3; // unused on mobile layout; kept in sync with sm grid
}

function useGalleryCols() {
  const [cols, setCols] = useState(getGalleryCols);

  useLayoutEffect(() => {
    const update = () => setCols(getGalleryCols());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return cols;
}

function CategoryCard({
  category,
  isActive,
  index,
  order,
  onToggle,
}: {
  category: ProductImageCategory;
  isActive: boolean;
  index: number;
  order?: number;
  onToggle: () => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={onToggle}
      style={order !== undefined ? { order } : undefined}
      className={`group text-left rounded-2xl overflow-hidden shadow-card border-2 transition-all shrink-0 ${
        isActive
          ? 'border-gold ring-2 ring-gold/30'
          : 'border-transparent hover:border-green-pale'
      }`}
    >
      <div className="relative aspect-square bg-white w-full">
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
}

function CategoryExpandPanel({
  selected,
  onSelectImage,
  order,
}: {
  selected: ProductImageCategory;
  onSelectImage: (src: string) => void;
  order?: number;
}) {
  return (
    <motion.div
      key={selected.label}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35 }}
      style={order !== undefined ? { order } : undefined}
      className="overflow-hidden w-full col-span-full"
    >
      <div className="mt-2 sm:mt-4 bg-white rounded-3xl p-6 shadow-card border border-border-light">
        <h3 className="font-jakarta font-bold text-xl text-text-dark mb-6">
          {selected.label}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {selected.images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => onSelectImage(src)}
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
  );
}

export default function ProductCategoryGallery({
  categories,
  title = 'Product Gallery',
}: ProductCategoryGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const cols = useGalleryCols();

  const selected = categories.find((cat) => cat.label === activeCategory);
  const activeIndex = categories.findIndex((cat) => cat.label === activeCategory);

  const toggleCategory = (label: string) => {
    setActiveCategory((current) => (current === label ? null : label));
  };

  // Place panel after the row that contains the active card:
  // cards use order i*2, panel uses odd order between row end and next row.
  const panelOrder =
    activeIndex >= 0 && cols > 0
      ? (Math.floor(activeIndex / cols) + 1) * cols * 2 - 1
      : undefined;

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

        {/* Mobile: horizontal scroll categories, expand panel directly below */}
        <div className="sm:hidden">
          <div className="-mx-6 px-6 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-4 w-max">
              {categories.map((category, i) => (
                <div key={category.label} className="w-[148px]">
                  <CategoryCard
                    category={category}
                    isActive={activeCategory === category.label}
                    index={i}
                    onToggle={() => toggleCategory(category.label)}
                  />
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {selected && (
              <div className="mt-4">
                <CategoryExpandPanel
                  selected={selected}
                  onSelectImage={setLightbox}
                />
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop / tablet: grid with expand panel under the active category row */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, i) => (
            <CategoryCard
              key={category.label}
              category={category}
              isActive={activeCategory === category.label}
              index={i}
              order={i * 2}
              onToggle={() => toggleCategory(category.label)}
            />
          ))}

          <AnimatePresence mode="wait">
            {selected && panelOrder !== undefined && (
              <CategoryExpandPanel
                selected={selected}
                onSelectImage={setLightbox}
                order={panelOrder}
              />
            )}
          </AnimatePresence>
        </div>
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
