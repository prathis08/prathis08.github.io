import React from "react";
import { portfolioData } from "../data";
import Section from "./Section";

const Contact = () => (
  <Section id="contact" title="Get In Touch">
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-slate-600 dark:text-slate-300 mb-8">
        I'm currently open to new opportunities and collaborations. Feel free to
        reach out via email or connect with me on LinkedIn.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a
          href={`mailto:${portfolioData.email}`}
          className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          {portfolioData.email}
        </a>
        <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">
          |
        </span>
        <a
          href={portfolioData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </Section>
);

export default Contact;
