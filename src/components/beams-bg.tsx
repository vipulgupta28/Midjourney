"use client";
import { BackgroundBeams } from "../ui/beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[30rem] w-full relative flex flex-col items-center justify-center bg-black overflow-hidden rounded-md text-white">
      {/* Main Content */}
      <div className="z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-neutral-200 to-neutral-600 mb-6">
          Create your<br /> first AI image
        </h1>
        <p className="text-sm text-neutral-400 mb-6">
          Be explicit about what you want. It may be less vibey but is you are <br/> Explicit it is MUCH easier to understand you
        </p>
        <button className="px-6 py-3 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-300 transition">
          Start Now
        </button>
      </div>

      {/* Beams Background */}
      <BackgroundBeams />
    </div>
  );
}
