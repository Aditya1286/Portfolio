import React from "react";
import { MacbookScroll } from "@/components/ui/Macbook";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export function MacbookScrollDemo() {
  return (
    <div className="h-screen sm:h-[90vh] md:h-[95vh] lg:h-[250vh] overflow-hidden dark:bg-[#1a1a1a] bg-[#1a1a1a] w-[95%] mx-auto relative rounded-xl">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Coffee bean decorative elements */}
      <div className="absolute top-10 right-10 text-4xl opacity-20 animate-bounce">☕</div>
      <div className="absolute bottom-20 left-10 text-3xl opacity-20 animate-bounce delay-500">💻</div>
      <div className="absolute top-1/3 right-1/3 text-2xl opacity-20 animate-bounce delay-1000">⚡</div>
      
      {/* Main content - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <MacbookScroll
          title={
            <div className="space-y-6">
              <TextGenerateEffect
                words="Fueled by caffeine, driven by code ☕💻"
                className="text-center text-[32px] md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight"
              />
              <div className="text-center text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium tracking-wide">
                Debugging life one commit at a time
              </div>
              
              {/* Tech stack badges */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                  React
                </span>
                <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium border border-yellow-200 dark:border-yellow-700">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium border border-green-200 dark:border-green-700">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700">
                  TypeScript
                </span>
              </div>
              
              {/* Coffee status indicator */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Currently caffeinated and ready to code
                </span>
              </div>
            </div>
          }
          src={`https://i.pinimg.com/1200x/08/c8/7e/08c87e7270e7558c0fd5e358aec3bb49.jpg`}
          showGradient={false}
        />
      </div>
      
      {/* Floating code snippets */}
      <div className="absolute top-1/4 left-10 opacity-10 dark:opacity-20 font-mono text-sm">
        <div className="animate-pulse">
          const coffee = "☕";
          <br />
          const code = "💻";
          <br />
          const life = coffee + code;
        </div>
      </div>
      
      <div className="absolute bottom-1/4 right-10 opacity-10 dark:opacity-20 font-mono text-sm">
        <div className="animate-pulse delay-1000">
          while (awake) {"{"}
          <br />
          &nbsp;&nbsp;drink(coffee);
          <br />
          &nbsp;&nbsp;write(code);
          <br />
          {"}"}
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
    </div>
  );
}

export default MacbookScrollDemo;