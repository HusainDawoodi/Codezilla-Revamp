import { REVIEWLY_FEATURES } from "@/constants/reviewly";

export default function FeatureIcons() {
    return (
        <section className="bg-charcoal py-24 border-b-2 border-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
            // Capabilities
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
                        What It Covers
                    </h2>
                </div>

                {/* Icon Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 border border-white/10">
                    {REVIEWLY_FEATURES.map((feature, i) => (
                        <div
                            key={i}
                            className="bg-charcoal p-8 flex flex-col items-center text-center group hover:bg-white transition-all duration-500 cursor-default"
                        >
                            <span className="material-symbols-outlined text-primary !text-5xl mb-4 group-hover:scale-110 group-hover:text-black transition-all duration-300">
                                {feature.icon}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-black transition-colors">
                                {feature.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
