import { DEVOPS_BENEFITS } from "@/constants/devops";

export default function DevOpsBenefits() {
  return (
    <section className="bg-[#fcfbf9] py-24 px-6 text-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm mb-4 block">
            Output Optimization
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-black">
            Benefits of DevOps Engineering
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEVOPS_BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white border border-charcoal rounded-[4px] p-10 flex flex-col items-start h-full hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-5 mb-8">
                <span className="text-primary text-6xl font-black leading-none select-none">
                  0{idx + 1}
                </span>
                <span className="material-symbols-outlined text-primary text-5xl leading-none">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="text-3xl font-black tracking-tighter leading-[1.1] uppercase text-black mb-6">
                {benefit.title}
              </h3>
              <p className="text-zinc-800 text-base font-normal leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
