import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import ProductDetail from '@/components/products/ProductDetail';
import { GIFT_BAG_IMAGES } from '@/lib/data';

export const metadata = {
  title: 'Gift Bags — JD EXIM',
  description: 'Premium handcrafted gift bags for every occasion. Custom branding and bulk orders available.',
};

export default function GiftBagsPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Gift Bags"
        subtitle="Elegant handcrafted gift bags for every occasion."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products' }, { label: 'Gift Bags' }]}
      />
      <ProductDetail
        name="Gift Bags"
        tagline="Elegant handcrafted gift bags for every occasion"
        image="/images/gifting/1.jpeg"
        images={GIFT_BAG_IMAGES}
        shortDesc="Premium-quality gift bags in a variety of designs, materials, and finishes — perfect for retail and gifting."
        features={[
          'Kraft Paper Gift Bags',
          'Luxury Gift Bags with Ribbon Handles',
          'Festive & Seasonal Designs',
          'Custom Branding Available',
        ]}
        highlights={['Handcrafted Quality', 'Custom Prints & Logos', 'Bulk Order Discounts', 'Fast Turnaround']}
        longDesc="Our gift bags combine craftsmanship, aesthetics, and functionality. From simple kraft paper bags to luxury designs with ribbon handles, foil stamping, and custom prints, we cater to retailers, corporates, and gifting brands. Our manufacturing partners use high-quality materials and attention to detail to produce gift bags that elevate the unboxing experience."
        applications={[
          'Retail packaging',
          'Corporate gifting',
          'Festive and seasonal gifting',
          'Wedding and event favors',
          'Brand promotional giveaways',
        ]}
        packaging={['Carton packs', 'Assorted designs available', 'Private label available']}
      />
    </PageWrapper>
  );
}
