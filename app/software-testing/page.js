import TestingHero from '@/components/software-testing/TestingHero';
import CapabilitiesMatrix from '@/components/software-testing/CapabilitiesMatrix';
import CostOfDelay from '@/components/software-testing/CostOfDelay';
import ImpactROI from '@/components/software-testing/ImpactROI';
import TestingAudit from '@/components/software-testing/TestingAudit';

// SEO Metadata
export const metadata = {
    title: 'QA & Testing: Strategic Solution Narrative | Codezilla',
    description: 'Ensure 99.9% deploy-ready reliability through clinical, high-stakes QA protocols. Codezilla provides strategic verification excellence for unstable software.',
    keywords: [
        'software testing',
        'QA services',
        'quality assurance',
        'automation testing',
        'performance testing',
        'security testing',
        'bug detection',
        'CI/CD verification',
        'software reliability',
        'Codezilla',
    ],
    authors: [{ name: 'Codezilla' }],
    creator: 'Codezilla',
    publisher: 'Codezilla',
    openGraph: {
        title: 'QA & Testing: Strategic Solution Narrative | Codezilla',
        description: 'Elite engineering partners who integrate within your lifecycle to neutralize architectural friction.',
        url: 'https://codezilla.io/software-testing',
        siteName: 'Codezilla',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'QA & Testing: Strategic Solution Narrative | Codezilla',
        description: 'Ensuring 99.9% deploy-ready reliability through high-stakes QA protocols.',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://codezilla.io/software-testing',
    },
};

// JSON-LD Structured Data
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Codezilla Software Testing Services',
    description: 'Elite engineering partners providing strategic verification excellence and high-stakes QA protocols.',
    url: 'https://codezilla.io/software-testing',
    telephone: '+917314945411',
    email: 'hello@codezilla.io',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot No. 201, Scheme No. 78, Part II',
        addressLocality: 'Indore',
        addressRegion: 'Madhya Pradesh',
        postalCode: '452010',
        addressCountry: 'IN',
    },
    serviceType: [
        'Software Testing',
        'Quality Assurance',
        'Automation Testing',
        'Security Auditing',
        'Load Testing',
    ],
};

export default function SoftwareTestingPage() {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen">
                <TestingHero />
                <CapabilitiesMatrix />
                <CostOfDelay />
                <ImpactROI />
                <TestingAudit />
            </main>
        </>
    );
}
