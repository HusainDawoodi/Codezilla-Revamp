import Image from "next/image";
import Button from "../ui/Button";
import TrustBadges from "../ui/TrustBadges";

export default function ArchitectHero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 md:py-22 flex items-center bg-charcoal blueprint-grid overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-primary font-mono text-sm tracking-[0.6em] uppercase">
              System Architecture
            </span>
            <div className="flex-1 h-px bg-white/10 max-w-[100px]"></div>
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white tracking-tighter uppercase mb-3">
              Architecting Software <br />
              <span className="text-primary">That Scales</span>
            </h1>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed font-light border-l border-primary pl-6 md:pl-10">
            Software architecture serves as a system's blueprint for determining
            how a system's functions evolve, grow, and change over time. The
            better the blueprint, the more the business architecture improves
            reliability, and lowers the system's complexity.
          </p>
          <div className="space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Button variant="primary" size="md" href="#" icon="arrow_forward">
                START YOUR JOURNEY
              </Button>

              <Button variant="outline-white" size="md" href="#">
                OUR WORK
              </Button>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-4">
            <TrustBadges />
          </div>
        </div>
        <div className="lg:col-span-5 relative hidden lg:flex justify-end h-full items-end">
          <div className="relative w-full h-[600px] overflow-hidden grayscale contrast-125 mix-blend-luminosity border border-white/10 shadow-2xl rounded-sm">
            <Image
              alt="Lead Software Architect"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXZWvO05g0LEhx5mPZdZ4vgxPtZYf70R3PLCLqT5MUEcJ7ndOQ8f-5pXCCdrFZL87LtANGXT2iyr8YPvuM1Tny8EP7nXGiTMFOzpm09CKbAPLC47OKDP8xt4X77h-EOXp-X6lfz1QYib5e65CN1Eken2Ki0gHAZ2n_LVlFPKo4hfRtZBhhjavk_AMD1XkKVgUIo5vPOnVhsJId0Z4fpVIw37RmS0FDp02Psb2RMcWgUC64OpEfT5-nmSzQm9fx4evf3vQ8xF2Y"
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
