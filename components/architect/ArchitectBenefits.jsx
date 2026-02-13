import { ARCHITECT_BENEFITS } from "@/constants/architect";
import InfoCard from "../ui/InfoCard";

export default function ArchitectBenefits() {
  return (
    <section className="bg-[#F3F4F6] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-16 text-center">
          Benefits of Strong <br />
          Software Architecture
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {ARCHITECT_BENEFITS.map((item, idx) => (
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
