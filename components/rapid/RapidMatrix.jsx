import { RAPID_MATRIX } from "@/constants/rapid";

export default function RapidMatrix() {
  return (
    <section className="py-32 mx-auto flex items-center justify-center bg-charcoal text-white overflow-hidden relative">
      <div className="container">
        <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-24 animate-entrance-fade">
            <h2 className="text-3xl lg:text-4xl font-bold  uppercase mb-4 font-display">
              What You Can Create with Rapid Prototyping
            </h2>
            <p className="text-white/60 text-sm ">
              Before development starts, mobile app experience interactive
              software flows that mimic actual user journeys to help verify
              features, usability, and navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RAPID_MATRIX.map((item, idx) => (
              <div
                key={item.id}
                className="group relative bg-white border border-white/10 rounded-lg p-10 min-h-[380px] flex flex-col overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(255,109,0,0.1)] hover:-translate-y-2 animate-entrance-fade"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Corner Number */}
                <div className="absolute -right-4 -bottom-10 opacity-[0.03] pointer-events-none select-none group-hover:opacity-[0.05] transition-opacity">
                  <span className="text-[14rem] font-bold text-black leading-none font-display">
                    {item.id}
                  </span>
                </div>

                {/* Progress Bar Top */}
                <div className="w-full h-[2px] bg-primary/20 mb-10 group-hover:bg-primary transition-colors duration-500"></div>

                <div className="mb-8 flex justify-between items-start">
                  <span className="material-symbols-outlined text-primary text-xl md:!text-5xl transform group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-[9px] font-bold text-black/20 uppercase tracking-widest mt-2">
                    {item.version}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-charcoal text-2xl font-bold uppercase tracking-tighter mb-4 font-display">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
