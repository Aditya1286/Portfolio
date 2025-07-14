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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-white dark:bg-neutral-900 rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 border border-neutral-200 dark:border-neutral-800 hover:border-blue-400 dark:hover:border-blue-600 mx-2 sm:mx-4 lg:mx-0 max-w-full sm:max-w-md lg:max-w-lg"
      >
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Icon with animation */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center overflow-hidden shadow-lg"
          >
            <Image
              src={item.icon}
              alt={item.year.toString()}
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 w-full sm:w-auto">
            <h4 className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 sm:mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 break-words">
              {item.degree}
            </h4>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4 leading-relaxed">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-r from-green-100 to-emerald-200 dark:from-green-900/40 dark:to-emerald-900/40 text-green-800 dark:text-green-300 text-xs sm:text-sm font-semibold shadow-md"
              >
                📊 {item.Marks}
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-200 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-800 dark:text-blue-300 text-xs sm:text-sm font-semibold shadow-md"
              >
                🎓 {item.year}
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