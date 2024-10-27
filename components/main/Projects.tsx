import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 py-20">
      <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-semibold text-transparent mb-10 bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500">
        My Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row flex-wrap gap-8 px-8 md:px-16">
        <ProjectCard
          src="/portfolio_img.png"
          title="Portfolio"
          description="This project uses Next.js for SSR, React for UI, Tailwind CSS for styling, Framer Motion for animations, and React Three Fiber for 3D graphics with TypeScript."
        />
        <ProjectCard
          src="/portfolio_img_2.png"
          title="Responsive Portfolio"
          description="This project uses Vite for fast development and build processes, React for the UI, and Splide.js for creating responsive sliders."
        />
        <ProjectCard
          src="/E-Commerce-inly.png"
          title="E-commerce"
          description="Built with React for UI, Redux Toolkit for state management, and Tailwind CSS for responsive styling."
        />
      </div>
    </div>
    </section>
  );
};

export default Projects;