import { UI_UX_BENEFITS } from "@/constants/ui-ux";
import InfoCard from "../ui/InfoCard";

export default function BenefitsSection() {
  return (
    <section className="bg-[#F9F7F2] py-20 md:py-24 px-6 md:px-12 border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black uppercase tracking-tight mb-4">
              Key Benefits of UI/UX Design
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Enterprise-grade infrastructure for modern business demands.
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-primary font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] block">
              Scalable Systems
            </span>
            <span className="text-black font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] block">
              High Velocity
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UI_UX_BENEFITS.map((benefit, index) => (
            <InfoCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
