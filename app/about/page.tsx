"use client";

import About from "../../components/About";
import { FloatingNav } from "../../components/ui/FloatingNavbar";
import { navItems } from "../../data/index";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main className="relative bg-black text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <About />
        <Footer />
      </div>
    </main>
  );
}
