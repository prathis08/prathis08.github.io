import React, { useState, useEffect } from "react";

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

export default ThemeSwitcher;
