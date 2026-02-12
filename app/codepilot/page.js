import CodePilotHero from "@/components/codepilot/CodePilotHero";
import MetricsStrip from "@/components/codepilot/MetricsStrip";
import HowItWorks from "@/components/codepilot/HowItWorks";
import LiveDemo from "@/components/codepilot/LiveDemo";
import FeatureIcons from "@/components/codepilot/FeatureIcons";
import UseCases from "@/components/codepilot/UseCases";
import CTASection from "@/components/codepilot/CTASection";

export const metadata = {
    title: "CodePilot — AI Code Review | Codezilla",
    description:
        "AI-powered code review, vulnerability detection, and architecture analysis. Ship cleaner code 10x faster.",
    keywords: [
        "AI code review",
        "code analysis",
        "vulnerability detection",
        "code quality",
        "CodePilot",
        "Codezilla",
    ],
    authors: [{ name: "Codezilla" }],
    creator: "Codezilla",
    openGraph: {
        title: "CodePilot — AI Code Review | Codezilla",
        description:
            "AI-powered code review, vulnerability detection, and architecture analysis.",
        url: "https://codezilla.io/codepilot",
        siteName: "Codezilla",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CodePilot — AI Code Review | Codezilla",
        description:
            "AI-powered code review, vulnerability detection, and architecture analysis.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://codezilla.io/codepilot",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CodePilot",
    description:
        "AI-powered code review, vulnerability detection, and architecture recommendations.",
    url: "https://codezilla.io/codepilot",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free for open source projects",
    },
    author: {
        "@type": "Organization",
        name: "Codezilla",
        url: "https://codezilla.io",
    },
};

export default function CodePilotPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen">
                <CodePilotHero />
                <MetricsStrip />
                <HowItWorks />
                <LiveDemo />
                <FeatureIcons />
                <UseCases />
                <CTASection />
            </main>
        </>
    );
}
