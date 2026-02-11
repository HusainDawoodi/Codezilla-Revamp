import { BACKEND_PROCESS_STEPS } from "@/constants/backend";

export default function ProcessSection() {
    const steps = BACKEND_PROCESS_STEPS;

    return (
        <section className="bg-[#0B0D11] py-32 overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-32">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
                        Back-end Development Process
                    </h2>
                    <p className="text-primary font-mono text-xs mt-6 tracking-[0.6em]">
                        PHASE: PRODUCTION ORCHESTRATION
                    </p>
                </div>
                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block"></div>
                    {/* <div className="absolute left-1/2 top-0 w-[2px] bg-primary -translate-x-1/2 h-full origin-top hidden md:block"></div> */}

                    <div className="space-y-16 md:space-y-24 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center justify-between group ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div
                                    className={`w-full md:w-[45%] ${index % 2 !== 0 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"
                                        } text-center md:text-inherit mb-8 md:mb-0`}
                                >
                                    <h4 className="text-xl font-display font-bold text-white uppercase mb-4">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm font-light">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className="w-12 h-12 bg-charcoal border-2 border-primary rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,109,0,0.6)] z-20">
                                    <span className="material-symbols-outlined text-primary text-xl">
                                        {step.icon}
                                    </span>
                                </div>

                                <div
                                    className={`w-full md:w-[45%] ${index % 2 !== 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                                        } text-center md:text-inherit mt-4 md:mt-0`}
                                >
                                    <span className="text-white/20 font-display text-5xl font-black">
                                        {step.id}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
