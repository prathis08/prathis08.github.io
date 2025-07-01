import React from "react";
import { portfolioData } from "../data";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center"
    >
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {portfolioData.name}
          </span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          {portfolioData.title}
        </p>
        <p className="mt-6 max-w-xl text-slate-500 dark:text-slate-400">
          {portfolioData.profile}
        </p>
        <div className="mt-8 flex justify-center md:justify-start space-x-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Me
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-semibold hover:bg-slate-300 transition-all transform hover:scale-105 shadow-lg dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50"></div>
          <img
            src={portfolioData.profileImage}
            alt="Prathis Upadhyay"
            className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-slate-800"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x400/EBF4FF/1E293B?text=PU";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
