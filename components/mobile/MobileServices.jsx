import { MOBILE_SERVICES } from "@/constants/mobile";

export default function MobileServices() {
  return (
    <section className="bg-charcoal py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="mb-16 text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
          Mobile Engineering Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOBILE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-xl bg-[#1c1c1c] border border-white/5 p-8 transition-all hover:border-primary/50"
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="text-4xl font-black text-white/10 group-hover:text-primary transition-colors">
                  {service.id}
                </span>
                <div className="text-primary">
                  <span className="material-symbols-outlined text-4xl">
                    {service.icon}
                  </span>
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white uppercase">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
