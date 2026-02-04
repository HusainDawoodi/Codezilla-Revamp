'use client';

import { useRef, useState, useEffect } from 'react';
import TestimonialVideoCard from './TestimonialVideoCard';
import KhalilVideo from '../videos/khalil_m6AFz1B6.mp4';
import HaadiVideo from '../videos/Haadi.mp4';
import ShainVideo from '../videos/Shain.mp4';
import WembyVideo from '../videos/Wemby.mp4';
import FarukhVideo from '../videos/Farukh.mp4';
import CharlieVideo from '../videos/charlie_NrKB7TX9.mp4';
// Sample dat based on the HTML
const TESTIMONIALS = [
    {
        id: 1,
        videoSrc: CharlieVideo,
        posterSrc: '/images/testimonial1-poster.jpg',
        quote: 'Codezilla completely',
        clientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq9UaKVkeshcHJ7kZVSg-4ETKxKxAl1D0pVRepc4wLQhMyv2I58jHzT2AKFwTHfvnDH6SsI8jtAFpWdf16wGeuyZ0sLpSHwbFa38Lv4ndm9t4tnnPLHQrrKotpzPfzcIN0g0JV8jdu4Tz3mHRdQH2BBwz-YOJR24wR3rfqi18njq-ZeO2tDqxs8BCM1oIS8S1TOKuWK7PYYuYoM2Y5vxm3DlagpVQbrrxpQStW96RhcxQUJXXWasX3CT7ULtDg8WMtnVbeUNcCAKGp',
        clientName: 'Charlie Cook',
        clientRole: 'CTO, Rightcharge'
    },
    {
        id: 2,
        videoSrc: HaadiVideo, // Reusing as per original code repeats
        posterSrc: '/images/testimonial1-poster.jpg',
        quote: 'Codezilla completely',
        clientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq9UaKVkeshcHJ7kZVSg-4ETKxKxAl1D0pVRepc4wLQhMyv2I58jHzT2AKFwTHfvnDH6SsI8jtAFpWdf16wGeuyZ0sLpSHwbFa38Lv4ndm9t4tnnPLHQrrKotpzPfzcIN0g0JV8jdu4Tz3mHRdQH2BBwz-YOJR24wR3rfqi18njq-ZeO2tDqxs8BCM1oIS8S1TOKuWK7PYYuYoM2Y5vxm3DlagpVQbrrxpQStW96RhcxQUJXXWasX3CT7ULtDg8WMtnVbeUNcCAKGp',
        clientName: 'Haadi AbdulMutalab',
        clientRole: 'CTO, Found To You'
    },
    {
        id: 3,
        videoSrc: ShainVideo,
        posterSrc: '/images/testimonial1-poster.jpg',
        quote: 'Codezilla completely',
        clientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq9UaKVkeshcHJ7kZVSg-4ETKxKxAl1D0pVRepc4wLQhMyv2I58jHzT2AKFwTHfvnDH6SsI8jtAFpWdf16wGeuyZ0sLpSHwbFa38Lv4ndm9t4tnnPLHQrrKotpzPfzcIN0g0JV8jdu4Tz3mHRdQH2BBwz-YOJR24wR3rfqi18njq-ZeO2tDqxs8BCM1oIS8S1TOKuWK7PYYuYoM2Y5vxm3DlagpVQbrrxpQStW96RhcxQUJXXWasX3CT7ULtDg8WMtnVbeUNcCAKGp',
        clientName: 'Shain',
        clientRole: 'CTO, Thriving'

    },
    {
        id: 4,
        videoSrc: WembyVideo,
        posterSrc: '/images/testimonial1-poster.jpg',
        quote: 'Codezilla completely',
        clientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq9UaKVkeshcHJ7kZVSg-4ETKxKxAl1D0pVRepc4wLQhMyv2I58jHzT2AKFwTHfvnDH6SsI8jtAFpWdf16wGeuyZ0sLpSHwbFa38Lv4ndm9t4tnnPLHQrrKotpzPfzcIN0g0JV8jdu4Tz3mHRdQH2BBwz-YOJR24wR3rfqi18njq-ZeO2tDqxs8BCM1oIS8S1TOKuWK7PYYuYoM2Y5vxm3DlagpVQbrrxpQStW96RhcxQUJXXWasX3CT7ULtDg8WMtnVbeUNcCAKGp',
        clientName: 'Alberto',
        clientRole: 'CTO, Wemby'
    },
    {
        id: 5,
        videoSrc: FarukhVideo,
        posterSrc: '/images/testimonial1-poster.jpg',
        quote: 'Codezilla completely',
        clientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq9UaKVkeshcHJ7kZVSg-4ETKxKxAl1D0pVRepc4wLQhMyv2I58jHzT2AKFwTHfvnDH6SsI8jtAFpWdf16wGeuyZ0sLpSHwbFa38Lv4ndm9t4tnnPLHQrrKotpzPfzcIN0g0JV8jdu4Tz3mHRdQH2BBwz-YOJR24wR3rfqi18njq-ZeO2tDqxs8BCM1oIS8S1TOKuWK7PYYuYoM2Y5vxm3DlagpVQbrrxpQStW96RhcxQUJXXWasX3CT7ULtDg8WMtnVbeUNcCAKGp',
        clientName: 'Farukh',
        clientRole: 'CTO, Apex Fin'
    },
    {
        id: 6,
        videoSrc: KhalilVideo,
        posterSrc: '/images/testimonial1-poster.jpg',
        quote: 'Codezilla completely',
        clientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq9UaKVkeshcHJ7kZVSg-4ETKxKxAl1D0pVRepc4wLQhMyv2I58jHzT2AKFwTHfvnDH6SsI8jtAFpWdf16wGeuyZ0sLpSHwbFa38Lv4ndm9t4tnnPLHQrrKotpzPfzcIN0g0JV8jdu4Tz3mHRdQH2BBwz-YOJR24wR3rfqi18njq-ZeO2tDqxs8BCM1oIS8S1TOKuWK7PYYuYoM2Y5vxm3DlagpVQbrrxpQStW96RhcxQUJXXWasX3CT7ULtDg8WMtnVbeUNcCAKGp',
        clientName: 'Khalil Halilu  ',
        clientRole: 'CTO, Apex Fin'
    }
];

export default function TestimonialCarousel() {
    const trackRef = useRef(null);
    const [activeVideoId, setActiveVideoId] = useState(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const GAP = 32;

    const scroll = (direction) => {
        const track = trackRef.current;
        if (!track) return;

        const cardWidth = track.children[0]?.offsetWidth || 300;
        const step = cardWidth + GAP;

        const currentScroll = track.parentElement.scrollLeft;
        const targetScroll = direction === 'left' ? currentScroll - step : currentScroll + step;

        track.parentElement.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        const el = trackRef.current?.parentElement;
        if (el) {
            setCanScrollLeft(el.scrollLeft > 0);
            setCanScrollRight(el.scrollLeft < (el.scrollWidth - el.clientWidth - 10)); // -10 tolerance
        }
    };

    useEffect(() => {
        const el = trackRef.current?.parentElement;
        if (el) {
            el.addEventListener('scroll', handleScroll);
            handleScroll(); // init
            return () => el.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section className="bg-charcoal text-white border-b-2 border-black py-24 overflow-hidden relative animate-entrance-fade" style={{ animationDelay: '1.2s' }}>
            <div className="absolute inset-0 bg-energy-gradient-dark"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between lg:items-end mb-16 border-b border-white/20 pb-8">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Social Proof</span>
                        <h2 className="font-display text-4xl font-bold text-white uppercase ">Client <br className="hidden lg:block" />success</h2>
                    </div>

                    <div className="flex gap-4 mt-4 md:mt-0">
                        <button
                            onClick={() => scroll('left')}
                            className={`w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-colors rounded-full ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : ''}`}
                            disabled={!canScrollLeft}
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className={`w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-colors rounded-full ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : ''}`}
                            disabled={!canScrollRight}
                        >
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Carousel Wrapper */}
                <div className="relative overflow-hidden">
                    <div className="overflow-x-auto no-scrollbar scroll-smooth">
                        <div ref={trackRef} className="flex gap-8 w-max pb-8 !w-full">
                            {TESTIMONIALS.map((item) => (
                                <TestimonialVideoCard
                                    key={item.id}
                                    {...item}
                                    isActive={activeVideoId === item.id}
                                    onPlay={() => setActiveVideoId(item.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
