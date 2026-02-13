import ReviewlyHero from "@/components/reviewly/ReviewlyHero";
import MetricsStrip from "@/components/reviewly/MetricsStrip";
import HowItWorks from "@/components/reviewly/HowItWorks";
import LiveDemo from "@/components/reviewly/LiveDemo";
import FeatureIcons from "@/components/reviewly/FeatureIcons";
import UseCases from "@/components/reviewly/UseCases";
import CTASection from "@/components/reviewly/CTASection";

export const metadata = {
    title: "Reviewly — AI Code Review | Codezilla",
    description:
        "AI-powered code review, vulnerability detection, and architecture analysis. Ship cleaner code 10x faster.",
    keywords: [
        "AI code review",
        "code analysis",
        "vulnerability detection",
        "code quality",
        "Reviewly",
        "Codezilla",
    ],
    authors: [{ name: "Codezilla" }],
    creator: "Codezilla",
    openGraph: {
        title: "Reviewly — AI Code Review | Codezilla",
        description:
            "AI-powered code review, vulnerability detection, and architecture analysis.",
        url: "https://codezilla.io/reviewly",
        siteName: "Codezilla",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Reviewly — AI Code Review | Codezilla",
        description:
            "AI-powered code review, vulnerability detection, and architecture analysis.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://codezilla.io/reviewly",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Reviewly",
    description:
        "AI-powered code review, vulnerability detection, and architecture recommendations.",
    url: "https://codezilla.io/reviewly",
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
                <ReviewlyHero />
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
