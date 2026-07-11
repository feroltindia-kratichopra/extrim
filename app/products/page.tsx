import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import ProductsContent from '@/components/products/ProductsContent';

export const metadata = {
  title: 'Products — JD EXIM',
  description: 'Explore our export categories: Psyllium Husk, Eco-Friendly Packaging, Gift Bags, and Garments.',
};

export default function ProductsPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Our Products"
        subtitle="Premium products sourced from India, crafted for global markets."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
      />
      <ProductsContent />
    </PageWrapper>
  );
}
