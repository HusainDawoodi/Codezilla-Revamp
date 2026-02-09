export default function MobileProcess() {
  const steps = [
    {
      number: "01",
      icon: "search",
      title: "Discovery & Planning",
      description:
        "We begin by understanding your business goals and user needs to create a solid roadmap for development.",
    },
    {
      number: "02",
      icon: "design_services",
      title: "Design & Prototyping",
      description:
        "Creating intuitive UI/UX designs and clickable prototypes to visualize the final product.",
    },
    {
      number: "03",
      icon: "code",
      title: "Development & Integration",
      description:
        "Our engineers build robust code and integrate necessary APIs to bring your app to life.",
    },
    {
      number: "04",
      icon: "rocket_launch",
      title: "Testing & Deployment",
      description:
        "Rigorous testing ensures a bug-free experience before we launch your app to the stores.",
    },
  ];

  return (
    <section className="bg-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24 animate-entrance-fade text-left">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-black uppercase  mb-4">
            Our Development Process
          </h2>
          <div className="h-1.5 w-32 bg-primary"></div>
        </div>

        <div className="relative pt-12">
          {/* Central Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 md:-translate-x-1/2"></div>

          <div className="space-y-24 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-center w-full group animate-entrance-fade`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Desktop Left Side */}
                {/* <div
                  className={`hidden md:block w-1/2 pr-12 text-right ${index % 2 === 0 ? "visible" : "invisible"}`}
                >
                  <h3 className="text-2xl font-display font-bold text-black uppercase mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm max-w-sm ml-auto font-light leading-relaxed">
                    {step.description}
                  </p>
                </div> */}

                <div
                  className={`hidden md:block w-1/2 pr-12 text-right ${index % 2 === 0 ? "visible" : "invisible"}`}
                >
                  <h3 className="text-2xl font-display font-bold text-black uppercase mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm max-w-sm ml-auto font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Central Circle */}
                <div className="relative z-10 flex flex-col items-center md:mx-0">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-display font-bold text-lg shadow-xl rounded-[4px] group-hover:bg-primary transition-colors duration-500">
                    {step.number}
                  </div>
                </div>

                {/* Mobile Right Side / Desktop Alternate Side */}
                {/* <div
                  className={`w-full md:w-1/2 pl-12 text-left ${index % 2 !== 0 ? "md:visible" : "md:invisible md:hidden"} block`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-20 h-20 bg-[#F9F7F2] flex items-center justify-center border border-black/5 rounded-[4px] group-hover:bg-primary/5 transition-colors">
                      <span className="material-symbols-outlined text-gray-400 text-3xl group-hover:text-primary transition-colors">
                        {step.icon}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-black uppercase group-hover:text-primary transition-colors block md:hidden">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm max-w-sm font-light block md:hidden leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div> */}
                {/* <div className={`w-full md:w-1/2 pl-12 text-left  block`}>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-display font-bold text-black uppercase group-hover:text-primary transition-colors block md:hidden">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm max-w-sm font-light block md:hidden leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div> */}
                {/* Special case for even index desktop Right side */}
                <div
                  className={`hidden md:block w-1/2  ${index % 2 === 0 ? "visible" : "invisible w-0 overflow-hidden"}`}
                >
                  <div className="w-20 h-20 bg-[#F9F7F2] flex items-center justify-center border border-black/5 rounded-[4px] group-hover:bg-primary/5 transition-colors">
                    <span className="material-symbols-outlined text-gray-400 text-3xl group-hover:text-primary transition-colors">
                      {step.icon}
                    </span>
                  </div>
                </div>

                {/* Special case for odd index desktop Left side */}
                <div
                  className={`hidden md:block w-1/2 pl-12 text-left absolute right-0 ${index % 2 !== 0 ? "visible" : "invisible w-0 overflow-hidden"}`}
                >
                  <h3 className="text-2xl font-display font-bold text-black uppercase mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm max-w-sm mr-auto font-light leading-relaxed">
                    {step.description}
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
