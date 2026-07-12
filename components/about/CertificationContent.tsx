'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '@/lib/data';
import Image from 'next/image';

export default function CertificationContent() {
  return (
    <div className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="w-16 h-16 rounded-2xl bg-green-pale flex items-center justify-center mx-auto mb-5">
            <ShieldCheck className="w-8 h-8 text-blue-800" />
          </div>
          <h2 className="font-jakarta font-bold text-3xl text-text-dark mb-4">
            Our Certifications &amp; Compliance
          </h2>
          <p className="text-text-muted leading-relaxed">
            JD EXIM operates with full regulatory compliance and holds key certifications that
            validate our commitment to international trade standards. These credentials ensure
            our buyers receive products that meet the highest quality and safety benchmarks.
          </p>
        </motion.div>

        {/* Certification cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CERTIFICATIONS.slice(0, 3).map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all border border-border-light"
            >
              <div className="flex items-center gap-4 mb-4">
              <Image
                  src={cert.image}
                  alt={cert.name}
                  width={50}
                  height={50}
                  className="object-contain  w-auto  "
                />
           
              </div>
         
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 max-w-3xl gap-6 mb-16 mx-auto">
          {CERTIFICATIONS.slice(3).map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all border border-border-light"
            >
              <div className="flex items-center items-center justify-center gap-4 mb-4">
              <Image
                  src={cert.image}
                  alt={cert.name}
                  width={50}
                  height={50}
                  className="object-contain  w-auto  "
                />
           
              </div>
         
            </motion.div>
          ))}
        </div>

        {/* Compliance commitment */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-green-dark to-green-primary rounded-3xl p-10 text-white"
        >
          <h3 className="font-jakarta font-bold text-2xl mb-4">Our Commitment to Compliance</h3>
          <p className="text-white/80 leading-relaxed mb-6">
            At JD EXIM, compliance is not a checkbox — it’s a core part of our business philosophy.
            We ensure every product meets destination-country regulations, including labeling,
            packaging, and quality standards. Our team stays up-to-date with changing trade
            policies and import regulations across our key markets.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'IEC Registered Exporter',
              'GST Compliant Operations',
              'MSME Certified Business',
              'APEDA & FIEO Member',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
