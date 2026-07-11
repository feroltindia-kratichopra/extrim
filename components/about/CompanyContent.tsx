'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@/lib/data';

export default function CompanyContent() {
  return (
    <div className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Company overview */}
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
                src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="JD EXIM facility"
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
              Company Profile
            </span>
            <h2 className="font-jakarta font-bold text-3xl text-text-dark mt-3 mb-5">
              JD EXIM — A Name Built on Trust
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              JD EXIM is a registered merchant exporter based in Ahmedabad, Gujarat — India’s
              premier hub for agriculture, textiles, and packaging. We specialize in exporting
              premium-quality products across four core categories: Psyllium Products,
              Eco-Friendly Packaging, Gift Bags, and Garments.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Our business model is built on direct relationships with verified manufacturers,
              allowing us to offer competitive pricing, consistent quality, and reliable
              supply chains. We handle every aspect of the export process — from sourcing and
              quality inspection to documentation and logistics.
            </p>

            <div className="space-y-3">
              {[
                { icon: Building2, label: 'Business Type', value: 'Merchant Exporter' },
                { icon: Calendar, label: 'Established', value: '2009' },
                { icon: MapPin, label: 'Location', value: 'Ahmedabad, Gujarat, India' },
                { icon: Mail, label: 'Email', value: COMPANY.email },
                { icon: Phone, label: 'Phone', value: COMPANY.phone },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-green-pale flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-green-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-dark">{item.label}:</span>
                  <span className="text-sm text-text-muted">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* What we do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-jakarta font-bold text-2xl text-text-dark mb-6">Our Business Approach</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: 'Sourcing & Verification',
              desc: 'We identify and vet manufacturers across India, ensuring they meet our quality and compliance standards before onboarding them as partners.',
            },
            {
              title: 'Quality Assurance',
              desc: 'Every shipment undergoes rigorous quality inspection at the factory level, with pre-shipment checks and lab testing where applicable.',
            },
            {
              title: 'Export Documentation',
              desc: 'We handle all export paperwork — from IEC and certificates of origin to customs clearance and shipping documentation.',
            },
            {
              title: 'Logistics & Delivery',
              desc: 'Our logistics network covers air, sea, and land freight, with reliable partners ensuring timely delivery to 40+ countries.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 bg-white rounded-2xl p-6 shadow-card border border-border-light"
            >
              <CheckCircle2 className="w-6 h-6 text-green-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-jakarta font-bold text-text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infrastructure */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Building2, title: 'Office', desc: 'Headquartered in Ahmedabad with a dedicated team of export professionals.' },
            { icon: MapPin, title: 'Warehouse', desc: 'Partner warehouses for consolidation, repacking, and quality checks.' },
            { icon: Calendar, title: 'Operations', desc: 'Full-cycle export operations from order to delivery.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card border border-border-light text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-green-primary" />
              </div>
              <h3 className="font-jakarta font-bold text-text-dark mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
