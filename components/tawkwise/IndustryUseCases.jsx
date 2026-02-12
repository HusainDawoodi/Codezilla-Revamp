"use client";

import { useState } from "react";
import { INDUSTRIES } from "@/constants/tawkwise";

export default function IndustryUseCases() {
    const [activeIndustry, setActiveIndustry] = useState(0);

    const active = INDUSTRIES[activeIndustry];

    return (
        <section
            className="bg-charcoal text-white border-b-2 border-black animate-entrance-fade"
            style={{ animationDelay: "0.4s" }}
            id="industries"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                {/* Header */}
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4 block">
                    Industry Solutions
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-4">
                    Built for <span className="text-primary">your</span> industry
                </h2>
                <div className="w-12 h-1 bg-primary mb-10" />

                {/* Industry tabs */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {INDUSTRIES.map((industry, i) => (
                        <button
                            key={industry.id}
                            onClick={() => setActiveIndustry(i)}
                            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activeIndustry === i
                                    ? "bg-primary text-black border-primary"
                                    : "bg-white/5 text-gray-400 border-white/10 hover:border-primary/30 hover:text-white"
                                }`}
                        >
                            <span className="material-symbols-outlined text-sm">{industry.icon}</span>
                            {industry.title}
                        </button>
                    ))}
                </div>

                {/* Active industry content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Use cases */}
                    <div className="border-2 border-white/10 bg-white/[0.02] p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-primary text-3xl">{active.icon}</span>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{active.emoji} Industry</div>
                                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{active.title}</h3>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {active.useCases.map((useCase, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-4 border border-white/5 bg-white/[0.02] hover:border-primary/20 transition-colors"
                                >
                                    <span className="font-display text-lg font-bold text-primary opacity-60">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <p className="text-sm text-gray-300 leading-relaxed">{useCase}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Sample conversation */}
                    <div className="border-2 border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-3 bg-white/5 border-b border-white/10">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                Sample Conversation
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                <span className="text-[10px] font-mono text-primary">DEMO</span>
                            </div>
                        </div>

                        <div className="p-6 space-y-5">
                            {active.conversation.speakers.map((msg, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3"
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <span
                                        className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 shrink-0 mt-0.5 ${msg.role === "AI"
                                                ? "text-primary bg-primary/10"
                                                : "text-emerald-400 bg-emerald-400/10"
                                            }`}
                                    >
                                        {msg.role === "AI" ? "AI" : "USER"}
                                    </span>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        &quot;{msg.text}&quot;
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom bar */}
                        <div className="px-6 py-3 bg-white/5 border-t border-white/10 flex items-center justify-between">
                            <span className="text-[10px] text-gray-500 font-mono">
                                {active.conversation.speakers.length} messages
                            </span>
                            <span className="text-[10px] text-gray-500 font-mono">
                                {active.title} scenario
                            </span>
                        </div>
                    </div>
                </div>

                {/* All industries grid (mobile-friendly summary) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-12">
                    {INDUSTRIES.map((industry, i) => (
                        <button
                            key={industry.id}
                            onClick={() => setActiveIndustry(i)}
                            className={`p-4 text-center border transition-all duration-300 group ${activeIndustry === i
                                    ? "border-primary/30 bg-primary/5"
                                    : "border-white/5 bg-white/[0.02] hover:border-white/10"
                                }`}
                        >
                            <span className={`material-symbols-outlined text-2xl mb-2 block transition-colors ${activeIndustry === i ? "text-primary" : "text-gray-600 group-hover:text-gray-400"
                                }`}>
                                {industry.icon}
                            </span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest block ${activeIndustry === i ? "text-primary" : "text-gray-500"
                                }`}>
                                {industry.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
