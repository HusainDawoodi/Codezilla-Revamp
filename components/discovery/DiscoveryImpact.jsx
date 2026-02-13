import { DISCOVERY_IMPACT } from "@/constants/discovery";

export default function DiscoveryImpact() {
  return (
    <section className="flex flex-col">
      {DISCOVERY_IMPACT.map((item, idx) => (
        <div
          key={idx}
          className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

          <div className="relative z-10 text-center px-8 animate-entrance-fade">
            <span className="material-symbols-outlined text-primary text-7xl md:!text-8xl mb-8 block">
              {item.icon}
            </span>
            <h2 className="text-[12vw] md:text-[8vw] font-black text-white  leading-none mb-6 font-display uppercase">
              {item.title}
            </h2>
            <p className="text-sm md:text-2xl font-medium text-white/80 max-w-3xl mx-auto leading-tight">
              {item.description}
            </p>
          </div>

          {/* Blend mask for bottom transition */}
          {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20"></div> */}
        </div>
      ))}
    </section>
  );
}
