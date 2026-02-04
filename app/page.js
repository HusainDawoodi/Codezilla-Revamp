import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import LogoMarquee from '@/components/LogoMarquee';
import PhilosophyVideo from '@/components/PhilosophyVideo';
import ServicesGrid from '@/components/ServicesGrid';
import WorkCarousel from '@/components/WorkCarousel';
import ProcessGrid from '@/components/ProcessGrid';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ProductGrid from '@/components/ProductGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">

      <HeroSlider />
      <LogoMarquee />
      <PhilosophyVideo />
      <ServicesGrid />
      <WorkCarousel />
      <ProcessGrid />
      <TestimonialCarousel />
      <ProductGrid />
      <CTASection />
    </main>
  );
}
