export default function MobileIntroduction() {
  return (
    <section className="bg-[#F9F7F2] py-24 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="animate-entrance-fade">
            <h2 className="font-display text-3xl md:text-3xl lg:text-4xl font-bold leading-[1.1] text-black">
              Our team is{" "}
              <span className="text-primary italic">
                exceptionally experienced
              </span>{" "}
              in mobile app development and will deliver an app that will wow
              both you and your customers.
            </h2>
          </div>
          <div
            className="animate-entrance-fade"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-gray-600 text-base md:text-base leading-relaxed font-light">
              As a leading mobile app development company, we are dedicated to
              providing innovative, scalable, and feature-rich app solutions to
              organizations worldwide. Our skilled team delivers end-to-end
              mobile app development services, including selecting the
              appropriate tech stacks and smoothly integrating third-party APIs
              to ensure optimal performance. We develop next-generation
              applications that achieve demonstrated effectiveness while
              prioritizing user experience and business growth.
            </p>
            <div className="mt-10 flex gap-4 items-center">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-primary font-mono text-xs uppercase tracking-widest font-bold">
                Excellence in Engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
