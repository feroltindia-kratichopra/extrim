import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProductsSection from '@/components/sections/ProductsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';


export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CertificationsSection />
    </PageWrapper>
  );
}
