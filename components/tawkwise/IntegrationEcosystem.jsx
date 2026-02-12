import { INTEGRATIONS } from "@/constants/tawkwise";

export default function IntegrationEcosystem() {
    return (
        <section
            className="bg-charcoal text-white border-b-2 border-black animate-entrance-fade"
            style={{ animationDelay: "1.2s" }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4 block">
                        Integrations
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-4">
                        Connect with <span className="text-primary">your tools</span>
                    </h2>
                    <div className="w-12 h-1 bg-primary mx-auto mb-6" />
                    <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
                        Tawkwise integrates seamlessly with the tools your team already uses. No migration required.
                    </p>
                </div>

                {/* Integration grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {INTEGRATIONS.map((integration, i) => (
                        <div
                            key={integration.name}
                            className="group flex flex-col items-center justify-center gap-3 p-6 border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                        >
                            <span className="material-symbols-outlined text-3xl text-gray-500 group-hover:text-primary transition-colors">
                                {integration.icon}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors text-center">
                                {integration.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Bottom message */}
                <div className="text-center mt-10">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
                        + 50 more integrations available via API & Webhooks
                    </p>
                </div>
            </div>
        </section>
    );
}
