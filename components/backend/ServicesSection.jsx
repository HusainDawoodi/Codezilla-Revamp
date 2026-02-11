import { BACKEND_SERVICES } from "@/constants/backend";

export default function ServicesSection() {
    return (
        <section className="bg-charcoal py-32 border-t border-white/5 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-end justify-between mb-24">
                    <div className="max-w-3xl">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-8">
                            Our Backend Development Services For Every Business
                        </h2>
                        <div className="h-1 w-32 bg-primary"></div>
                    </div>
                    <div className="hidden lg:block text-right">
                        <span className="text-white/30 font-mono text-xs uppercase tracking-widest">
                            Archive Index: BE-001 - BE-006
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BACKEND_SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-dark-accent/40 border border-white/10 p-6 lg:p-12 rounded-[4px] hover:border-primary/50 transition-all duration-500"
                        >

                            <h4 className="text-2xl font-display font-bold text-white uppercase mb-8 group-hover:text-primary transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-gray-500 text-md leading-relaxed font-light mb-12 border-t border-white/10 pt-8">
                                <span className="text-white/20 block mb-4 font-mono text-xs tracking-widest uppercase">
                                    Executive Brief:
                                </span>
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
