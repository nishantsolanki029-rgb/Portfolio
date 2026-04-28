import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

const categories = ["All", "Full Stack", "Frontend", "Backend"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-bg/50">
      <div className="container-custom">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my best work, ranging from complex web apps to creative frontend designs." 
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-white dark:bg-dark-card dark:text-gray-300 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6 italic">Want to see more of my work?</p>
          <a 
            href="https://github.com/nishantsolanki029-rgb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary inline-flex"
          >
            Explore GitHub Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
