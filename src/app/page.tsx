import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import StatsSection from '@/components/StatsSection';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <StatsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
