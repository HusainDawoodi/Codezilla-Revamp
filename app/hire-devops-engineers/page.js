import DevOpsHero from "@/components/devops/DevOpsHero";
import DevOpsWhy from "@/components/devops/DevOpsWhy";
import DevOpsServices from "@/components/devops/DevOpsServices";
import DevOpsBenefits from "@/components/devops/DevOpsBenefits";
import DevOpsProcess from "@/components/devops/DevOpsProcess";
import ContactSection from "@/components/backend/ContactSection";

export const metadata = {
    title: "Hire DevOps Engineers | Codezilla",
    description:
        "DevOps engineering links development and operations. We manage the structure and tools needed to support high-quality software, fast delivery, and scalable systems.",
    keywords:
        "DevOps engineers, CI/CD pipeline, infrastructure as code, cloud optimization, DevOps services, automation",
    openGraph: {
        title: "Hire DevOps Engineers | Codezilla",
        description:
            "DevOps engineering links development and operations. We manage the structure and tools needed to support high-quality software, fast delivery, and scalable systems.",
        type: "website",
    },
};

export default function DevOpsPage() {
    return (
        <main>
            <DevOpsHero />
            <DevOpsWhy />
            <DevOpsServices />
            <DevOpsBenefits />
            <DevOpsProcess />
            <ContactSection />
        </main>
    );
}
