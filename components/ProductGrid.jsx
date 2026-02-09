import FeatureCard from "./ui/FeatureCard";

const products = [
  {
    number: "V 3.0",
    icon: "deployed_code",
    title: "Product Flywheel",
    description:
      "Automated CI/CD pipelines configured for enterprise scale. Reduce deployment time by 400%.",
    linkText: "Initialize",
  },
  {
    number: "SEC-OPS",
    icon: "security",
    title: "Security Guard:AM",
    description:
      "Real-time threat modeling and automated compliance checks woven into your codebase.",
    linkText: "Initialize",
  },
  {
    number: "N-NET",
    icon: "psychology",
    title: "AI Integration",
    description:
      "Plug-and-play LLM connectors for internal data grounding and RAG architecture.",
    linkText: "Initialize",
  },
];

export default function ProductGrid() {
  return (
    <section
      className="bg-[#0F1218] border-b-2 border-black py-24 relative overflow-hidden animate-entrance-fade"
      style={{ animationDelay: "1.4s" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-energy-gradient-dark opacity-50 z-0"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between lg:items-end mb-16 border-b-2 border-white/10 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
              Internal IP
            </span>
            <h2 className="font-display text-4xl md:text-4xl font-bold text-white uppercase">
              Our products
            </h2>
          </div>
          <p className="lg:text-right text-sm font-medium text-gray-400 max-w-xs mt-4 md:mt-0">
            Pre-built modules to jumpstart your transformation. Why build from
            scratch?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <FeatureCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
