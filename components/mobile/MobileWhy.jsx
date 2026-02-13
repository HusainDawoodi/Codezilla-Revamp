import { MOBILE_WHY } from "@/constants/mobile";

export default function MobileWhy() {
  return (
    <section className="bg-[#f8f7f5] py-[90px] text-charcoal">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-4xl font-extrabold tracking-tight md:text-5xl">
          Why Mobile Engineering is Needed
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {MOBILE_WHY.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white p-10 shadow-sm transition-transform hover:-translate-y-2"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
              <p className="leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
