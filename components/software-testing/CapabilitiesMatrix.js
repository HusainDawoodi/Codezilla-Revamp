import { CAPABILITIES_MATRIX } from '@/constants/software-testing';

export default function CapabilitiesMatrix() {
    return (
        <section className=" bg-paper py-20 md:py-32 border-b border-black/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="mb-16 md:mb-24">

                    <h2 className="font-display text-4xl md:text-5xl font-bold text-black uppercase tracking-tight mb-4">Why choose Codezila for software testing services?
                    </h2>
                    <p className="text-gray-600 max-w-4xl font-light text-sm md:text-lg">
                        Codezila delivers reliable, end-to-end software testing services designed to ensure your software performs flawlessly across platforms. With experienced testers, advanced tools, and a structured testing process, Codezila focuses on accuracy, speed, and security.

                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 md:gap-y-24">
                    {CAPABILITIES_MATRIX.map((item) => (
                        <div key={item.id} className="relative group">
                            <div className="absolute -top-10 md:-top-12 -left-4 md:-left-6 font-display text-8xl md:text-[12rem] font-bold text-black opacity-[0.03] leading-none pointer-events-none select-none">
                                {item.id}
                            </div>
                            <div className="relative z-10 space-y-8">
                                <div>
                                    <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest flex items-center gap-2 mb-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                                        {item.failureBadge}
                                    </span>
                                    <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                {/* <div className="pt-6 md:pt-8 border-t border-black/5">
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-4">
                                        {item.responseBadge}
                                    </span>
                                    <p className="text-lg md:text-xl font-display font-bold leading-tight text-black italic">
                                        {item.response}
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
