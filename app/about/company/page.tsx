import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import CompanyContent from '@/components/about/CompanyContent';
import WhyChooseSection from '@/components/sections/WhyChooseSection';

export const metadata = {
  title: 'Company — JD EXIM',
  description: 'Learn about JD EXIM’s company profile, business approach, and operations.',
};

export default function CompanyPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Our Company"
        subtitle="A registered merchant exporter based in Ahmedabad, Gujarat — India’s premier export hub."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }, { label: 'Company' }]}
      />
      <CompanyContent />
      <WhyChooseSection/>
      
    </PageWrapper>
  );
}
