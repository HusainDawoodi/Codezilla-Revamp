
export default function BenefitsSection() {
    return (
        <section className="bg-[#F9F7F2] py-24 px-12 border-b border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex items-center justify-between">
                    <div className="max-w-md">
                        <h2 className="font-display text-4xl font-bold text-black uppercase tracking-tight mb-4">Benefits of UI/UX</h2>
                        <p className="text-gray-600">Enterprise-grade infrastructure for modern business demands.</p>
                    </div>
                    <div className="text-right hidden md:block">
                        <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] block">Scalable Systems</span>
                        <span className="text-black font-mono text-[10px] uppercase tracking-[0.4em] block">High Velocity</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-white border border-black p-10 h-full flex flex-col justify-between card-shadow-black transition-transform hover:-translate-y-1">
                        <div>
                            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-8">
                                <span className="material-symbols-outlined text-white text-3xl">bolt</span>
                            </div>
                            <h3 className="font-display text-2xl font-bold text-black uppercase mb-4 tracking-tight">Elite Performance</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Infrastructure tuned for extreme speed, reducing application latency and improving end-user experience across all touchpoints.</p>
                        </div>
                    </div>
                    <div className="bg-white border border-black p-10 h-full flex flex-col justify-between card-shadow-orange transition-transform hover:-translate-y-1">
                        <div>
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-8">
                                <span className="material-symbols-outlined text-white text-3xl">pivot_table_chart</span>
                            </div>
                            <h3 className="font-display text-2xl font-bold text-black uppercase mb-4 tracking-tight">Dynamic Flexibility</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Instantly pivot and scale your resources as your business needs evolve, without the constraints of physical hardware.</p>
                        </div>
                    </div>
                    <div className="bg-white border border-black p-10 h-full flex flex-col justify-between card-shadow-black transition-transform hover:-translate-y-1">
                        <div>
                            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-8">
                                <span className="material-symbols-outlined text-white text-3xl">restart_alt</span>
                            </div>
                            <h3 className="font-display text-2xl font-bold text-black uppercase mb-4 tracking-tight">Business Continuity</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Comprehensive failover systems and automated backup protocols that ensure your operations never skip a beat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
