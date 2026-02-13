import { DEVOPS_PROCESS } from "@/constants/devops";

export default function DevOpsProcess() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 text-charcoal relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="text-primary font-bold tracking-widest text-sm uppercase">
            The Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-4 uppercase">
            DevOps Engineering Process
          </h2>
        </div>
        <div className="relative">
          {/* Timeline spine */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary -translate-x-1/2"></div>

          {DEVOPS_PROCESS.map((step, idx) => (
            <div
              key={step.id}
              className={`relative mb-16 md:mb-20 md:flex items-center justify-between w-full ${
                idx === DEVOPS_PROCESS.length - 1 ? "mb-0" : ""
              }`}
            >
              {idx % 2 === 0 ? (
                <>
                  <div className="md:w-[45%] mb-4 md:mb-0">
                    <div className="bg-[#F3F4F6] p-8 rounded-xl border border-zinc-100 shadow-sm md:text-right">
                      <h3 className="text-xl font-bold uppercase mb-2">
                        {step.id}. {step.title}
                      </h3>
                      <p className="text-zinc-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white z-20 hidden md:block"></div>
                  <div className="md:w-[45%]"></div>
                </>
              ) : (
                <>
                  <div className="md:w-[45%]"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white z-20 hidden md:block"></div>
                  <div className="md:w-[45%] mt-4 md:mt-0">
                    <div className="bg-[#F3F4F6] p-8 rounded-xl border border-zinc-100 shadow-sm">
                      <h3 className="text-xl font-bold uppercase mb-2">
                        {step.id}. {step.title}
                      </h3>
                      <p className="text-zinc-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
