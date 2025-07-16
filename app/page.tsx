"use client"

import { useEffect } from "react"
import Hero from "../components/Hero"
import Grid from "../components/Grid"
import Cert from "../components/Cert"
import Projects from "../components/Projects"
import Interest from "../components/Interest"
import Education from "../components/Education"
import { FloatingNav } from "../components/ui/FloatingNavbar"
import Footer from "../components/Footer"
import { navItems } from "../data/index"
import Lenis from "lenis"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
  duration: 1,
  easing: (t) => Math.sin((t * Math.PI) / 2), // smooth easeOutSine
  touchMultiplier: 2,
  wheelMultiplier: 1.2,

})
    const raf = (time:number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative bg-black text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Education />
        <Projects />
        <Cert />
        <Interest />
        <Footer />
      </div>
    </main>
  )
}