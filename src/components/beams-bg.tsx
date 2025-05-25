"use client";
import { BackgroundBeams } from "../ui/beams";
import { motion } from "framer-motion";
import Image from "../assets/ChatGPT Image May 25, 2025, 02_35_08 PM.png";
import { useState, useEffect } from "react";

export function BackgroundBeamsDemo() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 3000); // Wait for text animation (~2s), then 1s pause

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-[50rem] w-full relative flex flex-col items-center justify-center bg-black overflow-hidden rounded-md text-white">
      {/* Background image behind text */}
      {showImage && (
        <motion.div
          className="absolute  rounded-xl z-10 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <img
            src={Image} // make sure this path is in your public folder
            alt="Dinosaur"
            className="rounded-xl h-140 w-140"
          />
        </motion.div>
      )}

      {/* Text Content */}
      <motion.div
        className="z-10 text-center px-4 "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-neutral-200 to-neutral-600 mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Create your<br /> first AI image
        </motion.h1>

        <motion.p
          className="text-sm text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Be explicit about what you want. It may be less vibey but is you are <br />
          Explicit it is MUCH easier to understand you
        </motion.p>

        <motion.button
          className="px-6 py-3 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-300 transition"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          Start Now
        </motion.button>
      </motion.div>

      {/* Beams Background */}
      <BackgroundBeams />
    </div>
  );
}
