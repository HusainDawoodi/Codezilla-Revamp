import { RAPID_IMPORTANCE } from "@/constants/rapid";

export default function RapidImportance() {
  return (
    <section className="py-32 bg-[#F3F4F6] border-y border-black/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 animate-entrance-fade">
          <div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.5em] block mb-4">
              Act 02 // Strategic Logic
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase leading-[0.9] text-charcoal font-display">
              The Importance of Rapid Prototyping
            </h2>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-base md:text-lg text-black/60 leading-relaxed">
            Rapid prototyping transforms concepts into tested experiences at an
            early stage, bridging the gap between ideas and execution. Before
            development starts, it enables teams to investigate actual user
            flows, verify hypotheses, and find usability issues. This method
            expedites decision-making, lowers the need for expensive revisions,
            and unites stakeholders behind a common goal. Clarity makes the
            difference; you build on insight rather than conjecture, which leads
            to better planning, quicker iterations, and stronger, more
            user-focused solutions that are prepared for confident development.
          </p>
        </div>
        {/* <div className="space-y-6">
          {RAPID_IMPORTANCE.map((item, idx) => (
            <div
              key={item.id}
              className="group relative bg-white border border-black/5 overflow-hidden transition-all duration-700 hover:h-64 h-24 flex items-center animate-entrance-fade"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              // {/* Animated Accent Line 
              <div className="absolute left-0 top-0 w-[2px] bg-primary h-8 transition-all duration-500 group-hover:h-full"></div>

              <div className="w-full flex items-center justify-between px-8 md:px-12 transition-all duration-700">
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-black/10 font-display text-4xl font-bold">
                    {item.id}
                  </span>
                  <h3 className="text-lg md:text-2xl font-bold tracking-tight uppercase group-hover:text-primary transition-colors font-display">
                    {item.title}
                  </h3>
                </div>

                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-700 max-w-lg text-right">
                  <p className="text-base text-black/60 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Ghost Icon
              <div className="absolute right-24 top-1/2 -translate-y-1/2 opacity-0 -translate-x-12 group-hover:opacity-5 transition-all duration-700 pointer-events-none">
                <span className="material-symbols-outlined text-[10rem] text-primary">
                  {item.icon}
                </span>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
