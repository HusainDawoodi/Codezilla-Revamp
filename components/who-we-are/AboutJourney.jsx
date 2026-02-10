import Image from "next/image";
import { JOURNEY_STEPS } from "@/constants/who-we-are";

export default function AboutJourney() {
  return (
    <section className="bg-paper py-32 border-b-2 border-black blueprint-grid ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-black uppercase  mb-24 text-center">
          The Codezilla Journey
        </h2>
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary -translate-x-1/2"></div>

          <div className="space-y-32">
            {JOURNEY_STEPS.map((step, index) => (
              <div
                key={index}
                className="relative flex items-center w-full sticky top-25"
              >
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary rotate-45 z-10"></div>
                <div className="grid grid-cols-2 w-full">
                  {step.side === "left" ? (
                    <>
                      <div className="pr-12 md:pr-16 text-right flex flex-col items-end">
                        <div className="max-w-md w-full p-8 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all group">
                          <div className="relative w-full h-55 mb-6 border border-gray-100 overflow-hidden">
                            <Image
                              alt={step.title}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all "
                              src={step.image}
                              fill
                            />
                          </div>
                          <span className="font-display text-4xl font-black text-primary mb-2 block">
                            {step.year}
                          </span>
                          <h3 className="text-2xl font-bold uppercase mb-4 text-black font-display tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <div></div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div className="pl-12 md:pl-16 text-left flex flex-col items-start">
                        <div className="max-w-md w-full p-8 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(255,109,0,1)] hover:shadow-none transition-all group">
                          <div className="relative w-full h-55 mb-6 border border-gray-100 overflow-hidden">
                            <Image
                              alt={step.title}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                              src={step.image}
                              fill
                            />
                          </div>
                          <span className="font-display text-4xl font-black text-primary mb-2 block">
                            {step.year}
                          </span>
                          <h3 className="text-2xl font-bold uppercase mb-4 text-black font-display tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
