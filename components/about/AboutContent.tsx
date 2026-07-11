'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, Handshake, ArrowRight } from 'lucide-react';
import { STATS } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-card">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="JD EXIM team"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-poppins font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-jakarta font-bold text-3xl text-text-dark mt-3 mb-5">
              Building Bridges Between India and the World
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Founded with a vision to connect India’s finest manufacturers with global markets,
              JD EXIM has grown into a trusted merchant exporter serving 40+ countries. We
              specialize in sourcing, quality assurance, and seamless export logistics across
              multiple product categories.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Our commitment to ethical sourcing, competitive pricing, and timely delivery has
              earned us the trust of buyers across the USA, UK, Europe, Australia, UAE, Japan,
              and beyond. We believe in building long-term partnerships grounded in transparency
              and mutual growth.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-border-light pt-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-jakarta font-bold text-2xl text-green-primary">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-xs text-text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-card border border-border-light"
          >
            <div className="w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-green-primary" />
            </div>
            <h3 className="font-jakarta font-bold text-xl text-text-dark mb-3">Our Mission</h3>
            <p className="text-text-muted leading-relaxed">
              To deliver premium-quality Indian products to global markets with integrity,
              reliability, and a commitment to exceeding customer expectations at every step
              of the export journey.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-card border border-border-light"
          >
            <div className="w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-green-primary" />
            </div>
            <h3 className="font-jakarta font-bold text-xl text-text-dark mb-3">Our Vision</h3>
            <p className="text-text-muted leading-relaxed">
              To become the most trusted and preferred export partner globally, recognized for
              quality, transparency, and the ability to connect India’s best manufacturers with
              international buyers.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-gold font-poppins font-semibold text-sm uppercase tracking-wider">
            What Drives Us
          </span>
          <h2 className="font-jakarta font-bold text-3xl text-text-dark mt-3 mb-4">Our Core Values</h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Award, title: 'Quality First', desc: 'Every product meets international quality standards before it ships.' },
            { icon: Handshake, title: 'Integrity', desc: 'Transparent dealings and honest communication with every partner.' },
            { icon: Globe, title: 'Global Mindset', desc: 'We think globally, adapting to diverse market requirements.' },
            { icon: Users, title: 'Partnership', desc: 'We build long-term relationships, not one-time transactions.' },
          ].map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border-light text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center mx-auto mb-4">
                <val.icon className="w-6 h-6 text-green-primary" />
              </div>
              <h3 className="font-jakarta font-bold text-text-dark mb-2">{val.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Sub-page links */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {[
            { label: 'Company', href: '/about/company', desc: 'Learn about our company structure and journey.' },
            { label: 'Certification', href: '/about/certification', desc: 'View our certifications and compliance details.' },
            { label: 'Key Persons', href: '/about/key-persons', desc: 'Meet the leadership team behind JD EXIM.' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all border border-border-light"
            >
              <h3 className="font-jakarta font-bold text-lg text-text-dark mb-2 group-hover:text-green-primary transition-colors">
                {link.label}
              </h3>
              <p className="text-sm text-text-muted mb-3">{link.desc}</p>
              <span className="inline-flex items-center gap-1 text-green-primary text-sm font-poppins font-semibold group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
