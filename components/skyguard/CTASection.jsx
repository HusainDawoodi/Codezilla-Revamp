"use client";

import Button from "@/components/ui/Button";

export default function CTASection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden text-center">
            {/* Animated gradient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_50px_rgba(255,109,0,0.5)]" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tighter mb-10">
                    STOP REACTING.
                    <br />
                    START <span className="text-primary italic">PREDICTING.</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Button variant="primary" size="lg" href="#" icon="rocket_launch">
                        Apply for Beta Access
                    </Button>
                </div>

                <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
                    Built for teams with zero compromise on stability
                </p>
            </div>
        </section>
    );
}
