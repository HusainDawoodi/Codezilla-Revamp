import { SOLUTIONS } from "@/constants/who-we-are";

export default function AboutSolutions() {
  return (
    <section className="bg-paper py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, index) => (
            <div
              key={solution.id}
              className={`bg-white p-10 border border-gray-100 transition-all duration-300 flex flex-col relative overflow-hidden group  hover:shadow-[0_20px_40px_-15px_rgba(255,109,0,0.1)] ${
                index % 3 !== 2 ? "lg:border-r-0" : ""
              } ${index < 3 ? "border-b-0" : ""} hover:border hover:border-primary/50`}
            >
              <div className="flex justify-between items-center mb-12 relative z-10">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {solution.label}
                </span>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  <span className="text-xs font-bold text-black uppercase tracking-widest">
                    {solution.stat}
                  </span>
                </div>
              </div>
              <span className="absolute right-[-10px] top-[-10px] text-[120px] font-black text-gray-100/50 leading-none select-none pointer-events-none">
                {solution.id}
              </span>
              <h3 className="font-display font-bold text-2xl text-black uppercase mb-6 tracking-tight relative z-10">
                {solution.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-md mb-16 relative z-10">
                {solution.description}
              </p>
              <div className="mt-auto flex items-center gap-2 pt-6 border-t border-gray-50 relative z-10">
                <span className="material-symbols-outlined text-primary text-lg">
                  {solution.icon}
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {solution.bottomStat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
