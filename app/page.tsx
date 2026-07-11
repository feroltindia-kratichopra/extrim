import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProductsSection from '@/components/sections/ProductsSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import CTASection from '@/components/layout/CTASection';

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CertificationsSection />
      <CTASection />
    </PageWrapper>
  );
}
