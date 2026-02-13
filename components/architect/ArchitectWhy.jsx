import { ARCHITECT_WHY } from "@/constants/architect";

export default function ArchitectWhy() {
  return (
    <section className="bg-white py-24 px-6 lg:px-12 text-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter border-l-4 border-primary pl-6">
            Why Software <br />
            Architecture Matters
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {ARCHITECT_WHY.map((item, idx) => (
            <div
              key={idx}
              className="p-10 bg-white border border-gray-100 hover:border-primary/50 transition-all group"
            >
              <span className="material-symbols-outlined text-primary text-5xl mb-6 block">
                {item.icon}
              </span>
              <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
