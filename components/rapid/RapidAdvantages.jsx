import { RAPID_ADVANTAGES } from "@/constants/rapid";
import InfoCard from "../ui/InfoCard";

export default function RapidAdvantages() {
  return (
    <section className="py-24 bg-[#F3F4F6] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase tracking-tight mb-4">
              Benefits of Rapid Prototyping
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-primary font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] block">
              Early Validation
            </span>
            <span className="text-black font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] block">
              Risk Mitigation
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RAPID_ADVANTAGES.map((item, idx) => (
            <InfoCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              shadowColor={idx % 2 === 0 ? "black" : "orange"}
              iconBg={idx % 2 === 0 ? "black" : "primary"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
