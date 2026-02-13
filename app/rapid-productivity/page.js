import Image from "next/image";
import RapidHero from "@/components/rapid/RapidHero";
import RapidImportance from "@/components/rapid/RapidImportance";
import RapidMatrix from "@/components/rapid/RapidMatrix";
import RapidTrack from "@/components/rapid/RapidTrack";
import RapidAdvantages from "@/components/rapid/RapidAdvantages";
import TechStackMarquee from "@/components/web-development/TechStackMarquee";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQSection from "@/components/web-development/FAQSection";
import CTASection from "@/components/CTASection";

export const metadata = {
    title: "Rapid Prototyping - Codezilla | Architectural Motion",
    description: "Transforming ideas into testable experiences. Rapid prototyping to verify concepts, mitigate risks, and build consensus before development.",
    keywords: ["rapid prototyping", "ux prototyping", "product validation", "interactive mockups", "wireframing", "Codezilla"],
};

export default function RapidPage() {
    return (
        <main className="min-h-screen bg-white">
            <RapidHero />
            <RapidImportance />
            <RapidMatrix />
            <RapidTrack />
            <RapidAdvantages />

            {/* <TechStackMarquee /> */}
            {/* <TestimonialCarousel /> */}
            {/* <FAQSection /> */}
            <CTASection />
        </main>
    );
}
