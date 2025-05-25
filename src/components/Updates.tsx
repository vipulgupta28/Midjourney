import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ThreeDCardDemo } from "./3d-card";
import { TextGenerateEffect } from "../ui/text-generate";

const Updates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="mt-20 flex flex-col items-center justify-center min-h-screen bg-black text-center px-4"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-neutral-200 to-neutral-600 mb-6">
        <TextGenerateEffect words="Stay ahead with updates" />
      </h1>

      <motion.p
        className="text-gray-400 text-lg mb-12 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        The new version boasts improved accuracy, greater coherence,
        <br className="hidden sm:block" />
        and a range of new, advanced features.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-2">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.4 + i * 0.2,
            }}
          >
            <ThreeDCardDemo />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
