import Image from "next/image"; // Import Image component
import memoiImage from "@/assets/images/memoji-computer.png"; // Import the image file
import ArrowDown from "@/assets/icons/arrow-down.svg"; // Import the arrow down icon
import grainImage from "@/assets/images/grain.jpg"; // Import the grain image
import StarIcon from "@/assets/icons/star.svg"; // Import the star icon
import SparkIcon from "@/assets/icons/sparkle.svg"; // Import the spark icon
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className=" size-[620px] hero-ring"></div>
        <div className=" size-[820px] hero-ring"></div>
        <div className=" size-[1020px] hero-ring"></div>
        <div className=" size-[1220px] hero-ring"></div>

        <HeroOrbit size={800} rotetion={-71}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={550} rotetion={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={590} rotetion={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={430} rotetion={-14}>
          <SparkIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={440} rotetion={79}>
          <SparkIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={530} rotetion={178}>
          <SparkIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={710} rotetion={144}>
          <SparkIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={720} rotetion={85}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={520} rotetion={-41}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={650} rotetion={-5}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memoiImage} alt="Hero Image" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 rounded-full size-2.5"></div>
            <div className="text-sm font-semibold">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Bulding Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I’m a passionate front-end developer with a knack for creating
            beautiful and functional web applications. I specialize in
            transforming designs into responsive.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2  border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let`s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
