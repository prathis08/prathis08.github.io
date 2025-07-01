import React from "react";

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

export default Section;
