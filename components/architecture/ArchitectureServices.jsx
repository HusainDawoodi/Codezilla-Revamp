import { ARCHITECTURE_SERVICES } from "@/constants/architecture";

export default function ArchitectureServices() {
  return (
    <section className="bg-charcoal py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">
            Service Catalog
          </span>
          <h2 className="text-5xl font-black  text-white uppercase mt-2">
            Software Architecture Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/10">
          {ARCHITECTURE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#0c0c0c] p-8 min-h-[300px] overflow-hidden"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  {/* <span className="text-zinc-600 font-mono text-[10px] block mb-4">
                    {service.id}
                  </span> */}
                  <h3 className="text-xl font-bold text-white uppercase leading-tight">
                    {service.title}
                  </h3>
                </div>
                <div className="">
                  <p className="text-base text-zinc-400 mb-8">
                    {service.description}
                  </p>
                  <span className="material-symbols-outlined text-primary !text-4xl">
                    {service.icon}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
