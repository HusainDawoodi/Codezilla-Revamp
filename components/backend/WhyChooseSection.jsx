export default function WhyChooseSection() {
    return (
        <section className="bg-[#F9F8F3] py-20 md:py-32 overflow-hidden relative border-t border-black/5">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal uppercase tracking-tight">
                        Why Choose codezilla.io as Your Backend Development Company?
                    </h2>
                    <div className="mt-4 flex justify-center">
                        <div className="h-1 w-24 bg-primary"></div>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto space-y-8 md:space-y-16 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-primary/40 -translate-x-1/2 hidden md:block"></div>

                    <div className="relative flex justify-start md:pr-48 group">
                        <div className="w-full md:w-[85%] bg-white border border-charcoal/10 p-8 md:p-10 rounded-[4px] relative hover:border-primary transition-all duration-500 shadow-xl overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-primary font-mono text-[11px] tracking-[0.4em] font-bold uppercase">
                                    VALUE-01
                                </span>
                                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                            </div>
                            <h4 className="text-2xl font-display font-bold text-charcoal uppercase mb-6 tracking-tight relative z-10">
                                Experience in scalable solutions
                            </h4>
                            <p className="text-gray-600 text-base leading-relaxed font-light relative z-10">
                                We have a proven track record of building backend systems that
                                handle large amounts of data and high user traffic without
                                slowing down.
                            </p>
                        </div>
                    </div>

                    <div className="relative flex justify-end md:pl-48 group">
                        <div className="w-full md:w-[85%] bg-white border border-charcoal/10 p-8 md:p-10 rounded-[4px] relative hover:border-primary transition-all duration-500 shadow-xl overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-primary font-mono text-[11px] tracking-[0.4em] font-bold uppercase">
                                    VALUE-02
                                </span>
                                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                            </div>
                            <h4 className="text-2xl font-display font-bold text-charcoal uppercase mb-6 tracking-tight relative z-10">
                                Advanced Technology Stack
                            </h4>
                            <p className="text-gray-600 text-base leading-relaxed font-light relative z-10">
                                Our team uses the latest backend technologies and frameworks to
                                ensure your system is modern, secure, and ready for future
                                upgrades.
                            </p>
                        </div>
                    </div>

                    <div className="relative flex justify-start md:pr-48 group">
                        <div className="w-full md:w-[85%] bg-white border border-charcoal/10 p-8 md:p-10 rounded-[4px] relative hover:border-primary transition-all duration-500 shadow-xl overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-primary font-mono text-[11px] tracking-[0.4em] font-bold uppercase">
                                    VALUE-03
                                </span>
                                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                            </div>
                            <h4 className="text-2xl font-display font-bold text-charcoal uppercase mb-6 tracking-tight relative z-10">
                                Personalized Approach
                            </h4>
                            <p className="text-gray-600 text-base leading-relaxed font-light relative z-10">
                                We treat every project as unique, tailoring our backend services
                                to meet your specific business goals and technical requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
