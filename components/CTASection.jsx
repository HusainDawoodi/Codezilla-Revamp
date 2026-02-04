import Link from 'next/link';
import Image from 'next/image';

export default function CTASection() {
    return (
        <section className="relative w-full lg:h-screen h-[70vh] border-b-2 border-black overflow-hidden bg-charcoal group animate-entrance-fade" style={{ animationDelay: '1.6s' }}>

            {/* Background Image */}
            {/* <div className="absolute inset-0 w-full h-full">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz1nJOqy6BYeaM-mIljKZ7L-qyKz64D5b0H-JEkkkyCwu_HgyWJRQKD5COW5RIdZu71nIRQdoRY90RN9VYUWafl2HKQxULPGNr6EFpVHnEUa164PXTj7GNRf_RyxQIEI5Q35c0IOuyFUJ0ZI_q3K5QBOGKe2U8PrI4ea22QFqu-V9GyodWfAF3W0CAIvbhKPJ2_Hif89lDLRisQ0IbSm1Ct2-HwlsOuVqjm8OxTMnPqbcGWNx3hOgc7r3u_xXhady5bO7watjQ_tlk"
                    alt="Senior Consultant"
                    fill
                    className="object-cover object-top opacity-50 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
            </div> */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 text-center">
                <h2 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold text-white uppercase tracking-tighter mb-12 lg:leading-[0.95]">
                    Ready to<br />build <span className="text-primary">what&apos;s next?</span>
                </h2>
                <Link
                    href="#"
                    className="inline-flex items-center justify-center bg-primary text-black font-bold uppercase tracking-widest text-sm md:text-base px-10 py-5 rounded-full hover:scale-105 hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_0_8px_rgba(255,109,0,0.3)] hover:shadow-[0_0_0_12px_rgba(255,255,255,0.2)] animate-pulse"
                >
                    Schedule a Discovery Call
                </Link>
            </div>

            {/* Floating Badge (Real People Real Pros) */}
            <div className="absolute bottom-12 right-12 z-30 hidden lg:flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-charcoal bg-gray-300 overflow-hidden relative">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq9UaKVkeshcHJ7kZVSg-4ETKxKxAl1D0pVRepc4wLQhMyv2I58jHzT2AKFwTHfvnDH6SsI8jtAFpWdf16wGeuyZ0sLpSHwbFa38Lv4ndm9t4tnnPLHQrrKotpzPfzcIN0g0JV8jdu4Tz3mHRdQH2BBwz-YOJR24wR3rfqi18njq-ZeO2tDqxs8BCM1oIS8S1TOKuWK7PYYuYoM2Y5vxm3DlagpVQbrrxpQStW96RhcxQUJXXWasX3CT7ULtDg8WMtnVbeUNcCAKGp" alt="Person 1" fill className="object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-charcoal bg-gray-300 overflow-hidden relative">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz1nJOqy6BYeaM-mIljKZ7L-qyKz64D5b0H-JEkkkyCwu_HgyWJRQKD5COW5RIdZu71nIRQdoRY90RN9VYUWafl2HKQxULPGNr6EFpVHnEUa164PXTj7GNRf_RyxQIEI5Q35c0IOuyFUJ0ZI_q3K5QBOGKe2U8PrI4ea22QFqu-V9GyodWfAF3W0CAIvbhKPJ2_Hif89lDLRisQ0IbSm1Ct2-HwlsOuVqjm8OxTMnPqbcGWNx3hOgc7r3u_xXhady5bO7watjQ_tlk" alt="Person 2" fill className="object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-charcoal bg-primary flex items-center justify-center text-[10px] font-bold text-black">
                        +12
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-white text-xs font-bold uppercase tracking-wider">Real people</span>
                    </div>
                    <span className="text-primary text-xs font-bold uppercase tracking-wider block">Real pros</span>
                </div>
            </div>
        </section>
    );
}
