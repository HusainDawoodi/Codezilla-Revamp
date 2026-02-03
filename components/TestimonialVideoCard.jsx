'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
const STORAGE_KEY = 'testimonial-video-times';
import Video from 'next-video'
function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function TestimonialVideoCard({
    videoSrc,
    posterSrc,
    clientImage,
    clientName,
    clientRole,
    quote,
    isActive,
    onPlay // Function to notify parent to pause others
}) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    // Load saved time
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            const times = saved ? JSON.parse(saved) : {};
            if (times[videoSrc] && videoRef.current) {
                videoRef.current.currentTime = times[videoSrc];
                setCurrentTime(times[videoSrc]);
            }
        } catch (e) { console.warn(e) }
    }, [videoSrc]);

    // Save time on update
    const saveTime = () => {
        if (!videoRef.current) return;
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            const times = saved ? JSON.parse(saved) : {};
            times[videoSrc] = videoRef.current.currentTime;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(times));
        } catch (e) { }
    };

    const togglePlay = (e) => {
        e.stopPropagation();
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            onPlay && onPlay();
            videoRef.current.play().then(() => {
                setIsPlaying(true);
                setIsMuted(false); // Unmute on explicit play
                videoRef.current.muted = false;
            }).catch(() => {
                // Create a muted fallback if autoplay fails or whatever
            });
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
            saveTime();
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    const handleTimeUpdate = () => {
        if (!videoRef.current) return;
        const curr = videoRef.current.currentTime;
        const dur = videoRef.current.duration;
        setCurrentTime(curr);
        setDuration(dur);
        setProgress((curr / dur) * 100);
        if (!videoRef.current.paused) saveTime();
    };

    const handleSeek = (e) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        videoRef.current.currentTime = percent * videoRef.current.duration;
    };

    const handleVolumeChange = (e) => {
        e.stopPropagation();
        const newVol = parseFloat(e.target.value) / 100;
        setVolume(newVol);
        if (videoRef.current) {
            videoRef.current.volume = newVol;
            if (newVol > 0 && isMuted) {
                videoRef.current.muted = false;
                setIsMuted(false);
            }
        }
    };

    // Pause if not active (controlled by parent ideally, but also local logic)
    useEffect(() => {
        if (!isActive && videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
            setIsPlaying(false);
            saveTime();
        }
    }, [isActive]);

    return (
        <div className="group cursor-pointer testimonial-video-card min-w-[300px] md:min-w-[45%] lg:min-w-[32%]" tabIndex="0">
            <div className="relative aspect-[9/16] w-full overflow-hidden border-2 border-white/10 bg-gray-900 shadow-[8px_8px_0px_0px_rgba(255,109,0,0.2)] group-hover:shadow-[12px_12px_0px_0px_rgba(255,109,0,0.5)] transition-all duration-300 group-hover:-translate-y-2">

                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover testimonial-video"
                    playsInline
                    loop
                    poster={posterSrc}
                    onTimeUpdate={handleTimeUpdate}
                    onClick={togglePlay}
                    onEnded={() => setIsPlaying(false)}
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>

                {/* <Video src={videoSrc} style={{ width: "33%" }} /> */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>

                {/* Video Controls Overlay */}
                <div className={`video-controls absolute top-0 left-0 right-0 bg-gradient-to-b from-black via-black/80 to-transparent p-4 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    {/* Progress Bar */}
                    <div className="mb-3 group/progress cursor-pointer" onClick={handleSeek}>
                        <div className="video-progress-bar h-1 bg-white/20 rounded-full overflow-hidden group-hover/progress:h-2 transition-all duration-200">
                            <div className="video-progress h-full bg-primary rounded-full" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-between gap-3 text-white">
                        <button onClick={togglePlay} className="video-play-btn flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-xl">{isPlaying ? 'pause' : 'play_arrow'}</span>
                        </button>

                        <div className="flex items-center gap-2 group/volume">
                            <button onClick={toggleMute} className="video-mute-btn flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/20 transition-colors">
                                <span className="material-symbols-outlined text-xl">{isMuted ? 'volume_off' : 'volume_up'}</span>
                            </button>
                            <div className="hidden group-hover/volume:flex items-center gap-2">
                                <input
                                    type="range"
                                    min="0" max="100"
                                    value={volume * 100}
                                    onChange={handleVolumeChange}
                                    onClick={(e) => e.stopPropagation()}
                                    className="video-volume-slider w-16 h-1 bg-white/20 rounded-full appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="flex-1 text-right">
                            <span className="video-time text-xs font-medium">{formatTime(currentTime)} / {formatTime(duration)}</span>
                        </div>
                    </div>
                </div>

                {/* Big Play Button Overlay */}
                {!isPlaying && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,109,0,0.4)]">
                            <span className="material-symbols-outlined text-5xl ml-1">play_arrow</span>
                        </div>
                    </div>
                )}

                {/* Info Overlay */}
                <div className={`absolute bottom-0 p-8 pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
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
