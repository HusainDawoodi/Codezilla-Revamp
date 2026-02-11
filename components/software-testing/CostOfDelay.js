import { COST_OF_DELAY } from '@/constants/software-testing';

export default function CostOfDelay() {
    return (
        <section className="bg-charcoal py-20 md:py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24 text-center">
                    <span className="text-primary font-mono text-xs uppercase tracking-[0.4em] block mb-4">The Narrative</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">Our Software Testing Expertise </h2>
                    <p className="text-gray-500 font-mono text-xs md:text-base uppercase italic">
                        "Finding a bug in production costs 100x more than in design."
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {COST_OF_DELAY.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            {/* Phase I */}
                            <div className="relative bg-white/5 border border-white/10 p-8 md:p-10 min-h-[400px] flex flex-col justify-center overflow-hidden">
                                <div className="absolute inset-0 opacity-10 circuit-pattern"></div>
                                <div className="relative z-10">
                                    {/* <span className="text-gray-500 font-mono text-xs uppercase tracking-widest block mb-4">
                                        {item.phase1.badge}
                                    </span> */}
                                    <h4 className="font-display text-2xl md:text-3xl font-bold uppercase text-white mb-4">
                                        {item.phase1.title}
                                    </h4>
                                    <p className="text-gray-400 text-base leading-relaxed">
                                        {item.phase1.description}
                                    </p>
                                </div>
                            </div>

                            {/* Link Line */}
                            <div className="flex justify-center h-12">
                                <div className="link-line"></div>
                            </div>

                            {/* Phase II */}
                            <div className="relative bg-obsidian border border-primary/30 p-8 md:p-10 min-h-[400px] flex flex-col justify-center overflow-hidden group hover:border-primary transition-colors">
                                <div className="blueprint-grid absolute inset-0 opacity-5"></div>
                                <div className="relative z-10">
                                    {/* <span className="text-primary font-mono text-xs uppercase tracking-widest block mb-4">
                                        {item.phase2.badge}
                                    </span> */}
                                    <h4 className="font-display text-2xl md:text-3xl font-bold uppercase text-primary glowing-text mb-4">
                                        {item.phase2.title}
                                    </h4>
                                    <p className="text-gray-400 text-base leading-relaxed">
                                        {item.phase2.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
