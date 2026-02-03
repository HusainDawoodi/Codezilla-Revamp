import Image from 'next/image';

const MARQUEE_ITEMS = [
    {
        type: 'custom',
        src: '/images/google-app.png',
        alt: 'Google Developers',
        lines: ['Google', 'Developers']
    },
    {
        type: 'custom',
        src: '/images/ISO-27001.png',
        alt: 'ISO/IEC 27001',
        lines: ['ISO/IEC', '27001:2022', 'Certified'] // Inferred from original text
    },
    {
        type: 'custom',
        src: '/images/ISO-4200.png',
        alt: 'ISO/IEC 42001',
        lines: ['ISO/IEC', '42001:2023', 'Certified']
    },
    {
        type: 'custom',
        src: '/images/aws.png',
        alt: 'AWS Partner',
        lines: ['AWS', 'Advanced']
    },
    {
        type: 'custom',
        src: '/images/clutch.png',
        alt: 'Clutch',
        lines: ['Clutch', 'Top Vendor']
    },
    {
        type: 'custom',
        src: '/images/maji-logo.svg',
        alt: 'Maji',
        lines: ['Maji', 'Case Study']
    },
    {
        type: 'custom',
        src: '/images/rightcharge.svg',
        alt: 'Rightcharge',
        lines: ['Rightcharge', 'EV']
    },
    {
        type: 'custom',
        src: '/images/naseni-logo.svg',
        alt: 'Naseni',
        lines: ['Naseni', 'Govt']
    }
];

export default function LogoMarquee() {
    return (
        <section className="bg-white py-16 overflow-hidden">
            <p className="text-center text-xs tracking-widest text-gray-400 mb-10">
                TRUSTED BY INDUSTRY LEADERS
            </p>

            <div className="relative">
                <div className="w-full px-6 lg:px-12 py-12">
                    <div className="overflow-hidden">
                        <div className="image-marquee-wrapper" role="region" aria-label="Scrolling partner and award logos">
                            {/* Single-row logos marquee track (two duplicates for seamless loop) */}
                            <div className="image-marquee animate-marquee flex gap-16 md:gap-24 w-full" aria-hidden="true">
                                {[0, 1].map((setIndex) => (
                                    <div key={setIndex} className="flex items-center gap-16 md:gap-24 marquee-set">
                                        {MARQUEE_ITEMS.map((item, i) => (
                                            <div key={i} className="iso-custom-logo">
                                                <Image src={item.src} alt={item.alt} width={115} height={115} className="max-h-16 w-auto" />
                                                <div className="iso-text">
                                                    {item.lines.map((line, li) => (
                                                        <span key={li} className={li === 1 ? 'font-bold' : ''}>{line}<br /></span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
