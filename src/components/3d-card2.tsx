"use client";

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import pink from "../assets/Pink-Hair.jpg";
import jeep from "../assets/jeep.jpg";

export function ThreeDCardDemo2() {
  return (
    <CardContainer className="inter-var">
     <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-zinc-900  w-auto sm:w-[45rem] h-[40rem] rounded-xl p-6 border   ">
        {/* Title */}
        <CardItem
  translateZ="50"
  className="text-5xl font-extrabold text-white text-center leading-tight"
>
  Minor Text for drawing abilities
</CardItem>


        {/* Subtext */}
        <div className="flex justify-center">
        <CardItem
          translateZ="30"
          as="p"
          className="text-neutral-400 text-xs mt-2 max-w-xs text-center"
        >
          (you must write your text in "quotations" and)--style raw or lower --stylize values
          may help
        </CardItem>
        </div>

        {/* Images Row */}
        <div className="mt-6 flex gap-3">
          <CardItem translateZ="80" className="relative w-1/2">
            <img
              src={pink}
              className="rounded-xl w-full h-85 object-cover"
              alt="Lamborghini"
            />
            <span className="absolute top-2 left-2 bg-neutral-200 text-black text-xs px-2 py-1 rounded-full font-semibold shadow-sm">
              New
            </span>
          </CardItem>

          <CardItem translateZ="80" className="relative w-1/2">
            <img
              src={jeep}
              className="rounded-xl w-full h-85 object-cover"
              alt="Gaming"
            />
            <span className="absolute bottom-2 left-2 bg-yellow-300 text-black text-xs px-2 py-1 rounded-full font-bold shadow-sm">
              Prompt
            </span>
          </CardItem>
        </div>

        {/* CTA (optional) */}
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as="a"
            href="#"
            className="text-sm font-medium text-lime-400 hover:underline"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold shadow"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
