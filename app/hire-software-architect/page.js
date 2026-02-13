import ArchitectHero from "@/components/architect/ArchitectHero";
import ArchitectWhy from "@/components/architect/ArchitectWhy";
import ArchitectServices from "@/components/architect/ArchitectServices";
import ArchitectBenefits from "@/components/architect/ArchitectBenefits";
import ArchitectWorkflow from "@/components/architect/ArchitectWorkflow";
import ContactSection from "@/components/backend/ContactSection";

export const metadata = {
    title: "Hire Software Architects | Codezilla",
    description:
        "Software architecture serves as a system's blueprint for determining how functions evolve, grow, and change over time. We create scalable, reliable systems.",
    keywords:
        "software architect, system architecture, software design, scalable systems, technical architecture, enterprise architecture",
    openGraph: {
        title: "Hire Software Architects | Codezilla",
        description:
            "Software architecture serves as a system's blueprint. We create scalable, reliable systems that reduce complexity.",
        type: "website",
    },
};

export default function SoftwareArchitectPage() {
    return (
        <main>
            <ArchitectHero />
            <ArchitectWhy />
            <ArchitectServices />
            <ArchitectBenefits />
            <ArchitectWorkflow />
            <ContactSection />
        </main>
    );
}
