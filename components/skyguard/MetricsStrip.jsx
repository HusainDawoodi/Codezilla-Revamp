"use client";

import { SKYGUARD_STATS } from "@/constants/skyguard";

export default function MetricsStrip() {
    return (
        <section className="bg-white border-b-2 border-black py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {SKYGUARD_STATS.map((stat, i) => (
                        <div key={stat.label} className="flex flex-col items-center md:items-start group">
                            <div className="flex items-baseline gap-1">
                                <span className="font-display text-4xl md:text-5xl font-bold text-black tracking-tighter">
                                    {stat.value}
                                </span>
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
