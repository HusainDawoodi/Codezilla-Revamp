import SectionHeader from "@/components/ui/SectionHeader";

export default function ServicesOffered() {
  const services = [
    {
      number: "01",
      icon: "code",
      title: "Frontend Development",
      description:
        "Our front-end services provide quick, user-friendly interfaces that combine modern style with smooth functioning. We help organizations develop digital experiences that are engaging, generate trust, and increase their client base.",
    },
    {
      number: "02",
      icon: "dns",
      title: "Backend Development",
      description:
        "With our backend services, we deliver secure, adaptable, and high-performance systems that execute your web applications. Our goal is to create reliable database interactions, advanced security, and long-term efficiency to support business growth.",
    },
    {
      number: "03",
      icon: "storage",
      title: "Data Management",
      description:
        "Ensuring data integrity, security, and accessibility through efficient database design and management solutions.",
    },
    {
      number: "04",
      icon: "integration_instructions",
      title: "APIs Integration and Support",
      description:
        "We develop custom web applications from concept to execution, delivering engaging user experiences. Built with modern frameworks, our solutions streamline operations, enhance efficiency, and drive sustainable business growth tailored to your needs.",
    },
    {
      number: "05",
      icon: "domain",
      title: "Enterprise Web Development",
      description:
        "We have instantly deployable, experienced resources that can aid any enterprise project. Whether it relates to web, mobile, cloud, security, or performance, we can assist in development, testing, and management.",
    },
    {
      number: "06",
      icon: "support_agent",
      title: "Site Maintenance & Support",
      description:
        "Ensure your website runs smoothly with our maintenance and support services. From security updates and backups to performance optimization and content changes, we keep your site secure, fast, and up-to-date for a seamless visitor experience.",
    },
  ];

  return (
    <section className="bg-charcoal py-24 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <SectionHeader
          title="Web App Development Services We Offer"
          description="We provide specialized web app development services with an emphasis on user experience, performance, and scalability. Our team of experts creates cutting-edge solutions that promote digital success and company expansion."
          align="center"
          theme="dark"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-charcoal p-5 lg:p-10 group hover:bg-white transition-all relative overflow-hidden flex flex-col h-full"
            >
              {/* Number and Icon */}
              <div className="flex justify-between items-start mb-10">
                <span className="font-display text-5xl font-bold text-white/10 group-hover:text-primary transition-colors">
                  {service.number}
                </span>
                <span className="material-symbols-outlined text-primary text-4xl">
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-white uppercase mb-4 group-hover:text-primary transition-colors tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-black transition-colors ">
                {service.description}
              </p>

              {/* Read More Link */}
              <a
                href="#"
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-black transition-colors mt-auto"
              >
                Read More
                <span className="material-symbols-outlined text-sm">
                  arrow_right_alt
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
