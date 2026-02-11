import TechStackGrid from "../ui/TechStackGrid";
import { FRONTEND_TECH_STACK } from "@/constants/frontend";

export default function EcosystemSection() {
  return (
    <section className="bg-charcoal py-20 md:py-[120px] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-8">
          Engineering Ecosystem
        </h2>
        <p className="text-gray-400 max-w-3xl mb-20 leading-relaxed font-light md:text-lg">
          Integrate an advanced developer-centric front-end development stack
          including React, Vue, Angular, Next.js, and TypeScript to ensure
          scalable and maintainable codebases for your enterprise projects.
        </p>

        <TechStackGrid items={FRONTEND_TECH_STACK} theme="dark" />
      </div>
    </section>
  );
}
