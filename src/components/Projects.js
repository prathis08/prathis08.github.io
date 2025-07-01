import React from "react";
import { portfolioData } from "../data";
import Section from "./Section";

const Projects = () => (
  <Section id="projects" title="My Projects">
    <div className="grid md:grid-cols-2 gap-8">
      {portfolioData.projects.map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-lg flex flex-col transform transition-transform duration-300 hover:-translate-y-2"
        >
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mt-2 flex-grow">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              View Project &rarr;
            </a>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Projects;
