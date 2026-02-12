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

const projects = [
  {
    category: "Fintech",
    imageSrc: "/images/maji-fintech.jpg",
    logoSrc: "/images/maji-logo.svg",
    description:
      "Maji is a UK financial wellbeing provider that makes saving, spending, and planning money simpler for employees and employers.",
    number: "01",
  },
  {
    category: "EV Charging Software",
    imageSrc: "/images/rightcharge-main.jpg",
    logoSrc: "/images/rightcharge-logo.svg",
    description:
      "An EV charging management platform that automates payments, reimbursements, and reporting for fleets.",
    number: "02",
  },
  {
    category: "ERP Management",
    imageSrc: "/images/naseni.webp",
    logoSrc: "/images/naseni-logo.svg",
    description:
      "A Nigerian government agency driving innovation through engineering, manufacturing, and applied research.",
    number: "03",
  },
];
export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Codezilla',
    url: 'https://codezilla.io',
    logo: 'https://codezilla.io/images/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/codezilla',
      'https://twitter.com/codezilla'
    ],
    description: 'Codezilla delivers executive precision in enterprise software development, AI integration, and scalable system architecture.'
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSlider />
      <LogoMarquee />
      <PhilosophyVideo />
      <ServicesGrid />
      <WorkCarousel projects={projects} />
      <ProcessGrid />
      <TestimonialCarousel />
      <ProductGrid />
      <CTASection />
    </main>
  );
}
