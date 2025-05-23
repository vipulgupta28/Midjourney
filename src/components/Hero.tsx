import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import image from "../assets/Adobe Express - file (6).png"

const Hero = () => {
    const letters = ['M','i','d','j','o','u','r','n','e','y'];
    const containerRef = useRef(null);
    
    // Track scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    // Transform values based on scroll - image starts completely outside
    const imageY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [300, 0, 0, -50]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.8, 1], [0, 0, 1, 1, 0.9]);
    const imageScale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.7, 1, 1, 1.05]);
    
    return (
        <div ref={containerRef} className="min-h-[200vh] bg-black relative overflow-hidden">
            {/* Text Section */}
            <div className="min-h-screen flex justify-center items-center sticky top-0">
                <h1 className="text-[250px] text-white font-extrabold tracking-tight flex">
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ y: 200, scale: 0.8, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                                mass: 1,
                                delay: index * 0.1
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </h1>
            </div>
            
            {/* Animated Image Section - starts hidden outside viewport */}
            <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                    y: imageY,
                    opacity: imageOpacity,
                    scale: imageScale
                }}
                initial={{ y: 400, opacity: 0, scale: 0.6 }}
            >
                <motion.img
                    src={image}
                    alt="Midjourney"
                    className="w-full h-auto object-cover min-w-full"
                    style={{
                        minHeight: "70vh"
                    }}
                />
                 <div className="absolute mt-250 text-white text-6xl font-bold z-10 text-center px-4">
       Midjourney is a research lab<br/>Focused on innovative<br/> thinking and enhancing<br/>human imagination
       <p className="text-gray-400 text-sm pt-5">We are a small self-funed team focused on design, human<br/> infrastructure and AI. We hav 11 full-time staff and an<br/> incredible set of advisors</p>
       <button className="bg-lime-400 hover:bg-lime-300 text-black px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300">More info</button>
    </div>
    
               
            </motion.div>
            

        </div>
    );
};

export default Hero;