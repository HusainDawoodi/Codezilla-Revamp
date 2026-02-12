"use client";

const capabilities = [
    {
        icon: "query_stats",
        title: "Anomaly Detection",
        description: "Machine learning models trained on your baseline traffic patterns. Flags deviations before they cascade into outages.",
    },
    {
        icon: "open_in_full",
        title: "Predictive Auto-Scaling",
        description: "Forecasts traffic surges 30 minutes ahead and pre-provisions resources. No cold starts, no degraded response times.",
    },
    {
        icon: "shield",
        title: "Adaptive Threat Response",
        description: "Identifies DDoS signatures, credential stuffing, and bot patterns in real-time. Deploys countermeasures automatically.",
    },
    {
        icon: "speed",
        title: "Latency Intelligence",
        description: "Continuous latency profiling across every region. Routes traffic to the lowest-latency endpoint without manual configuration.",
    },
    {
        icon: "receipt_long",
        title: "Cost Optimization",
        description: "Identifies idle resources and right-sizes instances based on actual usage data. Cuts cloud spend by an average of 34%.",
    },
    {
        icon: "history",
        title: "Incident Replay",
        description: "Full timeline reconstruction of every incident. Replay events, inspect metrics, and trace root causes post-mortem.",
    },
];

export default function InfraDashboard() {
    return (
        <section id="demo" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Core Capabilities</span>
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                            WHAT SKYGUARD <span className="text-primary">DOES.</span>
                        </h2>
                    </div>
                    <p className="text-sm text-gray-500 max-w-xs font-light leading-relaxed">
                        Six layers of intelligent infrastructure defense, working 24/7 so your team doesn't have to.
                    </p>
                </div>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
                    {capabilities.map((cap, i) => (
                        <div
                            key={cap.title}
                            className="bg-[#0a0a0a] p-8 lg:p-10 group hover:bg-white/[0.02] transition-colors duration-300"
                        >
                            <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                <span className="material-symbols-outlined text-primary text-xl group-hover:text-black transition-colors duration-300">
                                    {cap.icon}
                                </span>
                            </div>

                            <h3 className="text-sm font-bold text-white uppercase tracking-tight mb-3">
                                {cap.title}
                            </h3>

                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                {cap.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
