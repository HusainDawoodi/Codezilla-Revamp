"use client";

import { SKYGUARD_STEPS } from "@/constants/skyguard";

export default function HowItWorks() {
    return (
        <section className="py-24 bg-white relative">
            {/* Blueprint Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundSize: '40px 40px', backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)' }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 border-l-2 border-primary pl-3">
                        The Workflow
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-black uppercase tracking-tighter">
                        THREE STEPS TO <span className="text-primary">OMNISCIENCE.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3">
                    {SKYGUARD_STEPS.map((step, i) => (
                        <div
                            key={step.num}
                            className={`relative p-8 lg:p-12 flex flex-col group hover:bg-black transition-all duration-500 z-10 ${i < SKYGUARD_STEPS.length - 1 ? 'md:border-r-2 border-black' : ''
                                }`}
                        >
                            {/* Giant Number Background */}
                            <div className="absolute top-8 right-8 text-8xl font-display font-black text-black/[0.03] group-hover:text-white/[0.03] transition-colors leading-none pointer-events-none">
                                {step.num}
                            </div>

                            <div className="w-12 h-12 bg-black text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-black transition-all">
                                <span className="material-symbols-outlined">{step.icon}</span>
                            </div>

                            <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight group-hover:text-white transition-colors">
                                {step.title}
                            </h3>

                            <p className="text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed font-light">
                                {step.text}
                            </p>

                            {/* Arrow connector for desktop */}
                            {i < SKYGUARD_STEPS.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 translate-z-10 bg-white p-1 border-2 border-black -translate-y-1/2 group-hover:bg-primary transition-colors">
                                    <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
