export default function BenefitsSection() {
  return (
    <section className="bg-[#F9F7F2] py-20 md:py-24 px-6 md:px-12 border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black uppercase tracking-tight mb-4">
              Key Benefits of UI/UX Design
            </h2>
            <p className="text-gray-600 text-sm md:text-md">
              Enterprise-grade infrastructure for modern business demands.
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-primary font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] block">
              Scalable Systems
            </span>
            <span className="text-black font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] block">
              High Velocity
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-black p-8 md:p-10 h-full flex flex-col justify-between card-shadow-black transition-transform hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-white text-2xl md:text-3xl">
                  bolt
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-black uppercase mb-4 tracking-tight">
                Improved User Experience
              </h3>
              <p className="text-gray-600 text-sm md:text-md leading-relaxed">
                Good UI/UX design makes digital interactions simple, clear, and
                enjoyable. When users can navigate easily, frustration
                decreases, satisfaction increases, and they are more likely to
                return and engage frequently.
              </p>
            </div>
          </div>
          <div className="bg-white border border-black p-8 md:p-10 h-full flex flex-col justify-between card-shadow-orange transition-transform hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-white text-2xl md:text-3xl">
                  pivot_table_chart
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-black uppercase mb-4 tracking-tight">
                Better business outcomes.
              </h3>
              <p className="text-gray-600 text-sm md:text-md leading-relaxed">
                Well-designed user journeys reduce friction and highlight
                important tasks. By simplifying navigation and guiding
                decisions, UI/UX design increases engagement, improves
                conversions, and helps firms achieve better, measurable digital
                results.
              </p>
            </div>
          </div>
          <div className="bg-white border border-black p-8 md:p-10 h-full flex flex-col justify-between card-shadow-black transition-transform hover:-translate-y-1 ">
            <div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-white text-2xl md:text-3xl">
                  restart_alt
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-black uppercase mb-4 tracking-tight">
                Enhanced Trust and Credibility
              </h3>
              <p className="text-gray-600 text-sm md:text-md leading-relaxed">
                A smooth interface shows professionalism and reliability.
                Consistent images and smart interactions increase confidence.
                This makes users feel more at ease when using your product and
                helps strengthen your brand's long-term reputation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
