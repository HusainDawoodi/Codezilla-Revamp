import Button from "@/components/ui/Button";

export default function CTASection() {
    return (
        <section className="bg-charcoal py-32 border-b-2 border-black relative overflow-hidden">
            {/* Gradient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                {/* Heading */}
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-[0.9] mb-8">
                    Ready to ship
                    <br />
                    <span className="text-primary">cleaner code?</span>
                </h2>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button variant="primary" size="lg" href="#" icon="arrow_forward">
                        Request Early Access
                    </Button>
                </div>

                {/* Trust line */}
                <p className="text-xs text-gray-600 mt-8 font-bold uppercase tracking-widest">
                    Free for open source · No credit card required
                </p>
            </div>
        </section>
    );
}
