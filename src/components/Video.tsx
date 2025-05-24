import { useRef, useState } from "react";
import video from "../assets/videoplayback.mp4";
import { Play, Pause } from "lucide-react"; // optional: use icons or replace with text

const Video = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

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
        <div className="flex justify-center items-center h-screen bg-black relative">
            {/* Video element */}
            <video
                ref={videoRef}
                src={video}
                className="rounded-[20px] border w-[90vw] max-w-[1900px] h-[800px] shadow-lg"
                playsInline
                preload="metadata"
                muted // Optional: remove if you want audio
            />

            {/* Custom Play/Pause button */}
            <button
                onClick={togglePlay}
                className="absolute text-white bg-white/10 hover:bg-white/20 backdrop-blur-md p-6 rounded-full transition-all duration-300"
            >
                {isPlaying ? <Pause size={40} /> : <Play size={40} />}
            </button>
        </div>
    );
};

export default Video;
