
export default function ImpactSection() {
    return (
        <section className="bg-[#F9F7F2] py-32 px-12 border-b border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="font-display text-4xl font-bold text-black uppercase tracking-tight mb-4">Impact &amp; ROI</h2>
                    <p className="text-gray-600 max-w-xl">Strategic design isn't just an expense—it's a quantifiable driver for business growth and operational efficiency.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                    <div className="flex items-start gap-6 group">
                        <div className="w-1 bg-primary/20 h-full group-hover:bg-primary transition-colors"></div>
                        <div className="space-y-2">
                            <h3 className="text-black font-display text-2xl font-bold uppercase tracking-tight">Boost Engagement by 45%</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">By reducing friction in key user journeys and implementing behavioral design patterns, we significantly increase average session duration and task completion rates.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                        <div className="w-1 bg-primary/20 h-full group-hover:bg-primary transition-colors"></div>
                        <div className="space-y-2">
                            <h3 className="text-black font-display text-2xl font-bold uppercase tracking-tight">Reduce Development Costs by 30%</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Comprehensive design systems and validated wireframes eliminate expensive mid-development pivots and rework for your engineering team.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                        <div className="w-1 bg-primary/20 h-full group-hover:bg-primary transition-colors"></div>
                        <div className="space-y-2">
                            <h3 className="text-black font-display text-2xl font-bold uppercase tracking-tight">Accelerate Time-to-Market</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Standardized component libraries allow developers to build 40% faster, ensuring your product reaches the market ahead of competitors.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                        <div className="w-1 bg-primary/20 h-full group-hover:bg-primary transition-colors"></div>
                        <div className="space-y-2">
                            <h3 className="text-black font-display text-2xl font-bold uppercase tracking-tight">Maximize Customer Lifetime Value</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Intuitive UX reduces churn and fosters loyalty, resulting in higher retention rates and increased revenue from existing user bases.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
