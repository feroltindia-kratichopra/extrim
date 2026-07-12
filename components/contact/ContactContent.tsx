'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY, PRODUCTS } from '@/lib/data';

export default function ContactContent() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', company: '', country: '', product: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-poppins font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="font-jakarta font-bold text-3xl text-text-dark mt-3 mb-5">
              Let&apos;s Start a Conversation
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              Whether you&apos;re looking for a quote, product samples, or private-label
              manufacturing, our team is ready to help. Reach out and we&apos;ll respond within
              24 hours.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: MapPin, label: 'Address', value: COMPANY.address },
                { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: Phone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: COMPANY.phone,
                  href: `https://wa.me/${COMPANY.whatsapp}`,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-green-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-jakarta font-bold text-text-dark">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-text-muted hover:text-green-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-text-muted">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden shadow-card border border-border-light mt-4 w-full">
              <div className="relative w-full aspect-[4/3] sm:aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.18800900166!2d72.65747318239129!3d21.159120355102836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1783865370085!5m2!1sen!2sin"
                  title="JD EXIM location on Google Maps"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-card border border-border-light"
          >
            <h3 className="font-jakarta font-bold text-2xl text-text-dark mb-6">Request a Quote</h3>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-green-pale text-green-primary rounded-xl px-4 py-3 mb-5"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-medium">Thank you! We&apos;ll get back to you within 24 hours.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-border-light bg-bg-section focus:outline-none focus:ring-2 focus:ring-green-primary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1.5">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-border-light bg-bg-section focus:outline-none focus:ring-2 focus:ring-green-primary text-sm"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1.5">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-border-light bg-bg-section focus:outline-none focus:ring-2 focus:ring-green-primary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1.5">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-border-light bg-bg-section focus:outline-none focus:ring-2 focus:ring-green-primary text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1.5">Product of Interest</label>
                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-border-light bg-bg-section focus:outline-none focus:ring-2 focus:ring-green-primary text-sm"
                >
                  <option value="">Select a product</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.slug} value={p.name}>{p.name}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1.5">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl border border-border-light bg-bg-section focus:outline-none focus:ring-2 focus:ring-green-primary text-sm resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-poppins font-semibold px-6 py-3.5 rounded-full transition-all shadow-gold"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          
        </div>
      </div>
    </div>
  );
}
