import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import GalleryContent from '@/components/gallery/GalleryContent';

export const metadata = {
  title: 'Gallery — JD EXIM',
  description: 'View our gallery showcasing logistics, products, and infrastructure.',
};

export default function GalleryPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Gallery"
        subtitle="A glimpse into our products, logistics, and infrastructure."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
      />
      <GalleryContent />
    </PageWrapper>
  );
}
