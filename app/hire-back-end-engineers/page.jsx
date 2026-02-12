
import HeroSection from "@/components/backend/HeroSection";
import ServicesSection from "@/components/backend/ServicesSection";
import WhyChooseSection from "@/components/backend/WhyChooseSection";
import KeyElementsSection from "@/components/backend/KeyElementsSection";
import ProcessSection from "@/components/backend/ProcessSection";
import WorkCarousel from "@/components/WorkCarousel";
import TestimonialsSection from "@/components/backend/TestimonialsSection";
import FAQSection from "@/components/backend/FAQSection";
import ContactSection from "@/components/ui-ux/ContactSection";

export const metadata = {
    title: "Back-end Development Services - Codezilla",
    description: "Codezilla - Executive Precision in Backend Development",
};

const backendProjects = [
    {
        category: "Outcome Metric",
        imageSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC8X0-OvcyQkGT8K5B7lGDQVEsCB_9ADuKnKgEoyKXSvJU-wWFbIz1PstXDS3424QXiXj3dX-JIcKsGfynXuAU6cn6fWhcArMXXHofHvO9-INeEu42CBnNsen0ksJwoFO1xIgq_ajR5zrvQzoQLFu-j7nat6xCkCrp1tJSTH4JSI4xhXfOV9Ht6SAg9IHUvwxBYOVA-SpeAc6lh7C6DCpgxP8FWuxquKYJ8paQGNanhtpKCyYqTR7qzdeofDXT0B9KR4uq3Pbqn",
        logoSrc: null, // No logo in legacy, just text
        description:
            "The app Thriving.ai is for people who receive care at home and their families and caregivers. It helps them communicate better and coordinate their needs by providing all the necessary information in one easy-to-access place.",
        number: "Thriving.ai", // Using name as number/identifier based on legacy layout or adapting to card?
        // Let's adapt to WorkCard props: category, imageSrc, logoSrc, description, number
        // Legacy card has: "Outcome Metric" -> "40% FASTER LATENCY", Image, Title "Thriving.ai", Description.
        // WorkCard expects specific props. Let's map best fit.
    },
    {
        category: "Outcome Metric",
        imageSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC3Oh5oJQnysBkNsqBwsPyCb9mCwVwOFCO_xN6Zz_8ONI1UM9adsgExC_sOlgHAJoYg2RfkS2-RBMdqXxE_skr5_TlavYQ5-3PTV0z2PbuRy4yqcrRTvZBygGc1iO-HVEj6pXMO5dMlQ7X5qjqkvGXnK9IOWKg5bu9d8GRw3HOXUE_8-7pi4leHZvdmxvVuqViuE6kElBrmbmhXmHZpxsvVjfp02WavQ-L-G0qvOqCiTF9g49QPvOqHQ3JIlGvqSxvVyNHfmF1u",
        logoSrc: null,
        description:
            "UseDo provides businesses with a simple, all-in-one software tool to manage projects, handle finances, and improve team collaboration. It helps small to medium-sized companies run more efficiently by keeping everything organized in one place.",
        number: "Usedo",
    },
    {
        category: "Outcome Metric",
        imageSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCgb6gJPkiRYi6okckdOklicZeHcujd4F1xkALqIHbbTpEsOXdnkV1Ae4zoLNQXrk49D-wgaafUph388hVzEARBhdL1bCYxzKb6znm3-3iSce0kXnpsWkGuTOU2RVYZIbu88i8mbuHr876-HsYDxTtbSRLoB5dt7D9nAYRJa9WWH9n94REN_sOySFiWoc4d_mmROFavDOqrUyxnO7MfIUTVXBpPn5gt58QAWgHcS3hodmshNk74kCZThOayVg00LOI_JHCwGfxM",
        logoSrc: null,
        description:
            "The NASENI Solar Portal is a website that lets people find out how much solar energy they could get based on where they live. It helps users understand the benefits and costs of switching to solar power for their homes or businesses.",
        number: "Naseni",
    },
];

// Refined mapping for WorkCard to look good:
// category -> "Outcome Metric: 40% FASTER LATENCY" (Combined for impact)
// number -> "01" etc or just title? WorkCard uses number for index usually.
const refinedBackendProjects = [
    {
        category: "40% FASTER LATENCY",
        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8X0-OvcyQkGT8K5B7lGDQVEsCB_9ADuKnKgEoyKXSvJU-wWFbIz1PstXDS3424QXiXj3dX-JIcKsGfynXuAU6cn6fWhcArMXXHofHvO9-INeEu42CBnNsen0ksJwoFO1xIgq_ajR5zrvQzoQLFu-j7nat6xCkCrp1tJSTH4JSI4xhXfOV9Ht6SAg9IHUvwxBYOVA-SpeAc6lh7C6DCpgxP8FWuxquKYJ8paQGNanhtpKCyYqTR7qzdeofDXT0B9KR4uq3Pbqn",
        logoSrc: "/images/thriving.svg", // Assuming existing likely logo or fallback
        description: "Thriving.ai: It helps them communicate better and coordinate their needs by providing all the necessary information in one easy-to-access place.",
        number: "01",
    },
    {
        category: "100% UPTIME CLOUD",
        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3Oh5oJQnysBkNsqBwsPyCb9mCwVwOFCO_xN6Zz_8ONI1UM9adsgExC_sOlgHAJoYg2RfkS2-RBMdqXxE_skr5_TlavYQ5-3PTV0z2PbuRy4yqcrRTvZBygGc1iO-HVEj6pXMO5dMlQ7X5qjqkvGXnK9IOWKg5bu9d8GRw3HOXUE_8-7pi4leHZvdmxvVuqViuE6kElBrmbmhXmHZpxsvVjfp02WavQ-L-G0qvOqCiTF9g49QPvOqHQ3JIlGvqSxvVyNHfmF1u",
        logoSrc: "",
        description: "Usedo: UseDo provides businesses with a simple, all-in-one software tool to manage projects, handle finances, and improve team collaboration.",
        number: "02",
    },
    {
        category: "60% DATA REDUCTION",
        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgb6gJPkiRYi6okckdOklicZeHcujd4F1xkALqIHbbTpEsOXdnkV1Ae4zoLNQXrk49D-wgaafUph388hVzEARBhdL1bCYxzKb6znm3-3iSce0kXnpsWkGuTOU2RVYZIbu88i8mbuHr876-HsYDxTtbSRLoB5dt7D9nAYRJa9WWH9n94REN_sOySFiWoc4d_mmROFavDOqrUyxnO7MfIUTVXBpPn5gt58QAWgHcS3hodmshNk74kCZThOayVg00LOI_JHCwGfxM",
        logoSrc: "",
        description: "Naseni: The NASENI Solar Portal is a website that lets people find out how much solar energy they could get based on where they live.",
        number: "03",
    }
]



export default function BackendPage() {
    return (
        <main className="bg-white min-h-screen">
            <HeroSection />
            <ServicesSection />
            <WhyChooseSection />
            <KeyElementsSection />
            <ProcessSection />
            <WorkCarousel projects={refinedBackendProjects} />
            <FAQSection />
            <ContactSection />
        </main>
    );
}
