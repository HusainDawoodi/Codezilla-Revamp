export default function ProductGrid() {
    return (
        <section
            className="bg-[#0F1218] border-b-2 border-black py-24 relative overflow-hidden animate-entrance-fade"
            style={{ animationDelay: "1.4s" }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-energy-gradient-dark opacity-50 z-0"></div>
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-white/10 pb-8">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                            Internal IP
                        </span>
                        <h2 className="font-display text-5xl font-bold text-white uppercase tracking-tighter">
                            Our
                            <br />
                            products
                        </h2>
                    </div>
                    <p className="text-right text-sm font-medium text-gray-400 max-w-xs mt-4 md:mt-0">
                        Pre-built modules to jumpstart your transformation. Why build from
                        scratch?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* PRODUCT 1 */}
                    <div className="group relative flex flex-col h-full p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(255,109,0,0.05)] hover:shadow-[inset_0_0_40px_rgba(255,109,0,0.2)] transition-all duration-500 hover:-translate-y-2">
                        <div className="absolute inset-0  bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <div className="flex justify-between items-start mb-8">
                            <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                V 3.0
                            </span>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                                <span className="material-symbols-outlined text-primary group-hover:text-white">
                                    deployed_code
                                </span>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-display text-3xl font-bold uppercase mb-4 text-white group-hover:text-primary transition-colors">
                                Product Flywheel
                            </h3>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6 font-medium">
                                Automated CI/CD pipelines configured for enterprise scale.
                                Reduce deployment time by 400%.
                            </p>
                        </div>
                        <div className="mt-auto pt-6 border-t border-white/10">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                                Initialize{" "}
                                <span className="material-symbols-outlined text-sm">
                                    arrow_forward
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* PRODUCT 2 */}
                    <div className="group relative flex flex-col h-full p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(255,109,0,0.05)] hover:shadow-[inset_0_0_40px_rgba(255,109,0,0.2)] transition-all duration-500 hover:-translate-y-2">
                        <div className="absolute inset-0  bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <div className="flex justify-between items-start mb-8">
                            <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                SEC-OPS
                            </span>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                                <span className="material-symbols-outlined text-primary group-hover:text-white">
                                    security
                                </span>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-display text-3xl font-bold uppercase mb-4 text-white group-hover:text-primary transition-colors">
                                Security Guard:AM
                            </h3>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6 font-medium">
                                Real-time threat modeling and automated compliance checks woven
                                into your codebase.
                            </p>
                        </div>
                        <div className="mt-auto pt-6 border-t border-white/10">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                                Initialize{" "}
                                <span className="material-symbols-outlined text-sm">
                                    arrow_forward
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* PRODUCT 3 */}
                    <div className="group relative flex flex-col h-full p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(255,109,0,0.05)] hover:shadow-[inset_0_0_40px_rgba(255,109,0,0.2)] transition-all duration-500 hover:-translate-y-2">
                        <div className="absolute inset-0  bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <div className="flex justify-between items-start mb-8">
                            <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                N-NET
                            </span>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-lg">
                                <span className="material-symbols-outlined text-primary group-hover:text-black">
                                    psychology
                                </span>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-display text-3xl font-bold uppercase mb-4 text-white group-hover:text-primary transition-colors">
                                AI Integration
                            </h3>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6 font-medium">
                                Plug-and-play LLM connectors for internal data grounding and RAG
                                architecture.
                            </p>
                        </div>
                        <div className="mt-auto pt-6 border-t border-white/10">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                                Initialize{" "}
                                <span className="material-symbols-outlined text-sm">
                                    arrow_forward
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
