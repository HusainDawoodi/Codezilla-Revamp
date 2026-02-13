import { MOBILE_BENEFITS } from "@/constants/mobile";

export default function MobileBenefits() {
  return (
    <section className="bg-[#fcfbf9] py-24 text-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Why Invest in Mobile Engineering Expertise
          </h2>
          <div className="mt-4 h-1.5 w-32 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-start max-w-6xl mx-auto">
          {MOBILE_BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className={`bg-white p-12 rounded-none relative border border-black transition-all hover:-translate-y-1 ${
                idx === 1
                  ? "lg:mt-24 lg:-ml-8 z-10 scale-105 border-2 p-14"
                  : idx === 2
                    ? "lg:-mt-12 lg:ml-20"
                    : ""
              }`}
              style={{
                boxShadow:
                  idx === 1
                    ? "8px 8px 0px 0px #f27f0d"
                    : "8px 8px 0px 0px rgba(0,0,0,1)",
              }}
            >
              <div className="mb-8 text-primary">
                <span
                  className={`material-symbols-outlined font-bold ${
                    idx === 1 ? "text-7xl" : "text-6xl"
                  }`}
                >
                  {benefit.icon}
                </span>
              </div>
              <h3
                className={`mb-6 font-black leading-tight uppercase tracking-tight ${
                  idx === 1 ? "text-4xl" : "text-3xl"
                }`}
              >
                {benefit.title}
              </h3>
              <p
                className={`leading-relaxed text-zinc-700 ${
                  idx === 1 ? "text-xl font-medium" : "text-lg"
                }`}
              >
                {benefit.description}
              </p>
              {idx === 1 && (
                <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-1 font-bold text-sm tracking-widest uppercase">
                  Key Driver
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
