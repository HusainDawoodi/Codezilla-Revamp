import { SUCCESS_PILLARS } from "@/constants/who-we-are";

export default function AboutSuccess() {
  return (
    <section className="bg-charcoal py-32 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4 block"></span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase ">
            WHY WORK WITH US
          </h2>
          <p className="text-gray-400 text-md md:text-lg mt-4">
            Codezilla, a web development company driven by creativity and
            passion, works with brands, startups, and enterprises to create
            engaging digital experiences. Our collaborative mentality and
            technical proficiency ensure that every idea becomes a successful
            product.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {SUCCESS_PILLARS.map((pillar, index) => (
            <div
              key={index}
              className="p-16 flex flex-col items-center text-center bg-charcoal group border border-white/10 rounded-none hover:border-primary transition-all duration-300 relative shadow-[4px_4px_0px_0px_rgba(255,109,0,1)]"
            >
              <div className="w-16 h-16 bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-primary transition-all">
                <span className="material-symbols-outlined text-white">
                  {pillar.icon}
                </span>
              </div>
              <h4 className="text-white font-display font-bold text-2xl uppercase mb-4">
                {pillar.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
