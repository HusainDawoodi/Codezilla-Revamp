import { FRONTEND_KEY_ELEMENTS } from "@/constants/frontend";

export default function KeyElementsSection() {
  return (
    <section className="bg-[#FBFBF9] py-20 md:py-[120px] border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex-col items-center gap-6 mb-16 md:mb-24">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-black uppercase tracking-tight mb-3">
            Discover the benefits of working with Codezilla
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-4xl font-light">
            We are committed to helping you create a brighter and more
            sustainable future. Whether you're launching a business, designing a
            website, or building a brand, we provide the tools, expertise, and
            support you need to succeed. Let’s shape the futurebetter, smarter,
            and stronger.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5">
          {FRONTEND_KEY_ELEMENTS.map((element, index) => {
            const icons = ["responsive_layout", "gesture", "timer", "api"];
            return (
              <div
                key={index}
                className="relative bg-white p-10 md:p-16 transition-all duration-500 hover:z-10 hover:shadow-2xl group overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-9xl font-display font-black text-black/[0.02] select-none pointer-events-none group-hover:text-primary/5 transition-colors">
                  {element.id}
                </div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary !text-4xl mb-10 block group-hover:scale-110 transition-transform origin-left">
                    {icons[index]}
                  </span>
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] font-bold mb-2 block">
                        {element.tag}
                      </span>
                      <h4 className="font-display text-xl lg:text-3xl font-bold text-black uppercase mb-4 tracking-tight">
                        {element.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed max-w-lg font-light">
                      {element.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
