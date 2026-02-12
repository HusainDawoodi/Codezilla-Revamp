import { PLATFORM_CAPABILITIES } from "@/constants/tawkwise";

export default function PlatformCapabilities() {
    return (
        <section
            className="bg-charcoal text-white border-b-2 border-black animate-entrance-fade"
            style={{ animationDelay: "0.8s" }}
            id="solutions"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4 block">
                        Platform
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-4">
                        Enterprise-grade <span className="text-primary">capabilities</span>
                    </h2>
                    <div className="w-12 h-1 bg-primary mx-auto mb-6" />
                    <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
                        Everything you need to deploy, manage, and scale AI voice agents across your organization.
                    </p>
                </div>

                {/* Capabilities grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PLATFORM_CAPABILITIES.map((cap, i) => (
                        <div
                            key={cap.id}
                            className="group border-2 border-white/10 bg-white/[0.02] p-8 hover:border-primary/30 hover:bg-primary/5 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Decorative number */}
                            <span className="absolute top-4 right-4 font-display text-4xl font-bold text-outline-white opacity-30 group-hover:text-primary group-hover:opacity-20 transition-all">
                                {cap.id}
                            </span>

                            <span className="material-symbols-outlined text-primary text-3xl mb-5 block opacity-80 group-hover:opacity-100 transition-opacity">
                                {cap.icon}
                            </span>

                            <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                                {cap.title}
                            </h3>

                            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {cap.description}
                            </p>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
