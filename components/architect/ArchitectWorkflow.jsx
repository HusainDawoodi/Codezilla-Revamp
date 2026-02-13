import { ARCHITECT_WORKFLOW } from "@/constants/architect";

export default function ArchitectWorkflow() {
  return (
    <section className="bg-white py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-center mb-20">
          Our Architecture Workflow
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {ARCHITECT_WORKFLOW.map((step) => (
            <div
              key={step.id}
              className="bg-charcoal rounded-[4px] border-t-2 border-primary p-10 relative overflow-hidden group shadow-2xl"
            >
              <span className="absolute right-4 top-4 text-7xl font-bold text-white/5 select-none transition-colors group-hover:text-primary/10">
                {step.id}
              </span>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary text-5xl mb-6">
                  {step.icon}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
