import ArchitectureHero from "@/components/architecture/ArchitectureHero";
import ArchitectureExpertise from "@/components/architecture/ArchitectureExpertise";
import ArchitectureServices from "@/components/architecture/ArchitectureServices";
import ArchitectureROI from "@/components/architecture/ArchitectureROI";
import ArchitectureProcess from "@/components/architecture/ArchitectureProcess";
import ContactSection from "@/components/ui-ux/ContactSection";

export const metadata = {
    title: "Software Architecture Services | Codezilla",
    description:
        "The strategic alignment of technological frameworks with core business objectives. We prioritize the creation of resilient, high-performing systems that minimize technical debt.",
    keywords:
        "software architecture, system design, cloud architecture, microservices, technical architecture, enterprise solutions",
    openGraph: {
        title: "Software Architecture Services | Codezilla",
        description:
            "Strategic alignment of technological frameworks with business objectives. Resilient, high-performing systems.",
        type: "website",
    },
};

export default function SoftwareArchitecturePage() {
    return (
        <main>
            <ArchitectureHero />
            <ArchitectureExpertise />
            <ArchitectureServices />
            <ArchitectureROI />
            <ArchitectureProcess />
            <ContactSection />
        </main>
    );
}
