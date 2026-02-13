import Image from "next/image";
import DiscoveryHero from "@/components/discovery/DiscoveryHero";
import DiscoveryMethodology from "@/components/discovery/DiscoveryMethodology";
import DiscoveryCapabilities from "@/components/discovery/DiscoveryCapabilities";
import DiscoveryWorkflow from "@/components/discovery/DiscoveryWorkflow";
import DiscoveryImpact from "@/components/discovery/DiscoveryImpact";
import WorkCarousel from "@/components/WorkCarousel";
import TechStackMarquee from "@/components/web-development/TechStackMarquee";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQSection from "@/components/web-development/FAQSection";
import CTASection from "@/components/CTASection";
import { DISCOVERY_FAQS } from "@/constants/discovery";

export const metadata = {
    title: "Product Discovery Services - Codezilla | From Ideas to Direction",
    description: "Transform raw ideas into meaningful product direction by validating user needs and business goals. We ensure your digital solutions are designed to flourish.",
    keywords: ["product discovery", "product strategy", "user research", "market research", "product validation", "MVP planning", "Codezilla"],
};

export default function DiscoveryPage() {
    return (
        <main className="min-h-screen bg-obsidian">
            <DiscoveryHero />
            <DiscoveryMethodology />
            <DiscoveryCapabilities />
            <DiscoveryWorkflow />
            <DiscoveryImpact />

            <FAQSection faqs={DISCOVERY_FAQS} />
            <CTASection />
        </main>
    );
}
