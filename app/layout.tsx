import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins', display: 'swap' });

export const metadata: Metadata = {
  title: 'JD EXIM — Trusted Indian Merchant Exporter | Premium Global Trade',
  description:
    'JD EXIM is a trusted Indian merchant exporter specializing in Psyllium Products, Eco-Friendly Packaging, Gift Bags, and Garments. Serving buyers across the USA, UK, Europe, Australia, UAE, Japan, and worldwide.',
  keywords: [
    'JD EXIM',
    'Indian exporter',
    'merchant exporter India',
    'psyllium husk exporter',
    'eco-friendly packaging',
    'gift bags export',
    'garments export India',
    'global trade',
    'OEM private label India',
  ],
  openGraph: {
    title: 'JD EXIM — Trusted Indian Merchant Exporter',
    description: 'Premium global export partner from India. Psyllium, Packaging, Gift Bags, Garments.',
    type: 'website',
    images: [{ url: '/images/logo/image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/images/logo/image.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
