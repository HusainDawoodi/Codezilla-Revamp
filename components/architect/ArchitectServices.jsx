import { ARCHITECT_SERVICES } from "@/constants/architect";

export default function ArchitectServices() {
  return (
    <section className="bg-charcoal text-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter mb-4">
            Software Architecture Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARCHITECT_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#1c1c1c] border border-white/5 p-8 hover:bg-white/5 transition-all"
            >
              <h4 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">
                {service.id}. {service.protocol}
              </h4>
              <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
