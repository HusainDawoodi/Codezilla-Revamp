export default function MobileWhyChooseUs() {
  const points = [
    {
      title: "Expertise In End-To-End Development",
      content:
        "Codezilla handles the entire mobile app development process, from idea validation and UI/UX design to coding, testing, and deployment. Our comprehensive strategy guarantees that projects run smoothly, resulting in apps that are secure, scalable, and personalised to your specific business needs.",
    },
    {
      title: "Skilled And Experienced Developers",
      content:
        "Our expert developers specialise on Android, iOS, cross-platform, and upcoming technologies. With years of hands-on experience, we develop unique solutions that provide high performance, dependability, and a consistent user experience across all devices.",
    },
    {
      title: "Cutting-Edge Technology Adoption",
      content:
        "Codezilla stays ahead by leveraging the latest tools, frameworks, and tech stacks, including Flutter, React Native, and AI-powered solutions. This allows us to build modern, future-ready mobile applications that meet evolving market trends and user expectations.",
    },
  ];

  return (
    <section className="bg-[#1e1e1e] py-32 px-6 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12">
        <div className="hidden lg:flex items-start pt-4">
          <span className="vertical-text text-white font-display font-bold text-sm tracking-[0.2em] uppercase opacity-80">
            Key Benefits
          </span>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-10 animate-entrance-fade">
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                Why Choose Codezilla For Mobile App Development
              </h2>
              <p className="text-gray-400 text-md leading-relaxed font-light">
                Partner with Codezilla for mobile app development services as we
                combine creativity, technological skill, and a user-first
                approach to generate really unique apps. Our team specialises in
                developing safe, scalable, and high-performance apps for iOS,
                Android, and cross-platform use. With Codezilla, you have a
                trustworthy partner who believes in to transforming your ideas
                into meaningful digital experiences.
              </p>
            </div>

            <div className="flex pt-8 justify-center lg:justify-start">
              <a
                href="#"
                className="group relative flex flex-col items-center justify-center w-56 h-56 rounded-full border border-white/20 hover:border-primary transition-all p-8 text-center bg-black/20"
              >
                <span className="relative z-10 text-white font-bold text-sm leading-tight mb-2">
                  Let’s Start with a<br />
                  Discussion.
                </span>
                <span className="relative z-10 text-gray-400 text-[10px] font-medium uppercase tracking-tight group-hover:text-primary transition-colors">
                  Connect with us in a click!
                </span>
                <div className="absolute inset-2 border border-white/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-full transition-colors duration-500"></div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="bg-[#242424] rounded-[4px] p-8 md:p-10 flex flex-col space-y-6 border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 duration-300 animate-entrance-fade"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-white font-display text-2xl font-bold leading-snug">
                  {point.title}
                </h3>
                <div className="w-full h-px bg-white/10"></div>
                <p className="text-gray-400 text-md leading-relaxed font-light">
                  {point.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
