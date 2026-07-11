import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import AboutContent from '@/components/about/AboutContent';

export const metadata = {
  title: 'About JD EXIM — Trusted Indian Merchant Exporter',
  description: 'Learn about JD EXIM, a trusted Indian merchant exporter committed to premium quality and global trade.',
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="About JD EXIM"
        subtitle="A trusted merchant exporter connecting India’s finest products with the world."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />
      <AboutContent />
    </PageWrapper>
  );
}
