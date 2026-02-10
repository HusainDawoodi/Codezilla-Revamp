import Image from "next/image";
import { EXPERTS } from "@/constants/who-we-are";

export default function AboutExperts() {
  return (
    <section className="bg-charcoal py-32 border-b-2 border-black relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <span className="text-[30vw] font-black text-white leading-none">
          EXPERTS
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-4">
            MEET THE EXPERTS
          </h2>
          <p className="text-gray-400 text-md md:text-lg font-light">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do you best work.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border border-white/10">
          {EXPERTS.map((expert, index) => (
            <div
              key={index}
              className="group bg-gray-900 overflow-hidden relative"
            >
              <div
                className={`relative aspect-[4/5] border-white/10 overflow-hidden ${
                  index % 5 !== 4 ? "lg:border-r" : ""
                } border-b`}
              >
                <Image
                  alt={expert.name}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  src={expert.image}
                  fill
                />
                <div
                  className={`absolute bottom-0 right-0 px-3 py-1.5 z-30 ${
                    expert.variant === "primary"
                      ? "bg-primary text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <h4 className="font-bold uppercase text-xs tracking-wider">
                    {expert.name}
                  </h4>
                </div>
              </div>
              <div className="p-4 bg-charcoal">
                <p className="text-gray-400 text-xs font-bold uppercase">
                  {expert.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
