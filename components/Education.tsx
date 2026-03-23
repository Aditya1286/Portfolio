"use client";

import React from "react";
import { Timeline } from "./ui/Timeline";
import { timeline } from "@/data";
import Image from "next/image";
import { SparklesCore } from "./ui/Sparkles";
import { motion } from "framer-motion";

const Education = () => {
  const timelineData = timeline.map((item, index) => ({
    title: item.year.toString(),
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-[#1d1c20]/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-500 border border-white/10 hover:border-purple-500/50 mx-2 sm:mx-4 lg:mx-0 max-w-full sm:max-w-md lg:max-w-2xl overflow-hidden"
      >
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-purple-500/10 blur-[40px] group-hover:bg-purple-500/20 transition-all duration-500" />

        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 relative z-10">
          {/* Icon with animation */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#151318] p-2 rounded-2xl flex items-center justify-center overflow-hidden shadow-inner border border-white/5 group-hover:border-purple-500/30 transition-colors duration-300"
          >
            <Image
              src={item.icon}
              alt={item.year.toString()}
              width={100}
              height={100}
              className="w-full h-full object-contain rounded-xl"
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 w-full sm:w-auto mt-2">
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400 mb-2 sm:mb-4 group-hover:from-purple-200 group-hover:to-pink-400 transition-colors duration-500 leading-snug">
              {item.degree}
            </h4>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-400 mb-4 sm:mb-6 leading-relaxed font-light">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-sm"
              >
                📊 Score: {item.Marks}
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-sm"
              >
                🎓 Class of {item.year}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    ),
  }));

  return (
    <div id="Edu" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800 lg:m-10 rounded-xl mt-2">
      <div className="h-[30rem] sm:h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative">
        <h1 className="text-2xl sm:text-4xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20 px-4">
          Education
        </h1>
        <div className="w-full sm:w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 sm:w-1/4 blur-sm" />
          <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2 sm:w-1/4" />

          {/* Sparkles */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16 rounded-xl">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default Education;