import { ARCHITECTURE_ROI } from "@/constants/architecture";
import InfoCard from "../ui/InfoCard";

export default function ArchitectureROI() {
  return (
    <section className="bg-[#f8f7f5] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase">
            Operational Excellence
          </span>
          <h2 className="text-4xl font-black text-charcoal  uppercase mt-2">
            Benefits of Strong Software Architecture
          </h2>
          <p className="text-base text-charcoal/70 mt-4">
            Custom software architecture offers safety and stability for future
            growth and adaptability. Well-constructed software architecture
            integrates IT and business strategy, lessens long-term complexity,
            and future-proofs systems. Robust architecture and design provide
            reliable and efficient development and operational software that
            will scale as business demands increase.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
          {ARCHITECTURE_ROI.map((item, idx) => (
            <InfoCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
              shadowColor={item.shadowColor}
              iconBg={item.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
