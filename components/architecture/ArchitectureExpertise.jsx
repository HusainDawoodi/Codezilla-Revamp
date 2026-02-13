import { ARCHITECTURE_EXPERTISE } from "@/constants/architecture";

export default function ArchitectureExpertise() {
  return (
    <section className="bg-[#f1eee9] py-24 px-6 border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-primary font-bold tracking-widest text-[10px] uppercase">
              Technical Competency
            </span>
            <h2 className="text-4xl font-black text-charcoal tracking-tighter uppercase mt-2">
              Why Domain Expertise Matters in Software Architecture
            </h2>
          </div>
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest pb-2">
            Contextual Analysis / Design Precision
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARCHITECTURE_EXPERTISE.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-zinc-200 relative p-10 flex flex-col shadow-sm"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
              <div className="mb-8">
                <span className="text-4xl font-black text-primary leading-none">
                  {item.id}
                </span>
              </div>
              <h4 className="font-bold text-charcoal uppercase text-lg mb-4 tracking-tight">
                {item.title}
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
