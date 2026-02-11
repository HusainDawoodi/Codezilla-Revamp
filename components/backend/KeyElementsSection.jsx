import { BACKEND_KEY_ELEMENTS } from "@/constants/backend";

export default function KeyElementsSection() {
  const elements = BACKEND_KEY_ELEMENTS;

  return (
    <section className="bg-white py-20 md:py-32 border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-16 md:mb-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-black uppercase tracking-tight mb-8">
            Key elements in backend development services
          </h2>
          <p className="text-gray-600 font-light text-lg leading-relaxed max-w-2xl">
            We are committed to helping you create a brighter and more
            sustainable future. Whether you're launching a business, designing a
            website, or building a brand, we provide the tools, expertise, and
            support you need to succeed. Let’s shape the futurebetter, smarter,
            and stronger.
          </p>
        </div>
        <div className="space-y-4">
          {elements.map((item, index) => (
            <div
              key={index}
              className="group relative flex items-center bg-[#FBFBF9] border-l-4 border-primary p-8 md:p-12 hover:bg-white transition-all overflow-hidden sticky top-25"
            >
              <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] font-black text-black/[0.03] select-none pointer-events-none">
                {item.id}
              </span>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 w-full">
                <div className="flex-1">
                  <h4 className="font-display text-2xl font-bold text-black uppercase mb-2 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-base max-w-xl font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="bg-white px-6 py-3 border border-black/5 rounded-[4px] self-start md:self-auto">
                  <span className="text-xs font-mono text-black uppercase tracking-widest font-bold">
                    {item.tag}
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
