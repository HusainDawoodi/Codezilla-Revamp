import Image from "next/image";
import Button from "@/components/ui/Button";
import TrustBadges from "@/components/ui/TrustBadges";

export default function MobileHero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center bg-charcoal overflow-hidden">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 grayscale contrast-125"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-data-center-server-room-with-many-blinking-lights-and-cables-34440-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-entrance-fade">
          <h1 className="font-display text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-white  tracking-tighter uppercase">
            MOBILE APP DEVELOPMENT
          </h1>
          <p className="text-gray-400 text-base max-w-lg leading-relaxed font-light">
            Apps are beginning to dominate our lives. Mobile apps form the basis
            of so much of the way we live – from social interactions, to health,
            to dating and more. Customers now have exceptionally high
            expectations of usability and UX of apps and if you don’t meet the
            standard, yours won’t get used.
          </p>

          <div className="flex flex-col gap-8">
            <TrustBadges
              variant="dark"
              className="border-t border-white/10 pt-8"
            />

            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="primary" size="md" icon="arrow_forward" href="#">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div
          className="relative hidden lg:flex items-center justify-center animate-entrance-fade"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative scale-110">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_IzLXc3azK6_0OADmZm9kqjMMSQ4hkXWAxjHKF6_P8vro3o96N0lKyprMZ5GginPQFPC09s4XeD0yUHAWiCkqctJ-T9TxEGvcI2c5x2PpYMSlHlMomiWI4UYNkZkl3qqdaYZjmyTDnOk61bXGPpr0nughppnBgdzKYtyv88xS7cGaSgKOSeiT-62Dbv7hugKe6V9Fr2NOP78s9YpTXMo674Ju08gN5-JOkG2rYNaofjb-7Xl5O1W3tBXbJWCPzxO4QKV-hrzv"
              alt="iPhone Ecosystem"
              width={450}
              height={900}
              className="drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)] transform -rotate-12 transition-transform hover:rotate-0 duration-700"
            />
            <div className="absolute -bottom-10 -left-20">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu2fyV_RFDPxHqYDIWDIvMj5YMroFJ-ekDWWERpL0kDbs_c-XcNbmyAvUx_pfM1LanqwvVlMEfsJRmwFGwweT_sMRZKMCxH9AfNPoMP-QcrCh-IYoI_e_fgyS4II7eBGYu7XYE8SmbmaRYT0YpetddjE31z_feCfPEeJTalVcsaWn7AcTMb_MzlAAtICDkrsSWvNDY_Cxxxn2ZGbl3LV9p-EdyuW6Q9Oz-EpSj5fY0Fagb7leyHrAj0bOo7iw6oDx7rdGS1xsP"
                alt="Apple Watch"
                width={200}
                height={200}
                className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] transform rotate-12 transition-transform hover:rotate-0 duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
