import Image from "next/image";
import Button from "@/components/ui/Button";

export default function DiscoveryHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#080808] pt-32 pb-32 px-6 overflow-hidden">
      {/* Hero Grid Background */}
      <div className="blueprint-grid absolute inset-0 z-0 opacity-40"></div>

      {/* Floating Particles Simulation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-primary rounded-full opacity-30 shadow-[0_0_10px_#ff6d00]"></div>
        <div className="absolute top-[40%] left-[45%] w-1 h-1 bg-primary rounded-full opacity-30 shadow-[0_0_10px_#ff6d00]"></div>
        <div className="absolute top-[70%] left-[25%] w-1.5 h-1.5 bg-primary rounded-full opacity-30 shadow-[0_0_10px_#ff6d00]"></div>
        <div className="absolute top-[10%] left-[85%] w-1 h-1 bg-primary rounded-full opacity-30 shadow-[0_0_10px_#ff6d00]"></div>
        <div className="absolute top-[60%] left-[75%] w-1 h-1 bg-primary rounded-full opacity-30 shadow-[0_0_10px_#ff6d00]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start space-y-12">
            <div className="space-y-4">
              <span
                className="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-4 block animate-entrance-fade"
                style={{ animationDelay: "0.1s" }}
              >
                Est. 17+ Years of Architecture
              </span>
              <h1
                className="select-none font-display animate-entrance-fade"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="block text-6xl md:text-8xl xl:text-[7.5rem] font-black tracking-tighter text-white uppercase leading-[0.8]">
                  FROM IDEAS
                </span>
                <span className="block text-6xl md:text-8xl xl:text-[7.5rem] font-black tracking-tighter text-primary uppercase leading-[0.8]">
                  TO DIRECTION
                </span>
              </h1>
            </div>

            <p
              className="text-lg md:text-xl text-zinc-400 font-medium leading-[1.8] max-w-[540px] animate-entrance-fade"
              style={{ animationDelay: "0.3s" }}
            >
              Product discovery transforms raw ideas into meaningful product
              direction by validating user needs and business goals. We ensure
              your digital solutions aren’t just built, but designed to flourish
              in the marketplace.
            </p>

            <div
              className="flex flex-col space-y-8 animate-entrance-fade"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                variant="primary"
                size="lg"
                className="px-12 py-6 text-sm uppercase tracking-widest font-bold"
              >
                START DISCOVERY
              </Button>

              <div className="flex items-center gap-10">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                      Google
                    </span>
                    <div className="flex text-primary">
                      {[1, 2, 3, 4].map((i) => (
                        <span key={i} className="material-icons text-xs">
                          star
                        </span>
                      ))}
                      <span className="material-icons text-xs">star_half</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white tracking-tighter">
                    4.5/5 RATING
                  </span>
                </div>
                <div className="w-[1px] h-8 bg-white/10"></div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                      Clutch
                    </span>
                    <div className="flex text-primary">
                      {[1, 2, 3, 4].map((i) => (
                        <span key={i} className="material-icons text-xs">
                          star
                        </span>
                      ))}
                      <span className="material-icons text-xs">star_half</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white tracking-tighter">
                    4.5/5 RATING
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-5 relative h-[600px] flex items-center justify-center animate-entrance-fade"
            style={{ animationDelay: "0.5s" }}
          >
            {/* SVG Visual Links */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              overflow="visible"
            >
              <path
                d="M 50,150 Q 150,100 250,50"
                fill="none"
                stroke="rgba(255, 109, 0, 0.2)"
                strokeWidth="1"
                strokeDasharray="4"
              />
              <path
                d="M 350,450 Q 250,400 150,350"
                fill="none"
                stroke="rgba(255, 109, 0, 0.2)"
                strokeWidth="1"
                strokeDasharray="4"
              />
            </svg>

            <div className="relative w-full h-full">
              {/* Image 1 - Lead Architect */}
              <div className="absolute top-[10%] right-0 w-[240px] aspect-[4/5] z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4najh_3jK3oKhWpdCwf5fDuALCwpVIaOWRplao6xXbwKjG4CFliQ9o9UHQk_aP79TiGp9DBa88O7YG4dp29rKOpNfFqq_GG0I-j3-B6OQuILEHJQDE8BSOK4As9IVtS7K7q4n-M2_dpPlA9X88qjpHHYg96u7wzP422Gkpi4U6y1BteuNmhcKCQZddHiDnyzY18lndJYIJ0tL898VXGAac2mA5rs32IyPWBg8JTJDus5ZWz2nRQNgY1DzsvMfvO8GB2CpRllq"
                  alt="Lead Architect"
                  fill
                  className="object-cover grayscale brightness-75 contrast-125"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-[10px] font-bold text-primary tracking-widest uppercase">
                    Lead Architect
                  </p>
                </div>
              </div>

              {/* Image 2 - Dashboard Visualization */}
              <div className="absolute top-[35%] left-[-5%] w-[320px] h-[200px] z-20 bg-charcoal/80 backdrop-blur-md rounded-xl p-4 overflow-hidden shadow-2xl transform rotate-[-4deg] border border-white/10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4ATyDbmUMtesZFE0EUarkRcx-fKeaEV8bQJsUReWXty_6ht1_ZNzm2JoYaXUPJv5tdb22j-E8PW7S0sBui81yUe21J3cFpwAmo35XbhN90d5cKs-mJOKVSmMQYtHUP4OjqGKqnYV-rzCz_kcRvriheS-lymaRITcwWmp6UXXFd3sU9ubK2mthcNtNDa3VZqDHmG9A1AHwr3VRz71aEHDKJkSxnOuLhp0nqTzS_-Buy6viafluXvfSuxcI0nnL9rukiVJJ6H1r"
                  alt="Dashboard Visualization"
                  fill
                  className="object-cover opacity-60 mix-blend-screen"
                />
                <div className="absolute top-2 right-3 flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                </div>
              </div>

              {/* Image 3 - Mobile Journey */}
              <div className="absolute bottom-[5%] right-[15%] w-[130px] aspect-[9/19.5] z-30 shadow-2xl transform rotate-[6deg] border-[4px] border-zinc-900 bg-black rounded-[24px] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlZiIEspqDXIZ7gp7_8utouGCH3JwYYC1HbrxkaiQCQlSj_Rr1FoATZKfrPlqXBhY_jaEEVYzUR8j9NemGm277I2FQQCTV416pe4FlTT5LIaK3Dx1yH6blJIXWMaaQjyuR_iB0NX4K_0oGOVMKhl7xSpNvqDuxErnBVRMb3_Hhjf-hJk3LNbkTjLsNdS-c5rpPR59Uksjh1NGkQYGsHY4-CjndxySK_D_2u-JZkXL6WPN-bsCwd6rodg0niGdG2eMoak6tVMKZ"
                  alt="Mobile App Visualization"
                  fill
                  className="object-cover opacity-90"
                />
              </div>

              {/* Technical indicators */}
              <div className="absolute top-[15%] left-[20%] w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#ff6d00] z-40 animate-pulse"></div>
              <div className="absolute bottom-[30%] right-[0%] w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#ff6d00] z-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
