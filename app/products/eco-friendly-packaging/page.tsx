import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import ProductDetail from '@/components/products/ProductDetail';
import { ECO_PACKAGING_CATEGORIES } from '@/lib/data';

export const metadata = {
  title: 'Eco-Friendly Packaging — JD EXIM',
  description: 'Biodegradable and compostable packaging solutions from recycled kraft paper and natural materials.',
};

export default function EcoFriendlyPackagingPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Eco-Friendly Packaging"
        subtitle="Sustainable packaging for a greener planet."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products' }, { label: 'Eco-Friendly Packaging' }]}
      />
      <ProductDetail
        name="Eco-Friendly Packaging Products"
        tagline="Sustainable packaging for a greener planet"
        image="/images/packag imges/takeaways/main.jpg"
        imageCategories={ECO_PACKAGING_CATEGORIES}
        shortDesc="Biodegradable and compostable packaging solutions crafted from recycled kraft paper and natural materials."
        features={[
          'Kraft Paper Bags',
          'Biodegradable Mailers',
          'Compostable Food Packaging',
          'Custom Printed Eco Bags',
        ]}
        highlights={['100% Biodegradable', 'FSC Certified Material', 'Custom Sizes & Prints', 'BPA Free']}
        longDesc="Our eco-friendly packaging products are designed to reduce environmental impact without compromising on quality or functionality. Made from recycled kraft paper, biodegradable films, and compostable materials, our packaging solutions are ideal for brands looking to adopt sustainable practices. We offer custom printing, sizing, and private-label options to meet diverse retail and industrial needs."
        applications={[
          'Retail product packaging',
          'Food and beverage packaging',
          'E-commerce mailers',
          'Restaurant and takeaway packaging',
          'Corporate gifting packaging',
        ]}
        packaging={['Carton packs', 'Custom quantities', 'Private label available']}
      />
  
    </PageWrapper>
  );
}
