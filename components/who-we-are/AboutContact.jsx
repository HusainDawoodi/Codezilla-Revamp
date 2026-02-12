import Image from "next/image";
import Input from "@/components/ui/Input";
import Button from "../ui/Button";

export default function AboutContact() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-10 min-h-[850px] relative overflow-hidden bg-charcoal">
      <div className="lg:col-span-6 relative overflow-hidden group">
        <Image
          alt="David Miller Senior Partner"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          src="/images/who-we-are/footer-cta-3.png"
          fill
        />
        <div className="absolute bottom-0 left-0 p-12 lg:p-20 z-20">
          <div className="inline-block bg-primary/90 backdrop-blur-md px-6 py-2 mb-4 border border-white/10">
            <p className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">
              EXECUTIVE PARTNER
            </p>
          </div>
          {/* <h3 className="text-white font-display text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-none mb-2">
            David Miller
          </h3> */}
          <p className="text-gray-300 max-w-md  font-light text-xl">
            &quot;Success isn&apos;t built on code alone—it&apos;s built on
            partnership.&quot;
          </p>
        </div>
        <div className="absolute bottom-12 right-10 z-20">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 animate-spin-slow">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path
                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    id="circlePath"
                  ></path>
                </defs>
                <text
                  fill="white"
                  fontFamily="Space Grotesk"
                  fontSize="8.5"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  <textPath xlinkHref="#circlePath">
                    REAL PEOPLE. REAL PROS. • REAL PEOPLE. REAL PROS. •
                  </textPath>
                </text>
              </svg>
            </div>
            <span className="material-symbols-outlined text-primary text-4xl">
              verified
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80 z-10"></div>
      </div>

      <div className="lg:col-span-4 relative py-24 lg:py-32 px-8 lg:px-16 flex flex-col justify-center bg-charcoal border-l border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none opacity-[0.02]">
          <span className="font-display font-black text-[250px] leading-none text-white tracking-tighter uppercase inline-block -rotate-90 origin-center translate-x-1/2">
            CONNECT
          </span>
        </div>
        <div className="relative z-10 max-w-md w-full">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
              INITIATE COLLABORATION
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8 ">
            READY TO BUILD WHAT’S NEXT?
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed mb-16">
            Transform your digital landscape with expert IT consulting. Let’s
            build the future of technology together!
          </p>
          <form action="#" className="space-y-12">
            <Input
              label="Full Name"
              name="fullname"
              placeholder="Full Name"
              required
              variant="minimal"
            />
            <Input
              label="Email Address"
              name="email"
              placeholder="Email Address"
              required
              type="email"
              variant="minimal"
            />
            <Input
              label="Your Message"
              name="message"
              placeholder="Message"
              required
              type="textarea"
              variant="minimal"
            />
            <Button
              type="submit"
              className="w-full"
              icon="arrow_right_alt"
              size="lg"
            >
              HIRE OUR TEAM
            </Button>
            {/* <button
              className="group w-full relative overflow-hidden bg-primary text-white py-6 px-10 font-bold uppercase tracking-[0.2em] text-sm transition-all rounded-[4px] flex items-center justify-between shadow-[inset_0_1px_10px_rgba(255,255,255,0.2)]"
              type="submit"
            >
              <span className="relative z-10">HIRE OUR TEAM</span>
              <span className="material-symbols-outlined relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                arrow_right_alt
              </span>
            </button> */}
          </form>
        </div>
      </div>
    </section>
  );
}
