import { DISCOVERY_WORKFLOW } from "@/constants/discovery";

export default function DiscoveryWorkflow() {
  return (
    <section className="bg-obsidian py-32 overflow-hidden border-t border-white/5 px-6 md:px-8">
      <div className=" mb-16 max-w-7xl mx-auto flex items-end justify-between animate-entrance-fade">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-4 text-white uppercase font-display">
            Most Common Product Discovery Phases
          </h2>
        </div>
        {/* <div className="hidden lg:block">
          <span className="text-zinc-600 font-mono text-xs tracking-widest uppercase">
            PROTOCOL_VERSION: 4.0.1
          </span>
        </div> */}
      </div>

      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-zinc-800">
        {DISCOVERY_WORKFLOW.map((step, idx) => (
          <div
            key={step.id}
            className="group relative  bg-obsidian border-r border-b border-zinc-800 md:p-10 p-6 overflow-hidden transition-all duration-500 hover:bg-white animate-entrance-fade"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Background Identifier */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
              <span className="text-[12rem] font-black text-white/[0.02] tracking-tighter transform group-hover:scale-110 transition-transform duration-700">
                {step.id}
              </span>
            </div>

            {/* Circuit Background Overlay Simulation */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none circuit-pattern"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-primary text-[10px] font-bold tracking-[0.4em] mb-4 block uppercase">
                  {step.phase}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary uppercase leading-tight tracking-tight mb-4 font-display">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-base leading-relaxed  md:max-w-[240px]">
                  {step.description}
                </p>
              </div>
              <div className="flex justify-end">
                <span className="material-symbols-outlined text-primary !text-4xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {step.icon}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
