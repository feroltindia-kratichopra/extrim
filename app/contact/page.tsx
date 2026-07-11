import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import ContactContent from '@/components/contact/ContactContent';

export const metadata = {
  title: 'Contact — JD EXIM',
  description: 'Get in touch with JD EXIM for quotes, product inquiries, and export partnerships.',
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for quotes, samples, or partnership opportunities."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />
      <ContactContent />
    </PageWrapper>
  );
}
