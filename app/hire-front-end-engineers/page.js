import HeroSection from "@/components/frontend/HeroSection";
import IntroSection from "@/components/frontend/IntroSection";
import ServicesSection from "@/components/frontend/ServicesSection";
import WhyChooseSection from "@/components/frontend/WhyChooseSection";
import KeyElementsSection from "@/components/frontend/KeyElementsSection";
import ProcessSection from "@/components/frontend/ProcessSection";
import EcosystemSection from "@/components/frontend/EcosystemSection";
import FAQSection from "@/components/frontend/FAQSection";
import ContactSection from "@/components/ui-ux/ContactSection";

export const metadata = {
    title: "Hire Frontend Engineers | Expert UI/UX & Web Development - Codezilla",
    description:
        "Hire elite frontend engineers specialized in React, Next.js, and modern UI/UX architecture. We build scalable, high-performance web interfaces that drive engagement.",
    keywords: [
        "hire frontend engineers",
        "frontend development services",
        "React developers",
        "Next.js developers",
        "UI/UX development",
        "pixel-perfect interfaces",
        "Codezilla frontend mastery",
    ],
    openGraph: {
        title: "Hire Frontend Engineers | Frontend Mastery - Codezilla",
        description:
            "Transform your digital landscape with our expert frontend engineering team. Performance-first, pixel-perfect web solutions.",
        type: "website",
        url: "https://codezilla.io/hire-front-end-engineers",
        images: [
            {
                url: "https://codezilla.io/images/og-frontend.jpg",
                width: 1200,
                height: 630,
                alt: "Codezilla Frontend Development Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hire Elite Frontend Engineers | Codezilla",
        description:
            "Scalable, high-performance, and pixel-perfect frontend solutions for modern businesses.",
        images: ["https://codezilla.io/images/og-frontend.jpg"],
    },
};

export default function FrontendDevelopmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Frontend Development Services",
        "provider": {
            "@type": "Organization",
            "name": "Codezilla",
            "url": "https://codezilla.io",
        },
        "description":
            "Expert frontend engineering services specializing in React, Next.js, and modern web architecture.",
        "areaServed": "Global",
        "serviceType": "Software Development",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="bg-white">
                <HeroSection />
                <IntroSection />
                <ServicesSection />
                <WhyChooseSection />
                <KeyElementsSection />
                <ProcessSection />
                <EcosystemSection />
                <FAQSection />
                <ContactSection />
            </main>
        </>
    );
}
