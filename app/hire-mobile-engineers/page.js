import MobileHero from "@/components/mobile/MobileHero";
import MobileWhy from "@/components/mobile/MobileWhy";
import MobileServices from "@/components/mobile/MobileServices";
import MobileBenefits from "@/components/mobile/MobileBenefits";
import ContactSection from "@/components/backend/ContactSection";

export const metadata = {
    title: "Hire Mobile Engineers | Codezilla",
    description:
        "Our Mobile Engineers create, build, and optimize high-performance apps for iOS, Android, and cross-platform devices. We create scalable, secure, and user-friendly mobile solutions.",
    keywords:
        "mobile engineers, iOS development, Android development, cross-platform apps, mobile app development, React Native, Flutter",
    openGraph: {
        title: "Hire Mobile Engineers | Codezilla",
        description:
            "Our Mobile Engineers create, build, and optimize high-performance apps for iOS, Android, and cross-platform devices.",
        type: "website",
    },
};

export default function MobileEngineersPage() {
    return (
        <main>
            <MobileHero />
            <MobileWhy />
            <MobileServices />
            <MobileBenefits />
            <ContactSection />
        </main>
    );
}
