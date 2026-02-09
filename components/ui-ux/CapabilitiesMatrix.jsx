export default function CapabilitiesMatrix() {
  return (
    <section className="bg-[#F9F7F2] py-20 md:py-32 px-6 md:px-12 border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black uppercase tracking-tight mb-4">
              Capabilities Matrix
            </h2>
            <p className="text-gray-600 text-sm md:text-md">
              Our strength is purposeful UI/UX craftsmanship.
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-primary font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] block">
              Experience-driven
            </span>
            <span className="text-black font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] block">
              insight-led
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-black/10">
          {/* Item 1 */}
          <div className="p-8 md:p-10 border-black/10 sm:border-r border-b lg:border-b-0 space-y-4 hover:bg-white transition-colors group flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-primary text-[10px] md:text-xs uppercase tracking-[0.2em] group-hover:text-black transition-colors">
                01 / User Understanding
              </span>
              <h3 className="text-black font-display text-lg md:text-xl font-bold uppercase">
                Human-Centric Design
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                We create straightforward, inclusive interfaces based on
                extensive user research to ensure smooth experiences for
                different audiences.
              </p>
              <div className="bg-white p-4 border border-black/5 border-l-2 border-l-primary group-hover:border-l-black transition-colors shadow-sm">
                <span className="text-black text-sm font-bold block mb-1">
                  Data shows
                </span>
                <p className="text-gray-500 text-sm">
                  95% boost in usability evaluations for modified goods.
                </p>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="p-8 md:p-10 border-black/10 lg:border-r border-b lg:border-b-0 space-y-4 hover:bg-white transition-colors group flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-primary text-[10px] md:text-xs uppercase tracking-[0.2em] group-hover:text-black transition-colors">
                02 / Experience Strategy
              </span>
              <h3 className="text-black font-display text-lg md:text-xl font-bold uppercase">
                Data-Informed UX
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                Behavioral insights, heatmaps, and usability testing guide every
                decision to optimize user journeys and conversions.
              </p>
              <div className="bg-white p-4 border border-black/5 border-l-2 border-l-primary group-hover:border-l-black transition-colors shadow-sm">
                <span className="text-black text-sm font-bold block mb-1">
                  Data shows
                </span>
                <p className="text-gray-500 text-sm">
                  30% increase in engagement following UX enhancement.
                </p>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="p-8 md:p-10 border-black/10 sm:border-r border-b sm:border-b-0 space-y-4 hover:bg-white transition-colors group flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-primary text-[10px] md:text-xs uppercase tracking-[0.2em] group-hover:text-black transition-colors">
                03 / Interface Consistency
              </span>
              <h3 className="text-black font-display text-lg font-bold uppercase">
                Cross-Device Experience
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                Effective user interface systems provide consistent,
                brand-aligned experiences across web, mobile, and upcoming
                platforms.
              </p>
              <div className="bg-white p-4 border border-black/5 border-l-2 border-l-primary group-hover:border-l-black transition-colors shadow-sm">
                <span className="text-black text-sm font-bold block mb-1">
                  Data shows
                </span>
                <p className="text-gray-500 text-sm">
                  100% visual and interface consistency across platforms.
                </p>
              </div>
            </div>
          </div>
          {/* Item 4 */}
          <div className="p-8 md:p-10 space-y-4 hover:bg-white transition-colors group flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-primary text-[10px] md:text-xs uppercase tracking-[0.2em] group-hover:text-black transition-colors">
                04 / Design Scalability
              </span>
              <h3 className="text-black font-display text-lg font-bold uppercase">
                Future-Ready Systems
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                Scalable design solutions are designed to grow, eliminating
                friction, rework, and long-term UX debt.
              </p>
              <div className="bg-white p-4 border border-black/5 border-l-2 border-l-primary group-hover:border-l-black transition-colors shadow-sm">
                <span className="text-black text-sm font-bold block mb-1">
                  Data shows
                </span>
                <p className="text-gray-500 text-sm">
                  45% reduction in design iteration time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
