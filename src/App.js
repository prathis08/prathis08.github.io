import React, { useState, useEffect } from "react";
import ParticleCanvas from "./ParticleCanvas";

// --- DATA ---
// To update the portfolio, just edit the values in this `portfolioData` object.
const portfolioData = {
  name: "Prathis Upadhyay",
  title: "Software Engineer",
  email: "prithuupadhyay0123@gmail.com",
  linkedin: "https://www.linkedin.com/in/prathis-upadhyay/", // Replace with your actual LinkedIn profile URL
  github: "https://github.com/prathis08",
  profileImage: "/pfp.jpeg",
  profile:
    "Highly innovative and results-oriented Engineer with a proven track record of quickly mastering new technologies. Adept at conveying complex technical ideas in clear terms. Ready to bring technical expertise and leadership to a dynamic team.",
  education: {
    degree: "Bachelors of Engineering",
    university: "DYPCOE, Akurdi, Savitribai Phule Pune University",
    year: "2019-2023",
    gpa: "8.66",
  },
  skills: [
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "ReactJs", icon: "devicon-react-original" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "Django", icon: "devicon-django-plain" },
    { name: "Flask", icon: "devicon-flask-original" },
    { name: "Hibernate", icon: "devicon-hibernate-plain" },
    { name: "GCP", icon: "devicon-googlecloud-plain" },
    { name: "Linux", icon: "devicon-linux-plain" },
    { name: "Git", icon: "devicon-git-plain" },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Lana Health",
      period: "Jan 2023 - Present",
      description: [
        "Developed and maintained robust backend solutions using Java, enhancing application performance and scalability.",
        "Created a video calling solution (signalling server) using Express.js and raw WebRTC.",
        "Engineered interactive user interfaces with ReactJs, optimizing UX/UI.",
        "Managed PostgreSQL databases and deployed services on Google Cloud Platform (GCP).",
      ],
    },
    {
      role: "Backend Developer Intern",
      company: "DevCorps IT Solutions",
      period: "Apr 2022 - Sep 2022",
      description: [
        "Developed and maintained the backend for a smart fitness band application using Flask.",
        "Managed MySQL databases and performed query optimization to improve data retrieval efficiency.",
        "Engineered and supported an additional application utilizing Flask, ensuring reliable performance.",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Evolve Floor",
      period: "Jan 2022 - May 2022",
      description: [
        "Developed a high-performance backend system utilizing Django.",
        "Improved API response times by 40% through database query optimization and caching.",
        "Maintained and improved user interfaces using ReactJS.",
        "Deployed applications on AWS EC2 (Linux environment).",
      ],
    },
  ],
  projects: [
    {
      title: "WebRTC Video Calling Solution",
      description:
        "Engineered an end-to-end video calling application from scratch, featuring a custom signaling server built with Express.js and raw WebRTC for high-performance, low-latency communication.",
      tags: ["WebRTC", "Express.js", "Node.js", "Socket.IO"],
      link: "#",
    },
    {
      title: "Smart Fitness Band Backend",
      description:
        "Developed the core backend infrastructure for a smart fitness band application using Flask. Focused on creating efficient RESTful APIs and optimizing MySQL database queries for fast data retrieval.",
      tags: ["Flask", "Python", "MySQL", "REST API"],
      link: "#",
    },
    {
      title: "National Robotics Competition (ABU Robocon)",
      description:
        "As programming lead, architected the control software for autonomous and manually-operated robots, leading the team to a national 2nd place finish. Developed complex algorithms for navigation and task execution.",
      tags: ["Robotics", "C++", "Python", "Algorithms"],
      link: "#",
    },
    {
      title: "High-Performance Django Backend",
      description:
        "Built and optimized a backend system for Evolve Floor, successfully reducing API response times by 40% through strategic database query optimization and advanced caching techniques.",
      tags: ["Django", "Python", "Caching", "AWS EC2"],
      link: "#",
    },
  ],
  achievements: [
    {
      title: "World Robotics Championship",
      description:
        "Led a robotics team to 6th place among 180+ international teams in Technoxian (by AICRA).",
    },
    {
      title: "National ABU Robocon 2020",
      description: "Achieved AIR 2 as the programming team lead.",
    },
    {
      title: "JPMorgan Chase & Co. Internship",
      description:
        "Completed the Virtual Software Engineering Internship program.",
    },
    {
      title: "HackerRank Achievements",
      description:
        "Reached 5-Star level in both Python and SQL problem-solving.",
    },
  ],
};

// --- HELPER COMPONENTS ---

// Component to inject stylesheet into the document head
const HeadInjector = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css";
    document.head.appendChild(link);

    // Cleanup function to remove the link when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []); // Empty dependency array ensures this runs only once

  return null; // This component does not render any visible UI
};

// Theme Switcher Component
const ThemeSwitcher = ({ theme, setTheme }) => {
  const toggleTheme = (selectedTheme) => {
    if (selectedTheme === "system") {
      setTheme("system");
      localStorage.removeItem("theme");
    } else {
      setTheme(selectedTheme);
      localStorage.setItem("theme", selectedTheme);
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (localTheme) {
      document.documentElement.classList.toggle("dark", localTheme === "dark");
    } else {
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  }, [theme]);

  const SunIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );
  const MoonIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
  const SystemIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );

  return (
    <div className="flex items-center space-x-2 p-1 bg-slate-200 dark:bg-slate-700 rounded-full">
      <button
        onClick={() => toggleTheme("light")}
        className={`p-2 rounded-full ${
          theme === "light" && !localStorage.getItem("theme")
            ? "bg-white dark:bg-slate-500"
            : ""
        } transition-colors`}
      >
        {" "}
        <SunIcon />{" "}
      </button>
      <button
        onClick={() => toggleTheme("dark")}
        className={`p-2 rounded-full ${
          theme === "dark" ? "bg-white dark:bg-slate-500" : ""
        } transition-colors`}
      >
        {" "}
        <MoonIcon />{" "}
      </button>
      <button
        onClick={() => toggleTheme("system")}
        className={`p-2 rounded-full ${
          theme === "system" || !localStorage.getItem("theme")
            ? "bg-white dark:bg-slate-500"
            : ""
        } transition-colors`}
      >
        {" "}
        <SystemIcon />{" "}
      </button>
    </div>
  );
};

// --- SECTION COMPONENTS ---

const Header = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-slate-800 dark:text-white"
        >
          {portfolioData.name}
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
};

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

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
        {title}
      </h2>
      {children}
    </section>
  );
};

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

const Footer = () => (
  <footer className="py-6 text-center text-slate-500 dark:text-slate-400 text-sm">
    <p>
      &copy; {new Date().getFullYear()} {portfolioData.name}. All Rights
      Reserved.
    </p>
  </footer>
);

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
