import React from "react";
import { portfolioData } from "../data";
import Section from "./Section";

const About = () => (
  <Section id="about" title="About Me">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-2/3 bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
          Education
        </h3>
        <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
          {portfolioData.education.degree}
        </p>
        <p className="text-slate-600 dark:text-slate-300">
          {portfolioData.education.university}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {portfolioData.education.year} | GPA: {portfolioData.education.gpa}
        </p>
      </div>
      <div className="md:w-1/3 bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
          Skills
        </h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {portfolioData.skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center"
              title={skill.name}
            >
              <i
                className={`${skill.icon} text-4xl text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}
              ></i>
              <span className="text-xs mt-1 text-slate-500 dark:text-slate-400">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default About;
