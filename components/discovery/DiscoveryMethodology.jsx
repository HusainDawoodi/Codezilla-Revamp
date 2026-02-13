import Image from "next/image";

export default function DiscoveryMethodology() {
  return (
    <section className="bg-white py-[90px] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative animate-entrance-fade">
          <div className="border-[1px] border-primary/30 p-1 rounded-xl">
            <div className="aspect-square w-full relative overflow-hidden rounded-xl bg-charcoal">
              <Image
                src="/images/who-we-are/culture-8.png"
                alt="Strategy Workshop"
                fill
                className="object-cover grayscale brightness-90 contrast-110"
              />
            </div>
          </div>
        </div>

        <div
          className="relative flex flex-col items-start pt-4 animate-entrance-fade"
          style={{ animationDelay: "0.2s" }}
        >
          {/* <div className="absolute top-0 right-0 flex items-center gap-3">
            <span className="text-[10px] font-bold text-zinc-400 tracking-[0.2em] font-mono">
              STRAT-PROC-02
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>

          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
            The
          </span> */}

          <h2 className="text-4xl lg:text-5xl font-black text-charcoal tracking-tighter leading-[0.9] uppercase mb-8 font-display">
            How We Help
          </h2>

          <p className="text-xl md:text-2xl text-zinc-600 font-medium leading-[1.8] text-balance max-w-lg">
            We steer ideas via systematic study, validation, and planning. This
            technique converts confusion into clarity. It enables you to create
            a clear, actionable product direction before development begins.
          </p>

          <div className="mt-12 flex items-center gap-4 border-t border-zinc-250 pt-8 w-full">
            <span className="material-symbols-outlined text-primary text-4xl">
              architecture
            </span>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Architectural Validation Protocol
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
