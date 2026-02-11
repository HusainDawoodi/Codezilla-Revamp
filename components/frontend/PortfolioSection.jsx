import Image from "next/image";
import { PORTFOLIO_ITEMS } from "@/constants/frontend";

export default function PortfolioSection() {
  return (
    <section className="bg-charcoal py-20 md:py-[120px] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.5em] block mb-6">
              Portfolio Showcase
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              Our Latest Works
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm font-light">
            Transformative frontend results across diverse enterprise-scale
            industries.
          </p>
        </div>

        <div className="flex gap-8 md:gap-10 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className="min-w-[320px] md:min-w-[540px] bg-dark-accent p-1 snap-start group transition-all duration-500 rounded-[4px] border border-white/5 hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-obsidian rounded-[2px]">
                <Image
                  fill
                  alt={item.title}
                  src={item.image}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-8 md:p-10 space-y-4">
                <h4 className="text-2xl font-display font-bold text-white uppercase group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
