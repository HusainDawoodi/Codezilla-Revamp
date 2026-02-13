import { DEVOPS_SERVICES } from "@/constants/devops";

export default function DevOpsServices() {
  return (
    <section className="bg-charcoal py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <span className="text-primary font-bold tracking-widest text-sm uppercase">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-4 text-white uppercase">
            DevOps Engineering Services
          </h2>
        </div>
        <div className="hidden lg:block">
          <span className="text-zinc-600 font-mono text-xs tracking-widest">
            PROTOCOL: OPS_V4.0
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-white/10">
        {DEVOPS_SERVICES.map((service) => (
          <div
            key={service.id}
            className="group relative h-[400px] bg-charcoal border-r border-b border-white/10 p-12 overflow-hidden hover:bg-white/5 transition-all"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="text-[14rem] font-black text-white/[0.03] tracking-tighter">
                {service.id}
              </span>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-primary text-[10px] font-bold tracking-[0.4em] mb-4 block uppercase">
                  {service.protocol}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase leading-tight tracking-tight mb-6">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>
              <div className="flex justify-end">
                <span className="material-symbols-outlined text-primary text-5xl opacity-80 group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
