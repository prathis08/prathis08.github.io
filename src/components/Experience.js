import React from "react";
import { portfolioData } from "../data";
import Section from "./Section";

const Experience = () => (
  <Section id="experience" title="Work Experience">
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>

      {portfolioData.experience.map((job, index) => (
        <div
          key={index}
          className="mb-8 flex justify-center md:justify-between md:items-center w-full"
        >
          {/* Left Side */}
          <div
            className={`md:w-1/2 ${
              index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:order-2"
            }`}
          >
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto md:mx-0 transform transition-transform duration-500 hover:scale-105">
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                {job.period}
              </p>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1">
                {job.role}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-3">
                {job.company}
              </p>
              <ul className="list-disc list-inside text-sm text-left text-slate-600 dark:text-slate-300 space-y-1">
                {job.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Timeline Dot */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900"></div>
          {/* Right Side (Spacer) */}
          <div
            className={`hidden md:block md:w-1/2 ${
              index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:order-1"
            }`}
          ></div>
        </div>
      ))}
    </div>
  </Section>
);

export default Experience;
