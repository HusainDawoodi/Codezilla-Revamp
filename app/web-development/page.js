import WebDevHero from '@/components/web-development/WebDevHero';
import StatsBar from '@/components/web-development/StatsBar';
import DedicationSection from '@/components/web-development/DedicationSection';
import PhilosophySection from '@/components/web-development/PhilosophySection';
import ServicesOffered from '@/components/web-development/ServicesOffered';
import KeyBenefits from '@/components/web-development/KeyBenefits';
import WhyChooseUs from '@/components/web-development/WhyChooseUs';
import ProcessSteps from '@/components/web-development/ProcessSteps';
import PortfolioCarousel from '@/components/web-development/PortfolioCarousel';
import ClientTestimonials from '@/components/web-development/ClientTestimonials';
import FAQSection from '@/components/web-development/FAQSection';
import TechStackMarquee from '@/components/web-development/TechStackMarquee';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import WorkCarousel from '@/components/WorkCarousel';

// SEO Metadata
export const metadata = {
    title: 'Web Development Services - Codezilla | Custom Web Apps & Websites',
    description: 'Professional web development company building innovative, effective, and intuitive websites and web apps. Expert developers delivering custom solutions with React, Vue, Node.js, and modern technologies.',
    keywords: [
        'web development',
        'web app development',
        'custom website development',
        'frontend development',
        'backend development',
        'React development',
        'Vue.js development',
        'Node.js development',
        'enterprise web development',
        'web development company',
        'Codezilla',
    ],
    authors: [{ name: 'Codezilla' }],
    creator: 'Codezilla',
    publisher: 'Codezilla',
    openGraph: {
        title: 'Web Development Services - Codezilla',
        description: 'Building innovative, effective, and intuitive websites and web apps with talented developers, designers, and strategists.',
        url: 'https://codezilla.io/web-development',
        siteName: 'Codezilla',
        images: [
            {
                url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz1nJOqy6BYeaM-mIljKZ7L-qyKz64D5b0H-JEkkkyCwu_HgyWJRQKD5COW5RIdZu71nIRQdoRY90RN9VYUWafl2HKQxULPGNr6EFpVHnEUa164PXTj7GNRf_RyxQIEI5Q35c0IOuyFUJ0ZI_q3K5QBOGKe2U8PrI4ea22QFqu-V9GyodWfAF3W0CAIvbhKPJ2_Hif89lDLRisQ0IbSm1Ct2-HwlsOuVqjm8OxTMnPqbcGWNx3hOgc7r3u_xXhady5bO7watjQ_tlk',
                width: 1200,
                height: 630,
                alt: 'Codezilla Web Development Services',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Web Development Services - Codezilla',
        description: 'Professional web development company building innovative websites and web apps.',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCz1nJOqy6BYeaM-mIljKZ7L-qyKz64D5b0H-JEkkkyCwu_HgyWJRQKD5COW5RIdZu71nIRQdoRY90RN9VYUWafl2HKQxULPGNr6EFpVHnEUa164PXTj7GNRf_RyxQIEI5Q35c0IOuyFUJ0ZI_q3K5QBOGKe2U8PrI4ea22QFqu-V9GyodWfAF3W0CAIvbhKPJ2_Hif89lDLRisQ0IbSm1Ct2-HwlsOuVqjm8OxTMnPqbcGWNx3hOgc7r3u_xXhady5bO7watjQ_tlk'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://codezilla.io/web-development',
    },
};

// JSON-LD Structured Data
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Codezilla Web Development Services',
    description: 'Professional web development company building innovative, effective, and intuitive websites and web apps.',
    url: 'https://codezilla.io/web-development',
    logo: 'https://codezilla.io/logo.png',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz1nJOqy6BYeaM-mIljKZ7L-qyKz64D5b0H-JEkkkyCwu_HgyWJRQKD5COW5RIdZu71nIRQdoRY90RN9VYUWafl2HKQxULPGNr6EFpVHnEUa164PXTj7GNRf_RyxQIEI5Q35c0IOuyFUJ0ZI_q3K5QBOGKe2U8PrI4ea22QFqu-V9GyodWfAF3W0CAIvbhKPJ2_Hif89lDLRisQ0IbSm1Ct2-HwlsOuVqjm8OxTMnPqbcGWNx3hOgc7r3u_xXhady5bO7watjQ_tlk',
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
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
    },
    priceRange: '$$',
    areaServed: {
        '@type': 'Country',
        name: 'India',
    },
    serviceType: [
        'Web Development',
        'Frontend Development',
        'Backend Development',
        'Full Stack Development',
        'Web Application Development',
        'Enterprise Web Development',
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Development Services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Frontend Development',
                    description: 'Crafting responsive, interactive, and high-performance user interfaces using modern frameworks like React, Vue, and Angular.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Backend Development',
                    description: 'Building robust, scalable server-side logic and database architectures to support your web applications securely.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Data Management',
                    description: 'Ensuring data integrity, security, and accessibility through efficient database design and management solutions.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'APIs Integration and Support',
                    description: 'Seamlessly integrating third-party services and APIs to extend functionality and support complex workflows.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Enterprise Web Development',
                    description: 'Developing large-scale, mission-critical web software tailored to meet specific enterprise business requirements.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Site Maintenance & Support',
                    description: 'Ongoing technical support, security updates, and performance monitoring to keep your web assets running smoothly.',
                },
            },
        ],
    },
};

export default function WebDevelopmentPage() {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen">
                <WebDevHero />
                <StatsBar />
                <DedicationSection />
                <PhilosophySection />
                <ServicesOffered />
                <KeyBenefits />
                <WhyChooseUs />
                <TechStackMarquee />
                <ProcessSteps />
                <WorkCarousel />

                <TestimonialCarousel />
                {/* <PortfolioCarousel /> */}
                {/* <ClientTestimonials /> */}
                <FAQSection />
            </main>
        </>
    );
}