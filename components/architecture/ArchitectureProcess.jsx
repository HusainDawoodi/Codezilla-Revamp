import { ARCHITECTURE_PROCESS } from "@/constants/architecture";

export default function ArchitectureProcess() {
  return (
    <section className="bg-charcoal py-24 px-6 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">
            Execution Logic
          </span>
          <h2 className="text-5xl font-black text-white uppercase mt-2">
            Phased Dependency Graph
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {ARCHITECTURE_PROCESS.map((step, idx) => (
            <div key={step.id} className={`space-y-8  `}>
              <div
                className={`bg-zinc-900/80 backdrop-blur-sm border ${
                  idx === 1 ? "border-primary/30" : "border-white/10"
                } p-8 py-12 relative min-h-[300px]`}
              >
                <span
                  className={`absolute -top-3 -left-3 w-8 h-8 ${
                    idx === 1 ? "bg-primary" : "bg-zinc-800"
                  } text-white text-xs flex items-center justify-center font-bold`}
                >
                  {step.id}
                </span>
                <h3 className="text-sm font-bold uppercase text-primary mb-2">
                  {step.phase}
                </h3>
                <h4 className="text-xl font-bold text-white uppercase mb-4">
                  {step.title}
                </h4>
                <p className="text-base text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
