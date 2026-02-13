import { DISCOVERY_CAPABILITIES } from "@/constants/discovery";

export default function DiscoveryCapabilities() {
  return (
    <section className="py-32 px-6 md:px-8 bg-[#F3F4F6] text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 animate-entrance-fade">
          <span className="text-primary font-bold tracking-widest text-sm uppercase">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-4 font-display uppercase">
            What We Bring to Your Discovery Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {DISCOVERY_CAPABILITIES.map((item, idx) => {
            let colSpan = "md:col-span-1";
            if (idx === 0 || idx === 3) colSpan = "md:col-span-3";

            const isDark = item.variant === "dark";
            const isPrimary = item.variant === "primary";

            return (
              <div
                key={item.id}
                className={`
                  p-10 border border-zinc-200 flex flex-col justify-between transition-all duration-300 rounded-xl animate-entrance-fade
                  ${colSpan}
                  ${isDark ? "!bg-charcoal text-white border-none" : ""}
                  ${isPrimary ? "bg-primary text-white border-none" : "bg-white hover:bg-zinc-50"}
                `}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-12">
                  <span
                    className={`text-6xl md:text-8xl font-black ${isDark ? "text-white/5" : isPrimary ? "text-white/20" : "text-zinc-100"}`}
                  >
                    {item.id}
                  </span>
                  <span
                    className={`material-symbols-outlined !text-5xl ${isPrimary ? "text-white" : "text-primary"}`}
                  >
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase font-display leading-tight">
                    {item.title}
                  </h3>
                  <p
                    className={`text-lg leading-relaxed ${isDark ? "text-zinc-400" : isPrimary ? "text-white/90" : "text-zinc-500"}`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
