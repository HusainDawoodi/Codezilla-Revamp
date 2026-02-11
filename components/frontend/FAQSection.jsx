"use client";
import { FRONTEND_FAQS } from "@/constants/frontend";
import FAQ from "../ui/FAQ";

export default function FAQSection() {
  return (
    <section className="bg-[#FBFBF9] py-20 md:py-[120px]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-black uppercase tracking-tight mb-16 md:mb-20 border-l-4 border-primary pl-8">
            Frequently Asked Questions
          </h2>
          <FAQ items={FRONTEND_FAQS} theme="light" variant="contained" />
        </div>
      </div>
    </section>
  );
}
