import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { WavyBackgroundDemo } from "./waves";
import image from "../assets/Adobe Express - file (6).png";

const Hero = () => {
    const lines = [
  "Midjourney is a research lab",
  "Focused on innovative",
  "thinking and enhancing",
  "human imagination"
];

const paragraph = `We are a small self-funded team focused on design, human infrastructure and AI. We have 11 full-time staff and an incredible set of advisors.`;

    const letters = ['M','i','d','j','o','u','r','n','e','y'];
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: true, margin: "-20% 0px" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [300, 0, 0, -50]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.8, 1], [0, 0, 1, 1, 0.9]);
    const imageScale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.7, 1, 1, 1.05]);

    return (
        <div ref={containerRef} className="min-h-[200vh] bg-black relative overflow-hidden">
            
            {/* Sticky Text */}
            <div className="min-h-screen flex justify-center  sticky top-0">
                <h1 className="text-[250px] text-white font-extrabold tracking-tight flex">
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ y: 200, scale: 0.8, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
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

            {/* Wavy Background Behind Image */}
            <div className="absolute mt-110 inset-0 z-0">
                <WavyBackgroundDemo />
            </div>

            {/* Animated Image and Text */}
            <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
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
                    style={{ minHeight: "70vh" }}
                />
                
                {/* Overlay Text */}
{/* Overlay Text */}
<div ref={textRef} id="about" className="absolute mt-[60rem] text-white text-6xl font-bold text-center px-4 z-20">
  {lines.map((line, lineIndex) => (
    <div key={lineIndex} className="overflow-hidden">
      {line.split(" ").map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: isInView ? 0.2 * wordIndex + lineIndex * 0.4 : 0
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  ))}

  <motion.p
    className="text-white text-sm pt-5"
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 2.2, duration: 0.6 }}
  >
    {paragraph.split(" ").map((word, i) => (
      <motion.span
        key={i}
        className="inline-block mr-1"
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          delay: isInView ? 2.3 + i * 0.02 : 0,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        {word}
      </motion.span>
    ))}
  </motion.p>

  <motion.button
    className="bg-lime-400 hover:bg-lime-300 text-black px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 mt-5"
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 4, type: "spring" }}
  >
    More info
  </motion.button>
</div>


            </motion.div>
        </div>
    );
};

export default Hero;
