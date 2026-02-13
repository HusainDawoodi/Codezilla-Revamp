import SectionHeader from "@/components/ui/SectionHeader";

export default function FAQSection({ faqs: customFaqs }) {
  const defaultFaqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the complexity of the project. A basic website might take 4-6 weeks, while a complex web application could take 3-6 months or more.",
    },
    {
      question: "Do you provide maintenance services?",
      answer:
        "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performs optimally.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We specialize in modern technologies including React, Vue.js, Node.js, Laravel, PHP, Python, and cloud services like AWS and Azure.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Absolutely. We can modernize your existing website, improve its performance, and enhance the user experience while retaining your brand identity.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including fixed-price for defined scopes and time-and-materials for evolving projects. We tailor our pricing to fit your budget and needs.",
    },
  ];

  const faqs = customFaqs || defaultFaqs;

  return (
    <section className="bg-white py-24 border-b-2 border-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Frequently Asked Questions"
          align="center"
          theme="light"
          className="mb-12"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-black bg-white">
              <details className="group p-6">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none">
                  <span className="font-display uppercase text-lg">
                    {faq.question}
                  </span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </span>
                </summary>
                <div className="text-gray-600 mt-4 leading-relaxed group-open:animate-entrance-fade">
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
