import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import ProductDetail from '@/components/products/ProductDetail';

export const metadata = {
  title: 'Psyllium Husk — JD EXIM',
  description: 'Premium-grade psyllium husk from Gujarat, India. 85%–99% purity, pharmacopeia standards.',
};

export default function PsylliumHuskPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Psyllium Husk"
        subtitle="Premium-grade natural dietary fiber from India’s finest farms."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Psyllium Husk' }]}
      />
      <ProductDetail
        name="Psyllium Husk"
        tagline="Premium-grade natural dietary fiber from India"
        image="https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=1200"
        shortDesc="Sourced from the finest farms in Gujarat, our psyllium husk meets stringent international pharmacopeia standards."
        features={[
          'Psyllium Husk 85% – 99% Purity',
          'Psyllium Husk Powder',
          'Industrial Grade Psyllium',
          'Custom Mesh Sizes Available',
        ]}
        highlights={['ISO Certified Processing', 'FSSAI Approved', 'Moisture < 12%', 'Custom Packaging']}
        longDesc="Gujarat, India is the world’s largest producer of psyllium (Plantago ovata), and JD EXIM sources directly from the region’s best processing facilities. Our psyllium husk is available in purities ranging from 85% to 99%, with various mesh sizes to meet pharmaceutical, food, and industrial applications. Every batch undergoes lab testing for purity, microbial limits, and heavy metals before shipment."
        applications={[
          'Pharmaceutical formulations',
          'Dietary fiber supplements',
          'Food and beverage fortification',
          'Animal feed additives',
          'Industrial applications',
        ]}
        packaging={['25kg multi-wall paper bags', 'Custom packaging on request', 'Private label available']}
      />
    </PageWrapper>
  );
}
