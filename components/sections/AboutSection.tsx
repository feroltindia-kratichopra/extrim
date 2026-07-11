'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Target, Eye } from 'lucide-react';
import { STATS } from '@/lib/data';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-card">
              <Image
                src="https://images.pexels.com/photos/36771190/pexels-photo-36771190.jpeg"
                alt="JD EXIM warehouse"
                fill
                className="object-cover"
              />
            </div>
            
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-poppins font-semibold text-sm uppercase tracking-wider">
              About JD EXIM
            </span>
            <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-text-dark mt-3 mb-5 leading-tight">
            JD EXIM, a global export brand of J&D FutureTech
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
            JD EXIM is a global export brand of J&D FutureTech, provides reliable export solutions in agriculture, eco-friendly packaging, gift bags, and apparel. We are dedicated to supplying premium products through ethical sourcing, rigorous quality assurance, and seamless logistics. Our mission is to connect international buyers with trusted Indian manufacturers while creating sustainable value through quality, transparency, and long-term business relationships.
            </p>


     

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-green-primary font-poppins font-semibold hover:gap-3 transition-all"
            >
              Know More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
