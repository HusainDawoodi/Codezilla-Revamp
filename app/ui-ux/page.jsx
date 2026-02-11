import HeroSection from "@/components/ui-ux/HeroSection";
import CapabilitiesMatrix from "@/components/ui-ux/CapabilitiesMatrix";
import TechStack from "@/components/ui-ux/TechStack";
import ProcessSection from "@/components/ui-ux/ProcessSection";
import ServicesSection from "@/components/ui-ux/ServicesSection";
import ImpactSection from "@/components/ui-ux/ImpactSection";
import PortfolioSection from "@/components/ui-ux/PortfolioSection";
import BenefitsSection from "@/components/ui-ux/BenefitsSection";
import AccessibilitySection from "@/components/ui-ux/AccessibilitySection";
import ContactSection from "@/components/ui-ux/ContactSection";
import WorkCarousel from "@/components/WorkCarousel";

export const metadata = {
  title: "UI/UX Design Services - Codezilla",
  description: "Codezilla - Executive Precision in UI/UX Design",
};

const uiUxProjects = [
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

export default function UIUXPage() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <CapabilitiesMatrix />
      <TechStack />
      <ProcessSection />
      <ServicesSection />
      <ImpactSection />
      <WorkCarousel projects={uiUxProjects} />
      {/* <PortfolioSection /> */}
      <BenefitsSection />
      {/* <AccessibilitySection /> */}
      <ContactSection />
    </main>
  );
}
