import TawkwiseHero from "@/components/tawkwise/TawkwiseHero";
import TrustedByStrip from "@/components/tawkwise/TrustedByStrip";
import IndustryUseCases from "@/components/tawkwise/IndustryUseCases";
import AudioDemoSection from "@/components/tawkwise/AudioDemoSection";
import PlatformCapabilities from "@/components/tawkwise/PlatformCapabilities";
import ROIMetrics from "@/components/tawkwise/ROIMetrics";
import IntegrationEcosystem from "@/components/tawkwise/IntegrationEcosystem";
import TawkwiseCTA from "@/components/tawkwise/TawkwiseCTA";
import TawkwiseFooter from "@/components/tawkwise/TawkwiseFooter";

export const metadata = {
    title: "Tawkwise — AI Voice Agents for Every Industry | Codezilla",
    description:
        "Deploy intelligent AI voice agents that handle calls, qualify leads, and delight customers across Healthcare, Real Estate, Finance, Retail, and more. 24/7, in 20+ languages.",
    keywords: [
        "AI voice agents",
        "voice AI",
        "conversational AI",
        "enterprise voice platform",
        "Tawkwise",
        "Codezilla",
        "healthcare AI",
        "real estate AI",
        "finance AI",
    ],
    authors: [{ name: "Codezilla" }],
    creator: "Codezilla",
    openGraph: {
        title: "Tawkwise — AI Voice Agents for Every Industry | Codezilla",
        description:
            "Deploy intelligent AI voice agents for Healthcare, Real Estate, Finance, Retail, and more.",
        url: "https://codezilla.io/tawkwise",
        siteName: "Codezilla",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tawkwise — AI Voice Agents for Every Industry | Codezilla",
        description:
            "Deploy intelligent AI voice agents for Healthcare, Real Estate, Finance, Retail, and more.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://codezilla.io/tawkwise",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tawkwise",
    description:
        "AI-powered voice agent platform for enterprise. Deploy intelligent voice agents across Healthcare, Real Estate, Finance, Retail, Hospitality, and Insurance.",
    url: "https://codezilla.io/tawkwise",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free demo available",
    },
    author: {
        "@type": "Organization",
        name: "Codezilla",
        url: "https://codezilla.io",
    },
};

export default function TawkwisePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen">
                <TawkwiseHero />
                <TrustedByStrip />
                <IndustryUseCases />
                <AudioDemoSection />
                <PlatformCapabilities />
                <ROIMetrics />
                <IntegrationEcosystem />
                <TawkwiseCTA />
                <TawkwiseFooter />
            </main>
        </>
    );
}
