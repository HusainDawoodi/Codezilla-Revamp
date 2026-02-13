import { DEVOPS_WHY } from "@/constants/devops";

export default function DevOpsWhy() {
  return (
    <section className="bg-[#f8f7f5] py-24 px-6 text-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
            Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-charcoal uppercase">
            Why DevOps Engineering Matters
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEVOPS_WHY.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-10 border border-zinc-200 rounded-xl shadow-sm hover:shadow-xl transition-shadow"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-8 block">
                {item.icon}
              </span>
              <h3 className="text-2xl font-bold mb-4 uppercase">
                {item.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
