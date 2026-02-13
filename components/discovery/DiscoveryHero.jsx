import Image from "next/image";
import Button from "../ui/Button";
import TrustBadges from "../ui/TrustBadges";

export default function DiscoveryHero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 md:py-22 flex items-center bg-charcoal blueprint-grid overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 md:space-y-8 animate-entrance-fade">
          <div className="flex items-center gap-4">
            <span className="text-primary font-mono text-sm tracking-[0.6em] uppercase">
              Est. 10+ Years of Architecture
            </span>
            <div className="flex-1 h-px bg-white/10 max-w-[100px]"></div>
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white tracking-tighter uppercase mb-3">
              FROM IDEAS TO DIRECTION
            </h1>
          </div>
          <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed font-light border-l border-primary pl-6 md:pl-10">
            Product discovery transforms raw ideas into meaningful product
            direction. Instead of rushing into creation, we investigate actual
            user needs, corporate priorities, and technical possibilities in
            order to make smarter decisions. Uncertainty can be reduced to
            clarity through study, validation, and organised inquiry. This
            method guarantees that every feature, workflow, and investment is
            planned. It establishes a clear roadmap for development and aids in
            the creation of products that are designed to flourish in the
            marketplace.
          </p>
          <div className="space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Button variant="primary" size="md" href="#" icon="arrow_forward">
                START DISCOVERY
              </Button>

              <Button variant="outline-white" size="md" href="#">
                SPEAK TO US
              </Button>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-4">
            <TrustBadges />
          </div>
        </div>
        <div
          className="lg:col-span-5 relative hidden lg:flex justify-end h-full items-end animate-entrance-fade"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative w-full h-[600px] overflow-hidden grayscale contrast-125 mix-blend-luminosity border border-white/10 shadow-2xl rounded-sm">
            <Image
              alt="Lead Discovery Architect"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4najh_3jK3oKhWpdCwf5fDuALCwpVIaOWRplao6xXbwKjG4CFliQ9o9UHQk_aP79TiGp9DBa88O7YG4dp29rKOpNfFqq_GG0I-j3-B6OQuILEHJQDE8BSOK4As9IVtS7K7q4n-M2_dpPlA9X88qjpHHYg96u7wzP422Gkpi4U6y1BteuNmhcKCQZddHiDnyzY18lndJYIJ0tL898VXGAac2mA5rs32IyPWBg8JTJDus5ZWz2nRQNgY1DzsvMfvO8GB2CpRllq"
              className="object-cover"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-3 py-1 border border-primary/20">
                Principal Architect
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
