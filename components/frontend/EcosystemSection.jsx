import TechStackGrid from "../ui/TechStackGrid";
import { FRONTEND_TECH_STACK } from "@/constants/frontend";

export default function EcosystemSection() {
  return (
    <section className="bg-[#FBFBF9] py-20 md:py-[120px] overflow-hidden border-b border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-black uppercase tracking-tight mb-8">
          Frontend Ecosystem
        </h2>
        <p className="text-gray-600 max-w-3xl mb-20 leading-relaxed font-light md:text-lg">
          We use a modern, developer-focused front-end stack including React,
          Vue, Angular, Next.js, and TypeScript to build scalable, maintainable,
          and high-performance web applications tailored to your business needs.
        </p>

        <TechStackGrid
          items={FRONTEND_TECH_STACK}
          theme="light"
          showName={false}
        />
      </div>
    </section>
  );
}
