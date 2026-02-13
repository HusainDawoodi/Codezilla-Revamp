"use client";

import { REVIEWLY_STEPS } from "@/constants/reviewly";

export default function HowItWorks() {
    return (
        <section className="bg-paper py-24 border-b-2 border-black relative overflow-hidden">
            {/* Blueprint grid bg */}
            <div
                className="absolute inset-0 pointer-events-none opacity-100"
                style={{
                    backgroundSize: "40px 40px",
                    backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
            // Workflow
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-black uppercase tracking-tight">
                        How It Works
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black bg-white relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-black/10 -translate-y-1/2 z-0" />

                    {REVIEWLY_STEPS.map((step, i) => (
                        <div
                            key={i}
                            className={`relative p-8 lg:p-10 flex flex-col group hover:bg-black transition-all duration-500 z-10 ${i < REVIEWLY_STEPS.length - 1
                                    ? "border-b md:border-b-0 md:border-r border-black"
                                    : ""
                                }`}
                        >
                            {/* Number + Icon */}
                            <div className="flex justify-between items-start mb-8">
                                <span className="font-display text-6xl font-bold text-gray-200 group-hover:text-primary/80 transition-colors">
                                    {step.number}
                                </span>
                                <span className="material-symbols-outlined text-primary !text-4xl group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-display font-bold uppercase text-black mb-3 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>

                            {/* Description — 1 line */}
                            <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                                {step.description}
                            </p>

                            {/* Arrow connector */}
                            {i < REVIEWLY_STEPS.length - 1 && (
                                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-primary rounded-full items-center justify-center">
                                    <span className="material-symbols-outlined text-black text-sm">
                                        arrow_forward
                                    </span>
                                </div>
                            )}

                            {/* Hover underline */}
                            <div className="w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-auto pt-6" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
