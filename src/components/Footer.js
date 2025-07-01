import React from "react";
import { portfolioData } from "../data";

const Footer = () => (
  <footer className="py-6 text-center text-slate-500 dark:text-slate-400 text-sm">
    <p>
      &copy; {new Date().getFullYear()} {portfolioData.name}. All Rights
      Reserved.
    </p>
  </footer>
);

export default Footer;
