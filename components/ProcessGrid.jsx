export default function ProcessGrid() {
  return (
    <section
      className="bg-gray-100 border-b-2 border-black py-24 bg-energy-gradient animate-entrance-fade"
      style={{ animationDelay: "1.0s" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between lg:items-end mb-16 border-b-2 border-black pb-8">
          <h2 className="font-display text-4xl md:text-4xl font-bold text-black uppercase  max-w-lg">
            How we work
          </h2>
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
            Select your protocol
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black bg-white">
          {/* Accelerator */}
          <div className="p-6 lg:p-6 lg:p-12 border-b-2 md:border-b-0 md:border-r-2 border-black hover:bg-black hover:text-white hover:border-primary transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6 lg:mb-12">
              <span className="material-symbols-outlined !text-4xl text-primary group-hover:scale-110 transition-transform">
                rocket_launch
              </span>
              <span className="font-mono text-xs border border-current px-2 py-1 group-hover:text-primary group-hover:border-primary">
                Type A
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold uppercase mb-4 font-display group-hover:text-primary transition-colors">
              Accelerator
            </h3>
            <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-80 mb-8">
              Rapid prototyping and MVP development. Go from concept to
              clickable high-fidelity model in 72 hours.
            </p>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary"></span> Fixed Timeline
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary"></span> Defined Scope
              </li>
            </ul>
          </div>

          {/* Dedicated Team */}
          <div className="p-6 lg:p-12 border-b-2 md:border-b-0 md:border-r-2 border-black hover:bg-black hover:text-white hover:border-primary transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6 lg:mb-12">
              <span className="material-symbols-outlined !text-4xl text-primary group-hover:scale-110 transition-transform">
                group_add
              </span>
              <span className="font-mono text-xs border border-current px-2 py-1 group-hover:text-primary group-hover:border-primary">
                Type B
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold uppercase mb-4 font-display group-hover:text-primary transition-colors">
              Dedicated Team
            </h3>
            <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-80 mb-8">
              Full-scale engineering pods integrated into your workflow.
              Long-term scalability and deep domain knowledge.
            </p>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary"></span> Full
                Integration
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary"></span> Monthly
                Retainer
              </li>
            </ul>
          </div>

          {/* Strategic Advisory */}
          <div className="p-6 lg:p-12 hover:bg-black hover:text-white hover:border-primary transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6 lg:mb-12">
              <span className="material-symbols-outlined !text-4xl text-primary group-hover:scale-110 transition-transform">
                saved_search
              </span>
              <span className="font-mono text-xs border border-current px-2 py-1 group-hover:text-primary group-hover:border-primary">
                Type C
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold uppercase mb-4 font-display group-hover:text-primary transition-colors">
              Strategic Advisory
            </h3>
            <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-80 mb-8">
              High-level consulting for legacy modernization and AI readiness
              assessments. Charting the path forward.
            </p>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary"></span> Audit &amp;
                Plan
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary"></span> C-Suite Liaison
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
