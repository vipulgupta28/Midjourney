import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import image from "../assets/image-removebg-preview (1).png";

const Hero = () => {
    const letters = ['M', 'i', 'd', 'j', 'o', 'u', 'r', 'n', 'e', 'y'];
    const imageRef = useRef(null);
    const isInView = useInView(imageRef, { once: true, margin: "-100px" });

    return (
        <>
            {/* Hero Text */}
            <div className="min-h-screen flex justify-center items-center bg-black">
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

            {/* Spacer to allow scroll */}
            <div className="h-[100vh] bg-black"></div>

            {/* Scroll-triggered Image */}
            <div ref={imageRef} className="bg-black w-full overflow-hidden flex justify-center items-center py-20">
                <motion.img
                    src={image}
                    alt="Scroll Image"
                    initial={{ opacity: 0, y: 200 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full max-w-[2000px] object-cover"
                />
            </div>
        </>
    );
};

export default Hero;
