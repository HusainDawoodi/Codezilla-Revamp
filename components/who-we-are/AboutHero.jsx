import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-obsidian overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/who-we-are/banner.png')] opacity-50 bg-no-repeat bg-cover"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[linear-gradient(to_right,rgba(1,1,1,0.1)_50%,transparent_50%)] blur-[40px] "></div>
        {/*  <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              height="40"
              id="hero-dots"
              patternUnits="userSpaceOnUse"
              width="40"
              x="0"
              y="0"
            >
              <circle cx="2" cy="2" fill="#FF6D00" r="1"></circle>
            </pattern>
          </defs>
          <rect fill="url(#hero-dots)" height="100%" width="100%"></rect>
        </svg> */}
      </div>

      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full opacity-40 lg:opacity-100 z-10 pointer-events-none">
        <div className="relative w-full h-full">
          {/* <Image
            alt="Leadership Portrait"
            className="w-full h-full object-cover grayscale brightness-75 mix-blend-lighten"
            src="/images/who-we-are/leadership-portrait.png"
            fill
          /> */}
          {/* <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-[2px] h-32 bg-cyan-accent blur-sm animate-pulse"></div>
            <div className="absolute top-2/3 right-1/3 w-[2px] h-48 bg-primary blur-sm animate-pulse opacity-50"></div>
            <div className="absolute bottom-1/4 right-10 w-48 h-[1px] bg-cyan-accent/30 blur-sm"></div>
          </div> */}
          {/* <div className="absolute top-1/2 right-1/4 -translate-y-1/2 space-y-24">
            <div className="flex items-center gap-4 animate-float">
              <div className="w-2 h-2 bg-cyan-accent shadow-[0_0_10px_#00E5FF]"></div>
              <div className="border-l border-cyan-accent/50 pl-4">
                <p className="text-[10px] text-cyan-accent font-bold tracking-widest uppercase">
                  AI Core
                </p>
                <p className="text-[8px] text-white/40 font-mono tracking-tighter">
                  NODE_0942_ACTIVE
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 animate-float [animation-delay:1.5s]">
              <div className="w-2 h-2 bg-primary shadow-[0_0_10px_#FF6D00]"></div>
              <div className="border-l border-primary/50 pl-4">
                <p className="text-[10px] text-primary font-bold tracking-widest uppercase">
                  Neural Net
                </p>
                <p className="text-[8px] text-white/40 font-mono tracking-tighter">
                  DATA_STREAM_STABLE
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-1/4 right-[20%] w-64 h-64 rounded-full border border-white/5 animate-spin-slow"></div>
          <div className="absolute top-1/4 right-[20%] w-64 h-64 rounded-full border-t border-cyan-accent/20 animate-spin-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/40 to-transparent"></div> */}
        </div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-primary"></span>
            <span className="text-primary text-xs font-bold tracking-[0.6em] uppercase">
              SYSTEMS ONLINE • EST. 2018
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-5xl font-bold text-white   uppercase mb-8">
            Welcome to Codezilla Technology A Development & Innovation Agency
          </h1>
          <p className="text-sm lg:text-lg text-gray-200 mb-12 font-light max-w-2xl leading-relaxed">
            At Codezilla, we empower businesses through technology-driven
            solutions, advanced AI features, and creative innovation. Our expert
            team builds world-class digital products, mobile applications, and
            enterprise solutions that boost growth, efficiency, and large-scale
            transformation. With a strong global presence, we collaborate with
            organisations all over the world to build intuitive, scalable, and
            future-ready digital experiences that have a long-term impact. era.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Button variant="primary" size="md" icon="arrow_forward" href="#">
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
