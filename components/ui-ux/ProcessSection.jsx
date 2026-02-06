
export default function ProcessSection() {
    return (
        <section className="bg-[#F9F7F2] py-32 px-12 border-y border-black/5">
            <div className="max-w-4xl mx-auto">
                <div className="mb-24 text-center">
                    <h2 className="font-display text-4xl font-bold text-black uppercase tracking-tight mb-4">UI/UX Design Process</h2>
                    <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em]">Strategic Vertical Execution</p>
                </div>
                <div className="space-y-12">
                    <div className="bg-white p-10 border border-black/5 relative group hover:border-primary transition-colors">
                        <div className="absolute -left-4 top-10 w-8 h-8 bg-black text-white font-mono text-xs flex items-center justify-center font-bold">01</div>
                        <div className="flex items-start gap-8">
                            <div className="p-4 border border-primary/20 bg-primary/5">
                                <span className="material-symbols-outlined text-primary text-4xl">travel_explore</span>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-bold text-black uppercase tracking-tight">Discover</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Stakeholder interviews and user research to gather requirements and understand the problem space.</p>
                                <div className="pt-4 border-t border-black/5">
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Key Deliverable</span>
                                    <p className="text-black font-bold text-sm">User Personas &amp; Business Requirements Document</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-10 border border-black/5 relative group hover:border-primary transition-colors">
                        <div className="absolute -left-4 top-10 w-8 h-8 bg-black text-white font-mono text-xs flex items-center justify-center font-bold">02</div>
                        <div className="flex items-start gap-8">
                            <div className="p-4 border border-primary/20 bg-primary/5">
                                <span className="material-symbols-outlined text-primary text-4xl">architecture</span>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-bold text-black uppercase tracking-tight">Define</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Creating personas and sitemaps to structure the information architecture and define scope.</p>
                                <div className="pt-4 border-t border-black/5">
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Key Deliverable</span>
                                    <p className="text-black font-bold text-sm">Information Architecture &amp; User Flow Mapping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-10 border border-black/5 relative group hover:border-primary transition-colors">
                        <div className="absolute -left-4 top-10 w-8 h-8 bg-black text-white font-mono text-xs flex items-center justify-center font-bold">03</div>
                        <div className="flex items-start gap-8">
                            <div className="p-4 border border-primary/20 bg-primary/5">
                                <span className="material-symbols-outlined text-primary text-4xl">brush</span>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-bold text-black uppercase tracking-tight">Design</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Interactive prototypes and high-fidelity visual designs that bring the concept to life.</p>
                                <div className="pt-4 border-t border-black/5">
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Key Deliverable</span>
                                    <p className="text-black font-bold text-sm">High-Fidelity Interactive Prototypes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-10 border border-black/5 relative group hover:border-primary transition-colors">
                        <div className="absolute -left-4 top-10 w-8 h-8 bg-black text-white font-mono text-xs flex items-center justify-center font-bold">04</div>
                        <div className="flex items-start gap-8">
                            <div className="p-4 border border-primary/20 bg-primary/5">
                                <span className="material-symbols-outlined text-primary text-4xl">verified</span>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-bold text-black uppercase tracking-tight">Deliver</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Production-ready assets and design systems for seamless engineering implementation.</p>
                                <div className="pt-4 border-t border-black/5">
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Key Deliverable</span>
                                    <p className="text-black font-bold text-sm">Design System &amp; Developer Handoff Assets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
