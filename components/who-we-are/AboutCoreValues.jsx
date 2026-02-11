import { CORE_VALUES } from "@/constants/who-we-are";

export default function AboutCoreValues() {
  return (
    <section className="bg-charcoal py-32 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase   mb-10">
            CODEZILLA’S CORE VALUES: INNOVATION, INTEGRITY, AND IMPACT
          </h2>
          <p className="text-sm md:text-lg text-gray-400 font-light leading-relaxed max-w-4xl">
            Powerful, self-serve analytics designed to help you convert, engage,
            and retain users effortlessly. Trusted by thousands of growing
            businesses worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {CORE_VALUES.map((value, index) => (
            <div
              key={index}
              className={`bg-card-bg lg:p-12 p-6 border border-white/10 flex flex-col h-full transition-all duration-300  relative ${
                index !== 0 ? "md:border-l-0" : ""
              } hover:border hover:border-primary `}
            >
              <div className="lg:mb-12 mb-6">
                <span className="material-symbols-outlined text-primary !text-5xl font-bold">
                  {value.icon}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white uppercase mb-6 tracking-tight">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
