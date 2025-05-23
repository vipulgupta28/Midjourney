import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause } from "lucide-react";
import video from "../assets/videoplayback.mp4"

const Video = () => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const isInView = useInView(containerRef, { 
        once: true, 
        threshold: 0.3,
        margin: "-100px 0px -100px 0px"
    });

    const togglePlay = () => {
        const videoEl = videoRef.current;
        if (!videoEl) return;

        if (videoEl.paused) {
            videoEl.play();
            setIsPlaying(true);
        } else {
            videoEl.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="min-h-screen bg-black">
            {/* Spacer content to enable scrolling */}
            <div className="h-screen flex items-center justify-center">
                <div className="text-white/70 text-center">
                    <h1 className="text-4xl font-light mb-4">Scroll down to see the video</h1>
                    <div className="animate-bounce">↓</div>
                </div>
            </div>

            {/* Video section */}
            <div 
                ref={containerRef}
                className="flex justify-center items-center h-screen bg-black relative overflow-hidden"
            >
                {/* Animated background pattern */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-800/20"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />

                {/* Floating monochrome particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        initial={{ 
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                            opacity: 0 
                        }}
                        animate={isInView ? { 
                            y: [null, -80, 80],
                            opacity: [0, 0.4, 0] 
                        } : {}}
                        transition={{
                            duration: 6 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Video container with scroll-triggered animation */}
                <motion.div
                    className="relative"
                    initial={{ 
                        scale: 0.2,
                        rotateX: 60,
                        rotateY: 20,
                        opacity: 0,
                        y: 150
                    }}
                    animate={isInView ? { 
                        scale: 1,
                        rotateX: 0,
                        rotateY: 0,
                        opacity: 1,
                        y: 0
                    } : {}}
                    transition={{
                        duration: 1.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: "spring",
                        stiffness: 80,
                        damping: 20
                    }}
                >
                    {/* Monochrome glowing border */}
                    <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-white via-gray-300 to-white rounded-[21px] opacity-0"
                        animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    />
                    
                    {/* Subtle outer glow */}
                    <motion.div
                        className="absolute -inset-3 bg-white/10 rounded-[24px] blur-xl opacity-0"
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 1.2, duration: 1.2 }}
                    />

                    {/* Video element with grayscale filter */}
                    <motion.video
                        ref={videoRef}
                        src={video}
                        className="relative rounded-[20px] border-2 border-white/20 w-[90vw] max-w-[1700px] h-[700px] shadow-2xl "
                        playsInline
                        preload="metadata"
                        muted
                        initial={{ 
                            filter: "",
                            borderRadius: "60px"
                        }}
                        animate={isInView ? { 
                            filter: "",
                            borderRadius: "20px"
                        } : {}}
                        transition={{ 
                            delay: 0.6, 
                            duration: 1.2,
                            ease: "easeOut"
                        }}
                    />

                    {/* Black and white shimmer effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-[20px]"
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={isInView ? { 
                            x: "100%", 
                            opacity: [0, 1, 0] 
                        } : {}}
                        transition={{
                            delay: 1.8,
                            duration: 2,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Vintage film grain overlay */}
                    <motion.div
                        className="absolute inset-0 rounded-[20px] opacity-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
                        }}
                        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
                        transition={{ delay: 2.2, duration: 0.8 }}
                    />
                </motion.div>

                {/* Monochrome play/pause button */}
                <motion.button
                    onClick={togglePlay}
                    className="absolute text-white bg-black/40 hover:bg-black/60 backdrop-blur-md p-6 rounded-full transition-all duration-300 border-2 border-white/30 shadow-2xl"
                    initial={{ 
                        scale: 0,
                        rotate: 180,
                        opacity: 0
                    }}
                    animate={isInView ? { 
                        scale: 1,
                        rotate: 0,
                        opacity: 1
                    } : {}}
                    transition={{
                        delay: 2,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 150,
                        damping: 20
                    }}
                    whileHover={{ 
                        scale: 1.1,
                        borderColor: "rgba(255,255,255,0.6)",
                        boxShadow: "0 0 25px rgba(255,255,255,0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 2.3, duration: 0.4 }}
                    >
                        {isPlaying ? <Pause size={40} /> : <Play size={40} />}
                    </motion.div>
                </motion.button>

                {/* Minimalist corner accents */}
                {[
                    { top: "15%", left: "15%", delay: 2.4 },
                    { top: "15%", right: "15%", delay: 2.6 },
                    { bottom: "15%", left: "15%", delay: 2.8 },
                    { bottom: "15%", right: "15%", delay: 3 }
                ].map((pos, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-12 h-12 border-l border-t border-white/20"
                        style={pos}
                        initial={{ opacity: 0, scale: 0, rotate: 45 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{
                            delay: pos.delay,
                            duration: 1,
                            type: "spring",
                            stiffness: 120
                        }}
                    />
                ))}

                {/* Monochrome subtitle */}
                <motion.div
                    className="absolute bottom-12 text-white/60 text-sm font-light tracking-[0.3em] uppercase"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 3.2, duration: 1.2 }}
                >
                    Cinematic Experience
                </motion.div>

                {/* Subtle scanlines effect */}
                <motion.div
                    className="absolute inset-0 opacity-0 pointer-events-none"
                    style={{
                        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                    }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                />
            </div>

            {/* More content to enable scrolling */}
            <div className="h-screen flex items-center justify-center">
                <div className="text-white/70 text-center">
                    <h2 className="text-3xl font-light">Continue scrolling...</h2>
                </div>
            </div>
        </div>
    );
};

export default Video;