import { FaLocationArrow, FaDownload } from "react-icons/fa6";

import MagicButton from './ui/MagicButton';
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">



          <TextGenerateEffect
            words="Translating Vision Into Seamless Digital Experiences That Feel Natural"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Aditya, a Next.js Developer based in India.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <a href="/about">
              <MagicButton
                title="About Me"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="https://drive.google.com/file/d/19iiVweK28zG6ZGV11GbimnPpkWXCz9ev/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <MagicButton
                title="Download CV"
                icon={<FaDownload />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;