"use client";

import { SKYGUARD_FEATURES } from "@/constants/skyguard";

export default function FeatureIcons() {
    return (
        <section className="bg-white border-y-2 border-black">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {SKYGUARD_FEATURES.map((feature, i) => (
                    <div
                        key={feature.label}
                        className={`flex flex-col items-center justify-center p-8 lg:p-12 transition-all duration-300 group ${i < SKYGUARD_FEATURES.length - 1 ? 'border-r-2 border-black' : ''
                            } hover:bg-black overflow-hidden relative`}
                    >
                        {/* Background Icon Watermark */}
                        <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-7xl text-black/[0.03] group-hover:text-white/[0.03] transition-colors">
                            {feature.icon}
                        </span>

                        <span className="material-symbols-outlined text-primary text-2xl mb-4 group-hover:scale-125 transition-transform duration-500">
                            {feature.icon}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-black group-hover:text-white text-center">
                            {feature.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
