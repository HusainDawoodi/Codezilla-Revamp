import SkyGuardHero from "@/components/skyguard/SkyGuardHero";
import MetricsStrip from "@/components/skyguard/MetricsStrip";
import InfraDashboard from "@/components/skyguard/InfraDashboard";
import HowItWorks from "@/components/skyguard/HowItWorks";
import FeatureIcons from "@/components/skyguard/FeatureIcons";
import CTASection from "@/components/skyguard/CTASection";

export const metadata = {
    title: "SkyGuard — Predictive Infrastructure Monitoring | Codezilla",
    description:
        "AI-powered infrastructure monitoring and anomaly detection. Predict outages 30 minutes before they happen.",
    keywords: [
        "infrastructure monitoring",
        "cloud security",
        "anomaly detection",
        "SRE tools",
        "SkyGuard",
        "Codezilla",
    ],
    openGraph: {
        title: "SkyGuard — Predictive Infrastructure Monitoring | Codezilla",
        description:
            "Stop reacting. Start predicting with SkyGuard infrastructure monitoring.",
        url: "https://codezilla.io/skyguard",
        siteName: "Codezilla",
        locale: "en_US",
        type: "website",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SkyGuard",
    applicationCategory: "Infrastructure Tool",
    operatingSystem: "Web",
    releaseNotes: "Closed Beta Phase",
    author: {
        "@type": "Organization",
        name: "Codezilla",
        url: "https://codezilla.io",
    },
};

export default function SkyGuardPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen">
                <SkyGuardHero />
                <MetricsStrip />
                <HowItWorks />
                <InfraDashboard />
                <FeatureIcons />
                <CTASection />
            </main>
        </>
    );
}
