"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
};

const RevealText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.03 } },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={revealVariants} className="inline-block mr-1.5">
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

const About = () => {
  const [githubRepos, setGithubRepos] = useState<number>(22);
  const [leetcodeSolved, setLeetcodeSolved] = useState<number>(695);

  useEffect(() => {
    // Fetch GitHub Repos
    fetch('https://api.github.com/users/Aditya1286')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.public_repos === 'number') {
          setGithubRepos(data.public_repos);
        }
      })
      .catch(console.error);

    // Fetch LeetCode Stats
    fetch('https://leetcode-stats-api.herokuapp.com/BerserkDev')
      .then(res => res.json())
      .then(data => {
        if (data && data.totalSolved !== undefined) {
          setLeetcodeSolved(data.totalSolved);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <section id="about" className="py-20 lg:py-32 bg-black text-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">

        {/* Top Split Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between min-h-[60vh] gap-12 lg:gap-8 mb-32">

          {/* Left Side text */}
          <div className="flex-1 flex flex-col justify-center gap-6 lg:pr-10 w-full mt-10 lg:mt-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Nice to meet you, <br />
              <span className="text-white">I&apos;m Aditya</span>
            </motion.h1>

            <RevealText
              text="I specialize in building exceptional digital experiences using React, Next.js, and modern web technologies. When I'm not coding, you can find me exploring new tech, contributing to open source, or solving complex problems. I also enjoy listening to music 🎵, reading books 📚, and drinking coffee ☕."
              className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-light mt-4"
            />

            <div className="flex flex-wrap items-center gap-10 md:gap-16 mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-end gap-3"
              >
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
                  {githubRepos}
                  <span className="text-blue-500">+</span>
                </span>
                <span className="text-gray-400 text-xs sm:text-sm font-medium leading-snug w-24 pb-1 md:pb-2">
                  GitHub<br />Repositories
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-end gap-3"
              >
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
                  {leetcodeSolved}
                  <span className="text-blue-500">+</span>
                </span>
                <span className="text-gray-400 text-xs sm:text-sm font-medium leading-snug w-24 pb-1 md:pb-2">
                  Questions<br />Solved
                </span>
              </motion.div>
            </div>
          </div>

          {/* Right Side Photo */}
          <div className="flex-1 flex justify-center lg:justify-end items-center w-full">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full overflow-hidden flex-shrink-0 shadow-[0_0_60px_rgba(255,255,255,0.05)] border-4 border-white/5 bg-[#151318]">
              <Image
                src="/dp1.png"
                fill
                alt="Aditya"
                className="object-cover scale-110 object-top"
                unoptimized
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
