
export default function CapabilitiesMatrix() {
    return (
        <section className="bg-[#F9F7F2] py-32 px-12 border-b border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex items-center justify-between">
                    <div className="max-w-md">
                        <h2 className="font-display text-4xl font-bold text-black uppercase tracking-tight mb-4">Capabilities Matrix</h2>
                        <p className="text-gray-600">Our distinction lies in systematic technical mastery.</p>
                    </div>
                    <div className="text-right hidden md:block">
                        <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] block">Efficiency Focused</span>
                        <span className="text-black font-mono text-[10px] uppercase tracking-[0.4em] block">Result Oriented</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-black/10">
                    {/* Item 1 */}
                    <div className="p-10 border-black/10 md:border-r border-b lg:border-b-0 space-y-8 hover:bg-white transition-colors group">
                        <div className="space-y-4">
                            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.2em] group-hover:text-black transition-colors">01 / Approach</span>
                            <h3 className="text-black font-display text-lg font-bold uppercase">Human-Centric</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-600 text-xs leading-relaxed">Designing with radical empathy to ensure products are globally accessible.</p>
                            <div className="bg-white p-4 border border-black/5 border-l-2 border-l-primary group-hover:border-l-black transition-colors shadow-sm">
                                <span className="text-black text-[10px] font-bold block mb-1">DATA POINT</span>
                                <p className="text-gray-500 text-[10px]">98% User satisfaction rate across enterprise products.</p>
                            </div>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="p-10 border-black/10 lg:border-r border-b lg:border-b-0 space-y-8 hover:bg-white transition-colors group">
                        <div className="space-y-4">
                            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.2em] group-hover:text-black transition-colors">02 / Logic</span>
                            <h3 className="text-black font-display text-lg font-bold uppercase">Data-Driven</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-600 text-xs leading-relaxed">Rigorous analytics and testing data to maximize performance conversion.</p>
                            <div className="bg-white p-4 border border-black/5 border-l-2 border-l-primary group-hover:border-l-black transition-colors shadow-sm">
                                <span className="text-black text-[10px] font-bold block mb-1">DATA POINT</span>
                                <p className="text-gray-500 text-[10px]">+25% average conversion lift after redesign.</p>
                            </div>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="p-10 border-black/10 md:border-r border-b md:border-b-0 space-y-8 hover:bg-white transition-colors group">
                        <div className="space-y-4">
                            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.2em] group-hover:text-black transition-colors">03 / Adaptability</span>
                            <h3 className="text-black font-display text-lg font-bold uppercase">Cross-Platform</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-600 text-xs leading-relaxed">Native brand experiences across web, iOS, Android, and wearables.</p>
                            <div className="bg-white p-4 border border-black/5 border-l-2 border-l-primary group-hover:border-l-black transition-colors shadow-sm">
                                <span className="text-black text-[10px] font-bold block mb-1">DATA POINT</span>
                                <p className="text-gray-500 text-[10px]">Zero UI fragmentation across 4 platform ecosystems.</p>
                            </div>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="p-10 space-y-8 hover:bg-white transition-colors group">
                        <div className="space-y-4">
                            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.2em] group-hover:text-black transition-colors">04 / Longevity</span>
                            <h3 className="text-black font-display text-lg font-bold uppercase">Scalable Systems</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-600 text-xs leading-relaxed">Robust atomic systems that eliminate long-term design debt.</p>
                            <div className="bg-white p-4 border border-black/5 border-l-2 border-l-primary group-hover:border-l-black transition-colors shadow-sm">
                                <span className="text-black text-[10px] font-bold block mb-1">DATA POINT</span>
                                <p className="text-gray-500 text-[10px]">50% Reduction in recurring design expenses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
