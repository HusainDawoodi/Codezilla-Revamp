import MobileHero from "@/components/mobile-app-development/MobileHero";
import MobileStatsBar from "@/components/mobile-app-development/MobileStatsBar";
import MobileIntroduction from "@/components/mobile-app-development/MobileIntroduction";
import MobileServices from "@/components/mobile-app-development/MobileServices";
import MobileWhyChooseUs from "@/components/mobile-app-development/MobileWhyChooseUs";
import MobileBenefits from "@/components/mobile-app-development/MobileBenefits";
import MobileProcess from "@/components/mobile-app-development/MobileProcess";
import MobileFAQ from "@/components/mobile-app-development/MobileFAQ";
import WorkCarousel from "@/components/WorkCarousel";
import ContactSection from "@/components/ui-ux/ContactSection";
import MobileTechLogo from "@/components/mobile-app-development/MobileTechLogo";

// SEO Metadata
export const metadata = {
  title: "Mobile App Development Services - Codezilla | iOS & Android Apps",
  description:
    "Professional mobile app development company building innovative, high-performance iOS and Android applications. Expert developers delivering custom native and cross-platform solutions.",
  keywords: [
    "mobile app development",
    "iOS development",
    "Android development",
    "native app development",
    "cross-platform app development",
    "Flutter development",
    "React Native development",
    "mobile application development company",
    "Codezilla",
  ],
  authors: [{ name: "Codezilla" }],
  creator: "Codezilla",
  publisher: "Codezilla",
  openGraph: {
    title: "Mobile App Development Services - Codezilla",
    description:
      "Building innovative, effective, and intuitive mobile applications with talented developers, designers, and strategists.",
    url: "https://codezilla.io/mobile-app-development",
    siteName: "Codezilla",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_IzLXc3azK6_0OADmZm9kqjMMSQ4hkXWAxjHKF6_P8vro3o96N0lKyprMZ5GginPQFPC09s4XeD0yUHAWiCkqctJ-T9TxEGvcI2c5x2PpYMSlHlMomiWI4UYNkZkl3qqdaYZjmyTDnOk61bXGPpr0nughppnBgdzKYtyv88xS7cGaSgKOSeiT-62Dbv7hugKe6V9Fr2NOP78s9YpTXMo674Ju08gN5-JOkG2rYNaofjb-7Xl5O1W3tBXbJWCPzxO4QKV-hrzv",
        width: 1200,
        height: 630,
        alt: "Codezilla Mobile App Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services - Codezilla",
    description:
      "Professional mobile app development company building innovative iOS and Android apps.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_IzLXc3azK6_0OADmZm9kqjMMSQ4hkXWAxjHKF6_P8vro3o96N0lKyprMZ5GginPQFPC09s4XeD0yUHAWiCkqctJ-T9TxEGvcI2c5x2PpYMSlHlMomiWI4UYNkZkl3qqdaYZjmyTDnOk61bXGPpr0nughppnBgdzKYtyv88xS7cGaSgKOSeiT-62Dbv7hugKe6V9Fr2NOP78s9YpTXMo674Ju08gN5-JOkG2rYNaofjb-7Xl5O1W3tBXbJWCPzxO4QKV-hrzv",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://codezilla.io/mobile-app-development",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Codezilla Mobile App Development Services",
  description:
    "Professional mobile app development company building innovative, high-performance iOS and Android applications.",
  url: "https://codezilla.io/mobile-app-development",
  logo: "https://codezilla.io/logo.png",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_IzLXc3azK6_0OADmZm9kqjMMSQ4hkXWAxjHKF6_P8vro3o96N0lKyprMZ5GginPQFPC09s4XeD0yUHAWiCkqctJ-T9TxEGvcI2c5x2PpYMSlHlMomiWI4UYNkZkl3qqdaYZjmyTDnOk61bXGPpr0nughppnBgdzKYtyv88xS7cGaSgKOSeiT-62Dbv7hugKe6V9Fr2NOP78s9YpTXMo674Ju08gN5-JOkG2rYNaofjb-7Xl5O1W3tBXbJWCPzxO4QKV-hrzv",
  telephone: "+917314945411",
  email: "hello@codezilla.io",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 201, Scheme No. 78, Part II",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452010",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "130",
  },
  priceRange: "$$$",
  areaServed: {
    "@type": "Country",
    name: "Global",
  },
  serviceType: [
    "Mobile App Development",
    "iOS Development",
    "Android Development",
    "Native App Development",
    "Cross-Platform Development",
    "Flutter Development",
    "React Native Development",
  ],
};
const projects = [
  {
    category: "Fintech",
    imageSrc: "/images/maji-fintech.jpg",
    logoSrc: "/images/maji-logo.svg",
    description:
      "Maji is a UK financial wellbeing provider that makes saving, spending, and planning money simpler for employees and employers.",
    number: "01",
  },
  {
    category: "EV Charging Software",
    imageSrc: "/images/rightcharge-main.jpg",
    logoSrc: "/images/rightcharge-logo.svg",
    description:
      "An EV charging management platform that automates payments, reimbursements, and reporting for fleets.",
    number: "02",
  },
  {
    category: "ERP Management",
    imageSrc: "/images/naseni.webp",
    logoSrc: "/images/naseni-logo.svg",
    description:
      "A Nigerian government agency driving innovation through engineering, manufacturing, and applied research.",
    number: "03",
  },
];
export default function MobileAppDevelopmentPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen">
        <MobileHero />
        <MobileIntroduction />
        <MobileStatsBar />
        <MobileServices />
        <MobileWhyChooseUs />
        <MobileBenefits />
        <MobileProcess />
        <WorkCarousel projects={projects} />
        <MobileTechLogo />
        <ContactSection />
        <MobileFAQ />
      </main>
    </>
  );
}
