import Button from "@/components/ui/Button";

export default function TawkwiseCTA() {
    return (
        <section className="py-24 tawkwise-gradient relative overflow-hidden text-center border-b-2 border-black">
            {/* Top gradient line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_50px_rgba(255,109,0,0.5)]" />

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 block">
                    Get Started
                </span>

                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tighter mb-6">
                    READY TO
                    <br />
                    <span className="text-primary italic">TRANSFORM</span>
                    <br />
                    YOUR BUSINESS?
                </h2>

                <p className="text-gray-400 max-w-lg mx-auto leading-relaxed mb-10">
                    Join 500+ enterprises using Tawkwise to automate voice communications, reduce costs, and delight customers — 24/7.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Button variant="primary" size="lg" href="#" icon="call">
                        Book a Demo
                    </Button>
                    <Button variant="outline-white" size="lg" href="#" icon="rocket_launch">
                        Start Free Trial
                    </Button>
                </div>

                <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
                    No credit card required · Setup in under 5 minutes
                </p>
            </div>
        </section>
    );
}
