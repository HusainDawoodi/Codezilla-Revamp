import { ROI_STATS } from "@/constants/tawkwise";

export default function ROIMetrics() {
    return (
        <section
            className="bg-[#050505] text-white border-b-2 border-black animate-entrance-fade relative overflow-hidden"
            style={{ animationDelay: "1.0s" }}
        >
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4 block">
                        Results
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-4">
                        Measurable <span className="text-primary">business impact</span>
                    </h2>
                    <div className="w-12 h-1 bg-primary mx-auto mb-6" />
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ROI_STATS.map((stat, i) => (
                        <div
                            key={i}
                            className="group border-2 border-white/10 bg-white/[0.02] p-8 text-center hover:border-primary/30 transition-all duration-500 relative"
                        >
                            {/* Icon */}
                            <span className="material-symbols-outlined text-primary text-2xl mb-4 block opacity-60 group-hover:opacity-100 transition-opacity">
                                {stat.icon}
                            </span>

                            {/* Large stat */}
                            <div className="font-display text-5xl md:text-6xl font-bold text-primary tracking-tighter mb-3 glowing-text">
                                {stat.value}
                            </div>

                            {/* Label */}
                            <div className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                                {stat.label}
                            </div>

                            {/* Description */}
                            <p className="text-xs text-gray-500 leading-relaxed">
                                {stat.description}
                            </p>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-hover:w-3/4 transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
