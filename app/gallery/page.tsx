import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import GalleryContent from '@/components/gallery/GalleryContent';

export const metadata = {
  title: 'Gallery — JD EXIM',
  description: 'Browse our product gallery — psyllium husk, eco-friendly packaging, gift bags, and more.',
};

export default function GalleryPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Gallery"
        subtitle="Browse our full product range — psyllium husk, eco-friendly packaging, gift bags, and more."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
      />
      <GalleryContent />
    </PageWrapper>
  );
}
