import React, { useState } from "react";
import ParticleCanvas from "./ParticleCanvas";
import HeadInjector from "./components/HeadInjector";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// --- MAIN APP COMPONENT ---
export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans leading-relaxed selection:bg-blue-500/30">
      <HeadInjector />
      <ParticleCanvas />
      <div className="relative z-10">
        <Header theme={theme} setTheme={setTheme} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
