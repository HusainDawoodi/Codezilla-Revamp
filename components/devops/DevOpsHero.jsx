import Button from "../ui/Button";
import TrustBadges from "../ui/TrustBadges";

export default function DevOpsHero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 md:py-22 flex items-center bg-charcoal blueprint-grid overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-primary font-mono text-sm tracking-[0.6em] uppercase">
              Deployment Architecture
            </span>
            <div className="flex-1 h-px bg-white/10 max-w-[100px]"></div>
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white tracking-tighter uppercase mb-3">
              DevOps Engineering <br />
              <span className="text-primary">for Faster, Smarter Delivery</span>
            </h1>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed font-light border-l border-primary pl-6 md:pl-10">
            DevOps engineering links development and operations. It includes
            managing the structure and tools needed to support high-quality
            software, fast delivery, and scalable systems. Working with a DevOps
            engineer ensures your infrastructure is efficient, automated, and
            increases system stability.
          </p>
          <div className="space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Button variant="primary" size="md" href="#" icon="arrow_forward">
                HIRE DEVOPS ENGINEERS
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
        <div className="lg:col-span-5 relative hidden lg:flex justify-center items-center h-[500px]">
          <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-60">
            <div className="absolute inset-0 border-[1px] border-primary/20 rotate-45"></div>
            <div className="absolute inset-4 border-[1px] border-primary/30 rotate-12"></div>
            <div className="absolute inset-8 border-[1px] border-primary/40 -rotate-6"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-9xl opacity-20">
                settings_input_component
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
