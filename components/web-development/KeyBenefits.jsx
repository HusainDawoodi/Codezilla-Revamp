import SectionHeader from "@/components/ui/SectionHeader";

export default function KeyBenefits() {
  const benefits = [
    {
      icon: "scale",
      title: "Scalability & Flexibility",
      description:
        "Design a platform that can easily grow and adapt as your business evolves, adding new features and functionalities seamlessly.",
    },
    {
      icon: "security",
      title: "Enhanced Security",
      description:
        "Implement robust security measures from the ground up, protecting your data and your users’ information more effectively.",
    },
    {
      icon: "speed",
      title: "Improved Performance",
      description:
        "Optimize for speed and efficiency, leading to faster loading times, better user experience, and improved search engine rankings.",
    },
    {
      icon: "fingerprint",
      title: "Unique Brand Identity",
      description:
        "Create a distinctive online presence that truly reflects your brand’s personality and stands out from the competition.",
    },
    {
      icon: "hub",
      title: "Seamless Integrations",
      description:
        "Integrate effortlessly with existing business tools, CRMs, payment gateways, and other third-party services.",
    },
    {
      icon: "sentiment_satisfied",
      title: "Better User Experience",
      description:
        "Design intuitive navigation and engaging interfaces that lead to higher user satisfaction and conversion rates.",
    },
  ];

  return (
    <section className="bg-white py-24 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            title="Discover the benefits of working with Us"
            description="We are committed to helping you create a brighter and more sustainable future. Whether you're launching a business, designing a website, or building a brand, we provide the tools, expertise, and support you need to succeed. Let’s shape the future better, smarter, and stronger."
            align="left"
            theme="light"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 hover:border-black transition-all bg-gray-50 hover:bg-white group"
            >
              <span className="material-symbols-outlined text-primary !text-4xl mb-4 group-hover:scale-110 group-hover:text-black transition-all block">
                {benefit.icon}
              </span>
              <h3 className="text-xl font-display font-bold uppercase mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
