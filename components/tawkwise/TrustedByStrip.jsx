import { INDUSTRIES } from "@/constants/tawkwise";

export default function TrustedByStrip() {
    const items = [...INDUSTRIES, ...INDUSTRIES];

    return (
        <section
            className="bg-[#080808] border-b-2 border-black py-12 overflow-hidden animate-entrance-fade"
            style={{ animationDelay: "0.2s" }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
                <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gray-600">
                    Trusted by <span className="text-primary">500+</span> enterprises across 6 industries
                </p>
            </div>

            {/* Scrolling marquee */}
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

                <div className="flex animate-marquee" style={{ width: "max-content" }}>
                    {items.map((industry, i) => (
                        <div
                            key={`${industry.id}-${i}`}
                            className="flex items-center gap-3 px-8 py-3 mx-2 border border-white/5 bg-white/[0.02] hover:border-primary/20 hover:bg-white/5 transition-all duration-300 shrink-0"
                        >
                            <span className="material-symbols-outlined text-primary text-xl opacity-80">
                                {industry.icon}
                            </span>
                            <span className="text-sm font-display font-bold uppercase tracking-wider text-gray-400">
                                {industry.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
