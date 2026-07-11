import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import KeyPersonsContent from '@/components/about/KeyPersonsContent';
import CTASection from '@/components/layout/CTASection';

export const metadata = {
  title: 'Key Persons — JD EXIM',
  description: 'Meet the leadership team behind JD EXIM.',
};

export default function KeyPersonsPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Key Persons"
        subtitle="The experienced leadership team driving JD EXIM’s global mission."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Key Persons' }]}
      />
      <KeyPersonsContent />
      <CTASection />
    </PageWrapper>
  );
}
