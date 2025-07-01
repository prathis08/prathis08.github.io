import React from "react";
import { portfolioData } from "../data";
import Section from "./Section";

const Achievements = () => (
  <Section id="achievements" title="Achievements">
    <div className="grid md:grid-cols-2 gap-8">
      {portfolioData.achievements.map((achievement, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-lg flex items-start space-x-4 transform transition-transform duration-300 hover:-translate-y-2"
        >
          <div className="flex-shrink-0">
            <svg
              className="w-8 h-8 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
              {achievement.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mt-1">
              {achievement.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Achievements;
