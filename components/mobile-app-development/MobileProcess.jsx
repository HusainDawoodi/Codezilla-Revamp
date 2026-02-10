export default function MobileProcess() {
  const steps = [
    {
      number: "01",
      icon: "search",
      title: "Discovery & Planning",
      description:
        "Understanding your business goals, target audience, and technical needs to create a clear roadmap.",
    },
    {
      number: "02",
      icon: "design_services",
      title: "Design & Prototyping",
      description:
        " Crafting user-friendly, responsive designs that focus on exceptional user experience and branding.",
    },
    {
      number: "03",
      icon: "code",
      title: "Development & Integration",
      description:
        "Building scalable, secure, and high-performing web applications using modern frameworks and technologies.",
    },
    {
      number: "04",
      icon: "rocket_launch",
      title: "Testing & Deployment",
      description:
        " Ensuring quality through rigorous testing, followed by smooth deployment and ongoing support.",
    },
  ];

  return (
    <section className="bg-white py-32 lg:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24 animate-entrance-fade text-left">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-black uppercase  mb-4">
            Easy Way to Get Our Popular Development Services
          </h2>
          <div className="h-1.5 w-32 bg-primary"></div>
          <p className="text-gray-500 text-md leading-relaxed font-light mt-4">
            We are committed to helping you create a brighter and more
            sustainable future. Whether you're launching a business, designing a
            website, or building a brand, we provide the tools, expertise, and
            support you need to succeed. Let’s shape the futurebetter, smarter,
            and stronger.
          </p>
        </div>

        <div className="relative pt-12">
          {/* Central Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 md:-translate-x-1/2"></div>

          <div className="space-y-24 relative hidden md:block">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-center w-full group animate-entrance-fade`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`hidden md:flex justify-end items-center w-1/2 pr-12  ${index % 2 !== 0 ? "visible" : "invisible w-0 overflow-hidden !hidden"}`}
                >
                  <div className="w-20 h-20 bg-[#F9F7F2] flex items-center justify-center border border-black/5 rounded-[4px] group-hover:bg-primary/5 transition-colors">
                    <span className="material-symbols-outlined text-gray-400 text-3xl group-hover:text-primary transition-colors">
                      {step.icon}
                    </span>
                  </div>
                </div>
                <div
                  className={`hidden md:block w-1/2 pr-12 text-right ${index % 2 === 0 ? "visible" : "invisible !hidden "}`}
                >
                  <h3 className="text-2xl font-display font-bold text-black uppercase mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-md max-w-sm ml-auto font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Central Circle */}
                <div className="relative z-10 flex flex-col items-center md:mx-0">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-display font-bold text-lg shadow-xl rounded-[4px] group-hover:bg-primary transition-colors duration-500">
                    {step.number}
                  </div>
                </div>

                {/* Special case for even index desktop Right side */}
                <div
                  className={`hidden md:block w-1/2 pl-12  ${index % 2 === 0 ? "visible" : "invisible w-0 overflow-hidden !hidden"}`}
                >
                  <div className="w-20 h-20 bg-[#F9F7F2] flex items-center justify-center border border-black/5 rounded-[4px] group-hover:bg-primary/5 transition-colors">
                    <span className="material-symbols-outlined text-gray-400 text-3xl group-hover:text-primary transition-colors">
                      {step.icon}
                    </span>
                  </div>
                </div>

                {/* Special case for odd index desktop Left side */}
                <div
                  className={`hidden md:block w-1/2 pl-12 text-left 
                    ${index % 2 !== 0 ? "visible" : "invisible w-0 overflow-hidden !hidden"}`}
                >
                  <h3 className="text-2xl font-display font-bold text-black uppercase mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-md max-w-sm mr-auto font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-24 relative block md:hidden">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex md:flex-row items-center justify-center w-full group animate-entrance-fade`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Central Circle */}
                <div className="relative z-10 flex flex-col items-center md:mx-0">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-display font-bold text-lg shadow-xl rounded-[4px] group-hover:bg-primary transition-colors duration-500">
                    {step.number}
                  </div>
                </div>

                <div>
                  {/* Special case for even index desktop Right side */}
                  <div className={`pl-12 mb-5`}>
                    <div className="w-12 h-12 bg-[#F9F7F2] flex items-center justify-center border border-black/5 rounded-[4px] group-hover:bg-primary/5 transition-colors">
                      <span className="material-symbols-outlined text-gray-400 !text-xl group-hover:text-primary transition-colors">
                        {step.icon}
                      </span>
                    </div>
                  </div>

                  {/* Special case for odd index desktop Left side */}
                  <div
                    className={`pl-12 text-left 
                   `}
                  >
                    <h3 className="text-2xl font-display font-bold text-black uppercase mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-md max-w-sm mr-auto font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
