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

export default function UIUXPage() {
    return (
        <main className="bg-white min-h-screen">
            <HeroSection />
            <CapabilitiesMatrix />
            <TechStack />
            <ProcessSection />
            <ServicesSection />
            <ImpactSection />
            <WorkCarousel />
            {/* <PortfolioSection /> */}
            <BenefitsSection />
            <AccessibilitySection />
            <ContactSection />
        </main>
    );
}
