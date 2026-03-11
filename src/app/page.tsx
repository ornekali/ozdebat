import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesPreview from '@/components/ServicesPreview';
import StatsSection from '@/components/StatsSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <StatsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
