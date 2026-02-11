import FAQ from "../ui/FAQ";
import { BACKEND_FAQS } from "@/constants/backend";

export default function FAQSection() {
    const faqs = BACKEND_FAQS;

    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-black uppercase tracking-tight mb-20">
                        FREQUENTLY ASKED QUESTIONS
                    </h2>
                    <div className="space-y-4">
                        <FAQ items={faqs} theme="light" variant="contained" />
                    </div>
                </div>
            </div>
        </section>
    );
}
