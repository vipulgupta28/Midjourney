import { ThreeDCardDemo } from "./3d-card";

const Updates = () => {
    return (
        <div className="mt-20 flex flex-col items-center justify-center min-h-screen bg-black text-center px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-neutral-200 to-neutral-600 mb-6">
          Stay ahead with<br /> updates
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
