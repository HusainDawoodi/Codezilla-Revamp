import Image from "next/image";
import Button from "../ui/Button";
import TrustBadges from "../ui/TrustBadges";

export default function ArchitectureHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-charcoal pt-24 pb-24 overflow-hidden blueprint-grid">
      <div className="container mx-auto px-6 md:px-6 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-8">
            SOFTWARE ARCHITECTURE
          </h1>
          <div className="max-w-3xl mb-10">
            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              In Codezilla, we believe software architecture is more than
              arranging the right tools. It is about creating a plan to make
              your software scalable and flexible so it can grow with your needs
              in the future. We examine the architecture with consideration of
              the software performance, maintainability, and business objectives
              to ensure we create solid, adaptable software.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <Button variant="primary" size="md" href="#" icon="arrow_forward">
              INITIATE BLUEPRINT PHASE
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-8">
            <TrustBadges />
          </div>
        </div>
        {/* <div className="w-full lg:w-1/2 relative py-20 lg:py-0"> */}
        {/* <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-75 opacity-30"></div>
            <div className="relative w-full aspect-[4/3] max-w-xl mx-auto">
              <div className="absolute inset-0 bg-zinc-900/80 border border-white/10 p-8 shadow-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <span className="material-symbols-outlined text-6xl text-primary mb-4 block">
                    architecture
                  </span>
                  <span className="block text-xs font-mono text-primary tracking-widest">
                    SYSTEM_BLUEPRINT_ACTIVE
                  </span>
                </div>
                <div className="absolute -inset-1 bg-primary/10 blur-xl -z-10"></div>
              </div>
            </div> */}
        {/* </div> */}
        <div className="lg:col-span-5 relative hidden lg:flex justify-end h-full items-end">
          <div className="relative w-full h-[600px] overflow-hidden grayscale contrast-125 mix-blend-luminosity border border-white/10">
            <Image
              alt="Lead Architect"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZkdupBasrSHB9Dk4CJgvofx9GlXBWEvhiFLT42_ENdfdXlRFLZ2dlZM_GsXlxOUJppJSFEEMq9id2sgXcVGkWUC-AhKYJK48gIGN7Ree0oYOWq0tudv2-ob2UC19WKZFq6nNZQzVK_88ITuGh5_pFJooQdlKZ83KSArH2vLph8FINIgbsjiqfhjoJuEq4copvXWcTQ9ClX5ZuHg2mQDDHWZ0qLqo7LW5023wkNUGeY_sn9o92kLwZ1kd3G82Rt5hqvMf6u3Fd"
              className="object-cover"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
