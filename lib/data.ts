export const COMPANY = {
  name: 'JD EXIM',
  fullName: 'JD EXIM',
  tagline: 'Your Trusted Global Export Partner',
  description:
    'JD EXIM is a trusted Indian merchant exporter committed to delivering premium-quality products, ethical sourcing, competitive pricing, timely delivery, and long-term business partnerships worldwide.',
  address: 'Surat, Gujarat 395001, India',
  email: 'sales@jdexim.com',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  social: {
    linkedin: '#',
    facebook: '#',
    instagram: '#',
    twitter: '#',
    youtube: '#',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Company', href: '/about/company' },
      { label: 'Certification', href: '/about/certification' },
      { label: 'Key Persons', href: '/about/key-persons' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Psyllium Husk', href: '/products/psyllium-husk' },
      { label: 'Eco-Friendly Packaging', href: '/products/eco-friendly-packaging' },
      { label: 'Gift Bags', href: '/products/gift-bags' },
      { label: 'Garments', href: '/products/garments' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const PRODUCTS = [
  {
    slug: 'psyllium-husk',
    name: 'Psyllium Husk',
    tagline: 'Premium-grade natural dietary fiber from India',
    image:
      'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDesc:
      'Sourced from the finest farms in Gujarat, our psyllium husk meets stringent international pharmacopeia standards.',
    features: [
      'Psyllium Husk 85% – 99% Purity',
      'Psyllium Husk Powder',
      'Industrial Grade Psyllium',
      'Custom Mesh Sizes Available',
    ],
    highlights: ['ISO Certified Processing', 'FSSAI Approved', 'Moisture < 12%', 'Custom Packaging'],
  },
  {
    slug: 'eco-friendly-packaging',
    name: 'Eco-Friendly Packaging Products',
    tagline: 'Sustainable packaging for a greener planet',
    image:
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDesc:
      'Biodegradable and compostable packaging solutions crafted from recycled kraft paper and natural materials.',
    features: [
      'Kraft Paper Bags',
      'Biodegradable Mailers',
      'Compostable Food Packaging',
      'Custom Printed Eco Bags',
    ],
    highlights: ['100% Biodegradable', 'FSC Certified Material', 'Custom Sizes & Prints', 'BPA Free'],
  },
  {
    slug: 'gift-bags',
    name: 'Gift Bags',
    tagline: 'Elegant handcrafted gift bags for every occasion',
    image:
      'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDesc:
      'Premium-quality gift bags in a variety of designs, materials, and finishes — perfect for retail and gifting.',
    features: [
      'Kraft Paper Gift Bags',
      'Luxury Gift Bags with Ribbon Handles',
      'Festive & Seasonal Designs',
      'Custom Branding Available',
    ],
    highlights: ['Handcrafted Quality', 'Custom Prints & Logos', 'Bulk Order Discounts', 'Fast Turnaround'],
  },
  {
    slug: 'garments',
    name: 'Garments',
    tagline: 'Quality textile exports from India',
    image:
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDesc:
      'High-quality garments manufactured in compliant facilities — from casual wear to premium fashion apparel.',
    features: [
      'Cotton T-Shirts & Polo Shirts',
      'Denim & Casual Wear',
      'Women’s Fashion Apparel',
      'OEM & Private Label',
    ],
    highlights: ['OEKO-TEX Certified', 'Ethical Manufacturing', 'Custom Designs', 'Low MOQ Available'],
  },
];

export const SERVICES = [
  {
    icon: 'Ship',
    title: 'International Export Services',
    desc: 'End-to-end export management from sourcing to final delivery, ensuring seamless cross-border trade.',
  },
  {
    icon: 'Search',
    title: 'Sourcing Agent Solutions',
    desc: 'Reliable sourcing partners across India — we identify, vet, and connect you with verified manufacturers.',
  },
  {
    icon: 'Factory',
    title: 'OEM & Private Label Manufacturing',
    desc: 'Build your own brand with our white-label manufacturing capabilities across multiple product categories.',
  },
  {
    icon: 'FileText',
    title: 'Export Documentation & Logistics',
    desc: 'Complete export documentation, customs clearance, and logistics support for hassle-free shipping.',
  },
];

export const WHY_CHOOSE = [
  {
    icon: 'BadgeCheck',
    title: 'Verified Manufacturing Partners',
    desc: 'Every partner factory is audited and verified for quality, compliance, and ethical practices.',
  },
  {
    icon: 'Globe',
    title: 'International Quality Standards',
    desc: 'Our products meet global quality benchmarks including ISO, FSSAI, and destination-country regulations.',
  },
  {
    icon: 'TrendingDown',
    title: 'Competitive Pricing',
    desc: 'Direct-from-source sourcing ensures the best prices without compromising on quality.',
  },
  {
    icon: 'Truck',
    title: 'Worldwide Shipping',
    desc: 'Reliable logistics networks covering air, sea, and land freight to 40+ countries.',
  },
  {
    icon: 'Tags',
    title: 'Private Label & OEM Support',
    desc: 'Full white-label services — from custom packaging to branded product development.',
  },
  {
    icon: 'FileCheck',
    title: 'Complete Export Documentation',
    desc: 'We handle all export paperwork, certificates of origin, and compliance documentation.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'James Carter',
    company: 'Carter Distributors LLC',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    review:
      'JD EXIM has been our go-to sourcing partner for psyllium husk for over two years. The quality consistency and communication are exceptional.',
  },
  {
    name: 'Sophie Müller',
    company: 'Müller Naturprodukte GmbH',
    country: 'Germany',
    flag: '🇩🇪',
    rating: 5,
    review:
      'Their eco-friendly packaging products are top-notch. Timely delivery and excellent private-label support made our launch seamless.',
  },
  {
    name: 'Ahmed Al-Rashid',
    company: 'Al-Rashid Trading Co.',
    country: 'UAE',
    flag: '🇦🇪',
    rating: 5,
    review:
      'Professional, transparent, and reliable. JD EXIM handled all documentation and logistics flawlessly. Highly recommended.',
  },
  {
    name: 'Emily Watson',
    company: 'Watson Retail Group',
    country: 'United Kingdom',
    flag: '🇬🇧',
    rating: 5,
    review:
      'The gift bags exceeded our expectations. Beautiful craftsmanship and the custom branding was perfect for our retail chain.',
  },
  {
    name: 'Kenji Tanaka',
    company: 'Tanaka Imports K.K.',
    country: 'Japan',
    flag: '🇯🇵',
    rating: 5,
    review:
      'Outstanding garment quality with attention to detail. JD EXIM’s OEM service helped us launch our private label successfully.',
  },
  {
    name: 'Olivia Brown',
    company: 'Brown & Co. Pty Ltd',
    country: 'Australia',
    flag: '🇦🇺',
    rating: 5,
    review:
      'From first quote to final delivery, the entire process was smooth and professional. A trusted partner for long-term business.',
  },
];

export const CERTIFICATIONS = [
  {
    name: "FSSAI",
    image: "/images/certification/aadhar.jpeg",
  },
  {
    name: "APEDA",
    image: "/images/certification/DGFT.jpeg",
  },
  {
    name: "IEC",
    image: "/images/certification/MII.jpeg",
  },
  {
    name: "MSME",
    image: "/images/certification/MSME.jpeg",
  },
  {
    name: "GST",
    image: "/images/certification/STC.jpeg",
  },

];

export const STATS = [
  { value: 40, suffix: '+', label: 'Countries Served' },
  { value: 4, suffix: '', label: 'Product Categories' },
  { value: 120, suffix: '+', label: 'Manufacturing Partners' },
];

export const KEY_PERSONS = [
  {
    name: 'Jay Chotaliya',
    role: 'Founder & Managing Director',
    bio: 'With over 20 years in international trade, Jignesh leads JD EXIM’s strategic vision and global partnerships.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Dipak Gaddam',
    role: 'Founder & Managing Director',
    bio: 'Deepak oversees export operations across 40+ countries, ensuring compliance and seamless logistics.',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600',
  },

];

export const GALLERY_IMAGES = [
  { src: 'https://images.pexels.com/photos/2240207/pexels-photo-2240207.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cargo ship at port', category: 'Logistics' },
  { src: 'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Shipping containers', category: 'Logistics' },
  { src: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Psyllium products', category: 'Products' },
  { src: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Eco-friendly packaging', category: 'Products' },
  { src: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Gift bags display', category: 'Products' },
  { src: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Garments rack', category: 'Products' },
  { src: 'https://images.pexels.com/photos/808836/pexels-photo-808836.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Warehouse storage', category: 'Infrastructure' },
  { src: 'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Port crane loading', category: 'Logistics' },
  { src: 'https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Textile manufacturing', category: 'Infrastructure' },
  { src: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cargo plane loading', category: 'Logistics' },
  { src: 'https://images.pexels.com/photos/5998148/pexels-photo-5998148.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Quality inspection', category: 'Infrastructure' },
  { src: 'https://images.pexels.com/photos/6214479/pexels-photo-6214479.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Retail packaging', category: 'Products' },
];
