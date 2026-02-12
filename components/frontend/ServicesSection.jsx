import { FRONTEND_SERVICES } from "@/constants/frontend";

export default function ServicesSection() {
  return (
    <section className="bg-charcoal py-20 md:py-[120px]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
            Front-End Web Development Services We Offer For Your Business
          </h2>
          <p className="text-gray-500 font-mono text-md uppercase tracking-[0.5em]">
            Scalable • Secure • Performant
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/10">
          {FRONTEND_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-charcoal p-8 md:p-12 space-y-8 hover:bg-dark-accent transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="font-display text-6xl font-bold text-white">
                  {service.id}
                </span>
              </div>
             
              <h4 className="text-2xl font-display font-bold text-white uppercase group-hover:text-primary transition-colors relative z-10">
                {service.title}
              </h4>
              <p className="text-gray-400 text-md leading-relaxed font-light relative z-10">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
