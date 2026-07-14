'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { KEY_PERSONS } from '@/lib/data';

export default function KeyPersonsContent() {
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
          <span className="text-gold font-poppins font-semibold text-sm uppercase tracking-wider">
            Leadership Team
          </span>
          <h2 className="font-jakarta font-bold text-3xl text-text-dark mt-3 mb-4">
            Meet the People Behind JD EXIM
          </h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-text-muted leading-relaxed">
            Our leadership team brings decades of combined experience in international trade,
            sourcing, quality assurance, and export logistics. Together, they drive JD EXIM’s
            mission to connect India’s best with the world.
          </p>
        </motion.div>

        {/* Key persons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {KEY_PERSONS.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-border-light"
            >
              <div className="relative h-64 w-full overflow-hidden flex items-center justify-center">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-center transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-jakarta font-bold text-lg text-text-dark mb-1">{person.name}</h3>
                <p className="text-sm text-gold font-poppins font-medium mb-3">{person.role}</p>
                <p className="text-sm text-text-muted leading-relaxed mb-4">{person.bio}</p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-green-pale hover:bg-green-primary flex items-center justify-center transition-colors"
                    aria-label={`${person.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4 text-green-primary hover:text-white transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-green-pale hover:bg-green-primary flex items-center justify-center transition-colors"
                    aria-label={`${person.name} Email`}
                  >
                    <Mail className="w-4 h-4 text-green-primary hover:text-white transition-colors" />
                  </a>
                  <div
                 
                    className="w-9 h-9 rounded-full bg-green-pale hover:bg-green-primary flex items-center justify-center transition-colors"
                    aria-label={`${person.name} Phone`}
                  >
                    <Phone className="w-4 h-4 text-green-primary hover:text-white transition-colors" />
                  </div><span className="text-sm text-text-muted flex items-center gap-2">{person.phone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
