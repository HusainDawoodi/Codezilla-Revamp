export default function ServicesSection() {
  return (
    <section className="bg-charcoal py-20 md:py-32 px-6 md:px-12 overflow-hidden relative">
      <div className="absolute inset-0 blueprint-grid opacity-5"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4 text-left">
              Services provided
            </h2>
            <p className="text-gray-400 text-sm md:text-md">
              Comprehensive design solutions tailored to your business needs.
            </p>
          </div>
          <span className="font-mono text-primary text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2">
            [ 01-06 / Capabilities ]
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l md:border-l-0 lg:border-l border-t border-white/5">
          <div className="p-8 md:p-12 border-r border-b border-white/5 group hover:bg-white transition-colors">
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <span className="material-symbols-outlined text-primary !text-4xl">
                search_insights
              </span>
              <span className="text-white/20 font-display font-bold text-3xl md:text-4xl group-hover:text-primary transition-colors">
                01
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-4 group-hover:text-primary transition-colors">
              Prototyping and wireframe
            </h3>
            <p className="text-gray-400 text-sm md:text-md leading-relaxed font-light group-hover:text-gray-900 transition-colors">
              We transform concepts into organised visual blueprints that
              specify how customers will use your product.
            </p>
          </div>
          <div className="p-8 md:p-12 border-r border-b border-white/5 group hover:bg-white transition-colors">
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <span className="material-symbols-outlined text-primary !text-4xl">
                palette
              </span>
              <span className="text-white/20 font-display font-bold text-3xl md:text-4xl group-hover:text-primary transition-colors">
                02
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-4 group-hover:text-primary transition-colors">
              UI/UX Audit and Redesign
            </h3>
            <p className="text-gray-400 text-sm md:text-md leading-relaxed font-light group-hover:text-gray-900 transition-colors">
              We evaluate your present digital experience to identify problem
              areas, usability concerns, and missed possibilities.
            </p>
          </div>
          <div className="p-8 md:p-12 border-r border-b border-white/5 group hover:bg-white transition-colors">
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <span className="material-symbols-outlined text-primary !text-4xl">
                psychology
              </span>
              <span className="text-white/20 font-display font-bold text-3xl md:text-4xl group-hover:text-primary transition-colors">
                03
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-4 group-hover:text-primary transition-colors">
              AI Workflow Experience Design
            </h3>
            <p className="text-gray-400 text-sm md:text-md leading-relaxed font-light group-hover:text-gray-900 transition-colors">
              We create AI-driven workflows that simplify complex processes and
              build user trust.
            </p>
          </div>
          <div className="p-8 md:p-12 border-r border-b border-white/5 group hover:bg-white transition-colors">
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <span className="material-symbols-outlined text-primary !text-4xl">
                design_services
              </span>
              <span className="text-white/20 font-display font-bold text-3xl md:text-4xl group-hover:text-primary transition-colors">
                04
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-4 group-hover:text-primary transition-colors">
              UX Research and Behavioural Insights
            </h3>
            <p className="text-gray-400 text-sm md:text-md leading-relaxed font-light group-hover:text-gray-900 transition-colors">
              We use research and behavioral analysis to discover real user
              motivations and guide better design choices.
            </p>
          </div>
          <div className="p-8 md:p-12 border-r border-b border-white/5 group hover:bg-white transition-colors">
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <span className="material-symbols-outlined text-primary !text-4xl">
                smartphone
              </span>
              <span className="text-white/20 font-display font-bold text-3xl md:text-4xl group-hover:text-primary transition-colors">
                05
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-4 group-hover:text-primary transition-colors">
              Usability audits and heuristic reviews.
            </h3>
            <p className="text-gray-400 text-sm md:text-md leading-relaxed font-light group-hover:text-gray-900 transition-colors">
              We conduct thorough usability tests to find hidden friction,
              confusing interactions, and gaps in the user experience.
            </p>
          </div>
          <div className="p-8 md:p-12 border-r border-b border-white/5 group hover:bg-white transition-colors">
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <span className="material-symbols-outlined text-primary !text-4xl">
                monitor
              </span>
              <span className="text-white/20 font-display font-bold text-3xl md:text-4xl group-hover:text-primary transition-colors">
                06
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-4 group-hover:text-primary transition-colors">
              Decision Architecture Design
            </h3>
            <p className="text-gray-400 text-sm md:text-md leading-relaxed font-light group-hover:text-gray-900 transition-colors">
              We offer clear decision paths that help consumers move forward
              with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
