import { motion } from "framer-motion";

const Hero = () => {
    const letters = ['M','i','d','j','o','u','r','n','e','y'];

    return (
        <div className="min-h-screen flex justify-center mt-50 bg-black">
            <h1 className="text-[250px] text-white font-extrabold tracking-tight flex ">
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
    );
};

export default Hero;
