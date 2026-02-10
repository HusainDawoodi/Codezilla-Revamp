import Input from "../ui/Input";
import Select from "../ui/Select";

export default function ContactSection() {
  const budgetOptions = [
    { value: "$10k - $25k", label: "$10k - $25k" },
    { value: "$25k - $50k", label: "$25k - $50k" },
    { value: "$50k - $100k", label: "$50k - $100k" },
    { value: "$100k+", label: "$100k+" },
  ];

  return (
    <section className="!bg-charcoal py-20 md:py-32 relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="bg-dark-accent p-6 md:p-10 border border-white/10 shadow-2xl order-2 lg:order-1">
          <div className="mb-8">
            <h3 className="text-white font-display text-xl md:text-2xl font-bold uppercase tracking-tight">
              Project Inquiry
            </h3>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Company Name"
                placeholder="e.g. Acme Corp"
                variant="dark"
              />
              <Input
                label="Contact Email"
                placeholder="name@company.com"
                type="email"
                variant="dark"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Contact Number"
                placeholder="e.g. 1234567890"
                variant="dark"
                type="number"
              />
              <Input
                label="LinkedIn Profile"
                placeholder="e.g. https://www.linkedin.com/in/your-profile"
                type="url"
                variant="dark"
              />
            </div>
            <Select
              label="Project Budget (Range)"
              options={budgetOptions}
              variant="dark"
            />
            <Input
              label="Project Brief"
              placeholder="Briefly describe your objectives..."
              type="textarea"
              variant="dark"
              rows="4"
            />
            <button
              className="w-full bg-primary text-white py-5 font-bold uppercase tracking-[0.1em] text-sm hover:bg-white hover:text-black transition-all"
              type="submit"
            >
              Initiate Consultation
            </button>
          </form>
        </div>
        <div className="space-y-6 md:space-y-10 order-1 lg:order-2">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-[1.1]">
            Ready to discuss
            <br />
            <span className="text-outline-primary">your product?</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light max-w-xl">
            Schedule a consultation to explore how our systematic design
            approach can scale your business and improve user satisfaction.
          </p>
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex flex-col gap-2">
              <span className="text-gray-500 font-mono text-xs md:text-sm uppercase tracking-widest">
                Direct Contact
              </span>
              <a
                className="text-white border-b border-white/20 pb-1 font-mono text-lg md:text-xl w-fit hover:text-primary hover:border-primary transition-all"
                href="mailto:hello@codezilla.io"
              >
                hello@codezilla.io
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-gray-500 font-mono text-[10px] uppercase">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>{" "}
                Available Now
              </span>
              <span className="hidden sm:block w-1 h-1 bg-white/20 rounded-full"></span>
              <span>Avg. Response &lt; 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
