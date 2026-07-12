export const COMPANY = {
  name: 'JD EXIM',
  fullName: 'JD EXIM',
  tagline: 'Your Trusted Global Export Partner',
  description:
    'JD EXIM is a trusted Indian merchant exporter committed to delivering premium-quality products, ethical sourcing, competitive pricing, timely delivery, and long-term business partnerships worldwide.',
  address: 'Surat, Gujarat 395001, India',
  email: 'sales@jdexim.com',
  phone: '+91  90544 07745',
  whatsapp: '90544 07745',
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
  
    children: [
      { label: 'Company', href: '/about/company' },
      { label: 'Certification', href: '/about/certification' },
      { label: 'Key Persons', href: '/about/key-persons' },
    ],
  },
  {
    label: 'Products',
    children: [
      { label: 'Psyllium Husk', href: '/products/psyllium-husk' },
      { label: 'Eco-Friendly Packaging', href: '/products/eco-friendly-packaging' },
      { label: 'Gift Bags', href: '/products/gift-bags' },

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
      '/images/seeds/5.jpeg',
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
      '/images/packag imges/takeaways/main.jpg',
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
      '/images/gifting/1.jpeg',
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

];

export const PSYLLIUM_HUSK_IMAGES = [
  '/images/seeds/1.jpeg',
  '/images/seeds/2.jpeg',
  '/images/seeds/3.jpeg',
  '/images/seeds/4.png',
  '/images/seeds/5.jpeg',
];

export const GIFT_BAG_IMAGES = [
  '/images/gifting/1.jpeg',
  '/images/gifting/2.jpeg',
  '/images/gifting/3.jpeg',
  '/images/gifting/4.jpeg',
  '/images/gifting/5.jpeg',
  '/images/gifting/6.jpeg',
  '/images/gifting/7.jpeg',
  '/images/gifting/8.jpeg',
  '/images/gifting/9.jpeg',
  '/images/gifting/10.jpeg',
  '/images/gifting/11.jpeg',
  '/images/gifting/12.jpeg',
  '/images/gifting/13.jpeg',
  '/images/gifting/14.jpeg',
  '/images/gifting/15.jpeg',
];

const PACKAGING_BASE = '/images/packag imges';

export const ECO_PACKAGING_CATEGORIES = [
  {
    label: 'Boxes',
    mainImage: `${PACKAGING_BASE}/boxes/Main.webp`,
    images: [
      `${PACKAGING_BASE}/boxes/13x13x1.5-generic-large-pizza-box-brown-box-800x800_250x250_2-removebg-preview.png`,
      `${PACKAGING_BASE}/boxes/burger-box-1632372804-6005516-removebg-preview.png`,
      `${PACKAGING_BASE}/boxes/creative-kraft-paper-sandwich-box-eco-friendly-copy-removebg-preview.png`,
      `${PACKAGING_BASE}/boxes/Lunch-Box-Medium.png`,
      `${PACKAGING_BASE}/boxes/Medium-4.png`,
      `${PACKAGING_BASE}/boxes/Medium-5.png`,
      `${PACKAGING_BASE}/boxes/WhatsApp_Image_2023-01-21_at_5.44.31_PM-removebg-preview.png`,
    ],
  },
  {
    label: 'Cups',
    mainImage: `${PACKAGING_BASE}/cups/main.webp`,
    images: [
      `${PACKAGING_BASE}/cups/3000176877.png`,
      `${PACKAGING_BASE}/cups/3000176882-550x550.png`,
      `${PACKAGING_BASE}/cups/3000176892.png`,
      `${PACKAGING_BASE}/cups/3417752558-removebg-preview.png`,
      `${PACKAGING_BASE}/cups/525f508a21f0b1b-removebg-preview.png`,
    ],
  },
  {
    label: 'Cup Lids',
    mainImage: `${PACKAGING_BASE}/cup lids/main.jpg`,
    images: [
      `${PACKAGING_BASE}/cup lids/102.png`,
      `${PACKAGING_BASE}/cup lids/170ea1_0f2e8594afa0475eb52a0dcdbab9eb9e_mv2.jpg`,
      `${PACKAGING_BASE}/cup lids/330-paper-lid-with-straw-cut-1000x1000-removebg-preview.png`,
      `${PACKAGING_BASE}/cup lids/Medium-removebg-preview.png`,
    ],
  },
  {
    label: 'Containers',
    mainImage: `${PACKAGING_BASE}/container/main.jpg`,
    images: [
      `${PACKAGING_BASE}/container/41Lc1KI8J4L._AC_SS450_.jpg`,
      `${PACKAGING_BASE}/container/Ha532b3d1a8a24fd484d90eea141d80ba9_1445x.webp`,
      `${PACKAGING_BASE}/container/Paper-Salad-Bowls-1.jpg`,
      `${PACKAGING_BASE}/container/Sugarcane-Bagasse-Constarch-Biodegradable-Disposable-Take-Away-Food-Container.jpg`,
    ],
  },
  {
    label: 'Takeaways',
    mainImage: `${PACKAGING_BASE}/takeaways/main.jpg`,
    images: [
      `${PACKAGING_BASE}/takeaways/ALRB-1000ml_2_800x-removebg-preview.png`,
      `${PACKAGING_BASE}/takeaways/ALRC-1000ml_1_800x-removebg-preview.png`,
      `${PACKAGING_BASE}/takeaways/ALRC-1000ml_3_800x-removebg-preview.png`,
      `${PACKAGING_BASE}/takeaways/Lid-ALRB-500ml_1_1800x-removebg-preview.png`,
      `${PACKAGING_BASE}/takeaways/Lid-ALRC-500-650ml_1_800x-removebg-preview.png`,
      `${PACKAGING_BASE}/takeaways/ZPBW002_2_-550x550-removebg-preview.png`,
    ],
  },
  {
    label: 'Tableware',
    mainImage: `${PACKAGING_BASE}/Tableware/main.jpg`,
    images: [
      `${PACKAGING_BASE}/Tableware/24.png`,
      `${PACKAGING_BASE}/Tableware/3cp_640-removebg-preview.png`,
      `${PACKAGING_BASE}/Tableware/450-ml-Hamburger-Box-1-removebg-preview.png`,
      `${PACKAGING_BASE}/Tableware/4cptray-4-removebg-preview.png`,
      `${PACKAGING_BASE}/Tableware/51iGO9Qo-UL-removebg-preview.png`,
      `${PACKAGING_BASE}/Tableware/68.png`,
      `${PACKAGING_BASE}/Tableware/71LdkqEd9tL._SL1500_-removebg-preview.png`,
      `${PACKAGING_BASE}/Tableware/8cptray-2-removebg-preview.png`,
    ],
  },
  {
    label: 'Wooden Cutlery',
    mainImage: `${PACKAGING_BASE}/wooden cutlury/main.jpeg`,
    images: [
      `${PACKAGING_BASE}/wooden cutlury/180-x-1-50mm-eco-friendly-disposable-hard-wooden-stirrer-for-soft-and-hard-drinks-366-removebg-preview-300x300.png`,
      `${PACKAGING_BASE}/wooden cutlury/chop-sticks-500x500-removebg-preview-1.png`,
      `${PACKAGING_BASE}/wooden cutlury/NewProject_9-removebg-preview.png`,
      `${PACKAGING_BASE}/wooden cutlury/W1_1-removebg-preview-1.png`,
    ],
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
    image: '/images/key-persons/jay.jpeg',
  },
  {
    name: 'Dipak Gaddam',
    role: 'Founder & Managing Director',
    bio: 'Deepak oversees export operations across 40+ countries, ensuring compliance and seamless logistics.',
    image: '/images/key-persons/dipak.jpeg',
  },

];

export type GalleryImage = {
  src: string;
  alt: string;
  category: 'Products' | 'Logistics' | 'Infrastructure';
  product?: string;
};

export const PRODUCT_GALLERY_IMAGES: GalleryImage[] = [
  ...PSYLLIUM_HUSK_IMAGES.map((src, i) => ({
    src,
    alt: `Psyllium Husk ${i + 1}`,
    category: 'Products' as const,
    product: 'Psyllium Husk',
  })),
  ...GIFT_BAG_IMAGES.map((src, i) => ({
    src,
    alt: `Gift Bags ${i + 1}`,
    category: 'Products' as const,
    product: 'Gift Bags',
  })),
  ...ECO_PACKAGING_CATEGORIES.flatMap((cat) => [
    {
      src: cat.mainImage,
      alt: `${cat.label} — Eco-Friendly Packaging`,
      category: 'Products' as const,
      product: 'Eco-Friendly Packaging',
    },
    ...cat.images.map((src, i) => ({
      src,
      alt: `${cat.label} ${i + 1}`,
      category: 'Products' as const,
      product: 'Eco-Friendly Packaging',
    })),
  ]),
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: 'https://images.pexels.com/photos/2240207/pexels-photo-2240207.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cargo ship at port', category: 'Logistics' },
  { src: 'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Shipping containers', category: 'Logistics' },
  { src: 'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Port crane loading', category: 'Logistics' },
  { src: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cargo plane loading', category: 'Logistics' },
  { src: 'https://images.pexels.com/photos/808836/pexels-photo-808836.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Warehouse storage', category: 'Infrastructure' },
  { src: 'https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Textile manufacturing', category: 'Infrastructure' },
  { src: 'https://images.pexels.com/photos/5998148/pexels-photo-5998148.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Quality inspection', category: 'Infrastructure' },
  ...PRODUCT_GALLERY_IMAGES,
];
