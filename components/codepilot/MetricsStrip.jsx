import { CODEPILOT_STATS } from "@/constants/codepilot";

export default function MetricsStrip() {
    return (
        <section className="bg-white border-b-2 border-black py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {CODEPILOT_STATS.map((stat, i) => (
                        <div key={i} className="group flex flex-col items-center">
                            <span className="font-display text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-1 group-hover:scale-105 transition-transform duration-300">
                                {stat.value}
                            </span>
                            <span className="text-black font-display font-bold text-[10px] uppercase tracking-[0.2em] opacity-60">
                                {stat.label}
                            </span>
                            <div className="w-8 h-[2px] bg-primary mt-3 group-hover:w-full transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
