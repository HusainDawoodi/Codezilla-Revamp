"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { HERO_STATS } from "@/constants/tawkwise";

export default function TawkwiseHero() {
    const [countersVisible, setCountersVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setCountersVisible(true), 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-[92vh] flex items-center bg-[#050505] overflow-hidden animate-entrance-fade pt-24 pb-12 border-b-2 border-black">
            {/* Background effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundSize: "60px 60px",
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left content */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 border border-primary/20">
                                AI Voice Platform
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2.5 py-1 border border-emerald-400/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                LIVE
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tighter leading-[0.9] mb-6">
                            AI VOICE
                            <br />
                            <span className="text-primary">AGENTS</span> FOR
                            <br />
                            EVERY <span className="text-primary">INDUSTRY</span>
                        </h1>

                        <p className="text-lg text-gray-400 mb-10 max-w-md font-light leading-relaxed">
                            Deploy intelligent voice agents that handle calls, qualify leads, and delight customers — in 20+ languages, 24/7.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <Button variant="primary" size="md" href="#" icon="call">
                                Book a Demo
                            </Button>
                            <a
                                href="#audio-demos"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors border-b border-gray-700 pb-1"
                            >
                                Try It Live
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Animated waveform visualization */}
                    <div className="relative">
                        <div className="border-2 border-white/10 bg-black/60 backdrop-blur-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                            {/* Title bar */}
                            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-mono ml-2">tawkwise — live agent</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-mono text-emerald-500">ACTIVE</span>
                                </div>
                            </div>

                            {/* Waveform visualization */}
                            <div className="px-6 py-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="material-symbols-outlined text-primary text-2xl">graphic_eq</span>
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Now Speaking</div>
                                        <div className="text-sm font-display text-white uppercase tracking-wide">Healthcare — Appointment Reminder</div>
                                    </div>
                                </div>

                                {/* Waveform bars */}
                                <div className="flex items-end justify-center gap-[3px] h-24 mb-6">
                                    {Array.from({ length: 40 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-[4px] bg-gradient-to-t from-primary/60 to-primary rounded-full waveform-bar"
                                            style={{
                                                animationDelay: `${i * 0.08}s`,
                                                animationDuration: `${0.8 + Math.random() * 0.8}s`,
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Conversation preview */}
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 shrink-0">AI</span>
                                        <p className="text-xs text-gray-400 leading-relaxed">
                                            &quot;Hi Sarah, this is a reminder that your appointment with Dr. Patel is scheduled for tomorrow at 2:30 PM...&quot;
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2 py-0.5 shrink-0">PATIENT</span>
                                        <p className="text-xs text-gray-400 leading-relaxed">
                                            &quot;Yes, I'd like to confirm. Can you also remind me to bring my insurance card?&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom metrics */}
                            <div className="grid grid-cols-3 border-t border-white/5">
                                <div className="px-4 py-3 border-r border-white/5 text-center">
                                    <div className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Sentiment</div>
                                    <div className="text-sm font-mono text-emerald-400 mt-0.5">Positive</div>
                                </div>
                                <div className="px-4 py-3 border-r border-white/5 text-center">
                                    <div className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Duration</div>
                                    <div className="text-sm font-mono text-white mt-0.5">1:24</div>
                                </div>
                                <div className="px-4 py-3 text-center">
                                    <div className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Language</div>
                                    <div className="text-sm font-mono text-primary mt-0.5">English</div>
                                </div>
                            </div>
                        </div>

                        {/* Glow */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-primary/10 blur-2xl rounded-full pointer-events-none" />
                    </div>
                </div>

                {/* Floating stat cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
                    {HERO_STATS.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-white/8 ${countersVisible ? "animate-count-up" : "opacity-0"}`}
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <span className="material-symbols-outlined text-primary text-2xl opacity-80">{stat.icon}</span>
                            <div>
                                <div className="font-display text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
