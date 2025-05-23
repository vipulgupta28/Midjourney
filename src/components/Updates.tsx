import { ThreeDCardDemo } from "./3d-card";

const Updates = () => {
    return (
        <div className="mt-20 flex flex-col items-center justify-center min-h-screen bg-black text-center px-4">
            <h1 className="text-white text-[70px] font-extrabold leading-tight mb-6">
                Stay Ahead with <br /> Updates: V6.0
            </h1>
            <p className="text-gray-400 text-lg mb-12 max-w-3xl">
                The new version boasts improved accuracy, greater coherence,<br className="hidden sm:block" /> 
                and a range of new, advanced features.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
                <ThreeDCardDemo />
                <ThreeDCardDemo />
            </div>
        </div>
    );
};

export default Updates;
