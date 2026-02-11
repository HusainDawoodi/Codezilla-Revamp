import { FRONTEND_PROCESS_STEPS } from "@/constants/frontend";

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 md:py-[140px] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 md:mb-32 flex flex-col items-center text-center">
          <span className="text-primary font-mono text-[10px] uppercase tracking-[0.5em] mb-6">
            Execution Strategy
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black uppercase tracking-tight">
            Development Process
          </h2>
        </div>

        {/* Mobile View: Vertical list */}
        <div className="md:hidden space-y-6">
          {FRONTEND_PROCESS_STEPS.map((step) => (
            <div
              key={step.id}
              className="p-8 bg-[#FBFBF9] border-l-4 border-primary"
            >
              <span className="text-primary font-display text-4xl font-black mb-4 block opacity-40">
                {step.id}
              </span>
              <h4 className="font-display text-xl font-bold text-black uppercase mb-4">
                {step.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop View: Expanding panels */}
        <div className="hidden md:flex w-full h-[600px] border border-black/5 rounded-[4px] overflow-hidden shadow-sm">
          {FRONTEND_PROCESS_STEPS.map((step, index) => {
            const icons = [
              "analytics",
              "grid_view",
              "code",
              "fact_check",
              "rocket_launch",
            ];

            return (
              <div
                key={step.id}
                className={`group relative flex-1 hover:flex-[3.5] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] border-r last:border-0 border-black/5 bg-white overflow-hidden cursor-pointer`}
              >
                <div className="absolute inset-0 p-12 flex flex-col justify-between">
                  <div className="flex flex-col items-center group-hover:items-start transition-all duration-700">
                    <span className="text-primary font-display text-8xl font-black leading-none mb-16 opacity-10 group-hover:opacity-100 transition-opacity">
                      {step.id}
                    </span>
                    <h4 className="font-display text-2xl font-bold text-black uppercase tracking-tight whitespace-nowrap [writing-mode:vertical-rl] group-hover:[writing-mode:horizontal-tb] transform rotate-180 group-hover:rotate-0 transition-all duration-700 group-hover:mb-8">
                      {step.title}
                    </h4>
                    <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-700 delay-100">
                      <p className="text-gray-600 text-lg leading-relaxed font-light max-w-sm border-l-2 border-primary pl-6">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center group-hover:justify-start transition-all duration-700">
                    <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-125 transition-transform duration-700">
                      {icons[index]}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
