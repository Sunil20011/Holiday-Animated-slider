import { Rubik } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";

const inter = Rubik({
  subsets: ["latin"],
  weight: ["400"],

});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <Header />
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "/1.png",
    location: "Argentina and Brazil",
    description:
      "The overwhelming sight of Iguazú Falls, combined with the sound and energy of water rushing at up to 450,000 cubic feet per second in the rainy season, is pure magnificence.",
    title: "Iguazú Falls",
  },
  {
    img: "/2.png",
    title: "Fairy Meadows National Park",
    description:
      "Near the foot of the world's ninth-highest mountain (Nanga Parbat), Pakistan's Fairy Meadows offers sublime mountain scenery and wildlife, including brown bears, markhor, and Himalayan ibex",
    location: "Pakistan",
  },
  {
    img: "/3.png",
    title: "Anse Source d'Argent",
    description:
      "Pinpointing the most beautiful Seychellois beach is like splitting hairs, but Anse Source d'Argent gets extremely high marks for its sugar-white sand framed by dramatic granite boulders and sparkling aquamarine water.",
    location: "Seychelles",
  },
  {
    img: "/4.png",
    title: "Angkor Wat",
    description:
      "A stunning ancient jungle city with hundreds of intricately constructed temples",
    location: "Cambodia",
  },
  {
    img: "/5.png",
    title: "Torres del Paine National Park",
    description:
      " The UNESCO Biosphere Reserve is home to its namesake granite towers (the park's name is a combination of the Spanish word for “towers” and the Tehuelche word for “blue”), as well as sparkling lagoons and otherworldly glaciers.",
    location: "Chile",
  },
  {
    img: "/6.png",
    title: "Monteverde Cloud Forest",
    description:
      "This magical, misty, and well-preserved cloud forest in northwestern Costa Rica is a successful template for sustainable ecotourism. Along with its sister cloud forest, the Santa Elena Reserve, Monteverde is a practically untouched paradise home to thousands of plant, animal, and bird species (including the radiant quetzal), visible from jungle paths and nail-biting steel bridges hanging over the canopy.",
    location: "Costa Rica",
  },
  {
    img: "/7.png",
    title: "Bali",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "Indonesia",
  },
];

const initData = sliderData[0];
