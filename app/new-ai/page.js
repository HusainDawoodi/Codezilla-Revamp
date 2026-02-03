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

export const metadata = {
    title: "Codezilla - AI Optimization",
    description: "Codezilla - Executive Precision in AI",
};

export default function NewAIPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroSlider />
            <LogoMarquee />
            <PhilosophyVideo />
            <ServicesGrid />
            <WorkCarousel />
            <ProcessGrid />
            <TestimonialCarousel />
            <ProductGrid />
            <CTASection />
            <Footer />
        </main>
    );
}
