import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import CertificationContent from '@/components/about/CertificationContent';


export const metadata = {
  title: 'Certifications — JD EXIM',
  description: 'View JD EXIM’s certifications and compliance credentials.',
};

export default function CertificationPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Certifications"
        subtitle="Our credentials reflect our commitment to international quality and compliance."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }, { label: 'Certification' }]}
      />
      <CertificationContent />

    </PageWrapper>
  );
}
