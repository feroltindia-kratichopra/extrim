import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import ProductDetail from '@/components/products/ProductDetail';

export const metadata = {
  title: 'Garments — JD EXIM',
  description: 'High-quality garment exports from India. Cotton, denim, fashion apparel with OEM and private label.',
};

export default function GarmentsPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Garments"
        subtitle="Quality textile exports from India."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Garments' }]}
      />
      <ProductDetail
        name="Garments"
        tagline="Quality textile exports from India"
        image="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1200"
        shortDesc="High-quality garments manufactured in compliant facilities — from casual wear to premium fashion apparel."
        features={[
          'Cotton T-Shirts & Polo Shirts',
          'Denim & Casual Wear',
          'Women’s Fashion Apparel',
          'OEM & Private Label',
        ]}
        highlights={['OEKO-TEX Certified', 'Ethical Manufacturing', 'Custom Designs', 'Low MOQ Available']}
        longDesc="India is one of the world’s largest textile and garment producers, and JD EXIM leverages this expertise to deliver premium garments to global buyers. Our partner factories follow ethical manufacturing practices and hold certifications like OEKO-TEX. We offer OEM and private-label services, allowing buyers to build their own brands with custom designs, fabrics, and labels."
        applications={[
          'Retail fashion brands',
          'Private label apparel',
          'Corporate uniforms',
          'Promotional merchandise',
          'E-commerce fashion',
        ]}
        packaging={['Poly bag packing', 'Carton packing', 'Custom labeling and tagging']}
      />
    </PageWrapper>
  );
}
