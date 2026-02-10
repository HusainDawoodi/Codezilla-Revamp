export default function MobileFAQ() {
  const faqs = [
    {
      question: "What does Mobile App Development Require?",
      answer:
        "Mobile app development requires the creation of software applications that work on various types of mobile devices. To develop a mobile app, you need to contract with a firm that has experience with all types of mobile apps and employs a proven development approach.",
    },
    {
      question: "What Are the Different Types of Mobile Apps You Can Develop?",
      answer:
        "Our firm can develop all kinds of apps including lifestyle, social media, utility, entertainment, productivity, news etc for both iOS and Android platforms",
    },
    {
      question:
        "What platform do you target for launching an application: Android or iOS?",
      answer:
        "In past years, companies may have chosen to develop apps that support only a single platform. Today, both Android and iOS platforms have a significant market share, so most companies choose to develop apps that work on both platforms.We build apps that support both iOS and Android platforms.",
    },
    {
      question: "Can an app connect to my existing systems/data store?",
      answer:
        "Yes, we do develop apps that can connect to your existing systems or data store with Application Programming Interface (API). APIs built using any platform can be implemented in an App to connect and read/write data from your datastore.",
    },
    {
      question:
        "Should I have a visual (wireframe) ready for my app? Or you can work with us if we don’t have a fully formed idea for our app?",
      answer:
        "If you have your web designer and have visuals ready, our development team can work with you to build the app. If you just have an idea or concept we are happy to help you visualise and convert your ideas and concepts into digital reality.",
    },
  ];

  return (
    <section className="bg-[#F9F7F2] py-32 px-6 border-t border-black/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 animate-entrance-fade">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-black text-left md:text-center">
            Frequently Asked Questions
          </h2>
          <div className="h-1.5 w-24 bg-primary md:mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-black/10 bg-white rounded-[4px] overflow-hidden group hover:border-primary transition-colors duration-300 animate-entrance-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <details className="group p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-lg list-none text-black">
                  <span className="font-display uppercase tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <span className="transition group-open:rotate-180 material-symbols-outlined text-primary">
                    expand_more
                  </span>
                </summary>
                <div className="text-gray-600 mt-4 leading-relaxed text-base font-light border-t border-black/5 pt-4">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
