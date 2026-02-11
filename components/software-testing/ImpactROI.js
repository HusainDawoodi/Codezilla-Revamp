import { IMPACT_ROI } from '@/constants/software-testing';

export default function ImpactROI() {
    return (
        <section className="bg-paper py-20 md:py-32 px-6 md:px-12 border-y border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-20">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-black uppercase tracking-tight mb-4">Impact & ROI</h2>
                    <p className="text-gray-600 max-w-2xl text-sm md:text-base">
                        Technical rigor translated into measurable business value.
                        <span className="text-primary font-bold ml-1">Measured over 1000+ successful deployments.</span>
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {IMPACT_ROI.map((item, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-black font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
                                {item.value}
                            </h3>
                            <p className="text-black font-bold uppercase text-xs tracking-[0.2em]">
                                {item.label}
                            </p>
                            <p className="text-gray-500 text-base font-light leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
