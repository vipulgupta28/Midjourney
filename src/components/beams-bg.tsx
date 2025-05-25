"use client";
import { BackgroundBeams } from "../ui/beams";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import image from "../assets/Adobe Express - file (4).png"

export function BackgroundBeamsDemo() {
  const [showImage, setShowImage] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowImage(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const lines = [
    "Create your",
    "First image with",
    "AI",
  ];

  return (
    <div
      ref={ref}
      className="h-[50rem] w-full relative flex flex-col items-center justify-center bg-black overflow-hidden rounded-md text-white"
    >
      {/* Background image behind text */}
      {showImage && (
        <motion.div
          className="absolute inset-0 z-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <img
            src={image}
            alt="Dinosaur"
            className="h-200 w-170 object-cover rounded-xl"
          />
        </motion.div>
      )}

      {/* Text Content */}
      <motion.div
        className="z-10 text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="overflow-hidden">
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : {}
                }
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.2 * wordIndex + lineIndex * 0.4
                }}
                className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-neutral-200 to-neutral-600 mb-6 text-center"
              >
                {word}
              </motion.span>
            ))}
          </div>
        ))}

        <motion.p
          className="text-sm text-white mb-6 mt-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 2.5 }}
        >
          Be explicit about what you want. It may be less vibey but if you are<br />
          explicit it is MUCH easier to understand you.
        </motion.p>

        <motion.button
          className="px-6 py-3 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-300 transition"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 2.8 }}
        >
          Start Now
        </motion.button>
      </motion.div>

      {/* Beams Background */}
      <BackgroundBeams />
    </div>
  );
}
