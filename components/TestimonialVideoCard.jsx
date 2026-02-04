'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Video from 'next-video';

export default function TestimonialVideoCard({
    videoSrc,
    posterSrc,
    clientImage,
    clientName,
    clientRole,
    quote,
    isActive,
    onPlay,
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Pause this video when another video becomes active
    useEffect(() => {
        if (!isActive && isPlaying && videoRef.current) {
            videoRef.current.pause();
        }
    }, [isActive, isPlaying]);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            // onPlay();
        }
    };

    const handleVideoPlay = () => {
        setIsPlaying(true);
        onPlay();
    };

    const handleVideoPause = () => {
        setIsPlaying(false);
    };

    return (
        <div className="group cursor-pointer testimonial-video-card min-w-[300px] md:min-w-[45%] lg:min-w-[32%] lg:max-w-[32%]" tabIndex="0" onClick={() => {
            if (isPlaying) {
                videoRef.current.pause();
            }
        }} >
            <div className="relative aspect-[9/16] overflow-hidden border-2 border-white/10 bg-gray-900 shadow-[8px_8px_0px_0px_rgba(255,109,0,0.2)] group-hover:shadow-[12px_12px_0px_0px_rgba(255,109,0,0.5)] transition-all duration-300 group-hover:-translate-y-2">

                {isMounted ? (
                    <Video
                        ref={videoRef}
                        src={videoSrc}
                        poster={""}
                        controls={true}
                        style={{ width: "100%", height: "100%", aspectRatio: "9:16" }}
                        onPlay={handleVideoPlay}
                        onPause={handleVideoPause}
                    />
                ) : (
                    <div className="w-full h-full bg-gray-900" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
                {!isPlaying && (
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto z-20"
                        onClick={handlePlayClick}
                    >
                        <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,109,0,0.4)] hover:bg-primary hover:scale-110 transition-all duration-300">
                            <span className="material-symbols-outlined !text-5xl ml-1">play_arrow</span>
                        </div>
                    </div>
                )}
                {/* Info Overlay */}
                <div className="absolute bottom-0 p-8 pointer-events-none transition-opacity duration-300 opacity-100 w-100">
                    <h3 className="font-display text-2xl font-bold uppercase leading-tight text-white mb-6">
                        {quote}
                    </h3>
                    <div className="flex items-center gap-4 pt-5 border-t border-white/20">
                        <div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden relative">
                            <Image src={clientImage} alt={clientName} fill className="object-cover" />
                        </div>
                        <div>
                            <p className="font-bold text-sm uppercase text-white">{clientName}</p>
                            <p className="text-xs text-primary font-bold uppercase">{clientRole}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
