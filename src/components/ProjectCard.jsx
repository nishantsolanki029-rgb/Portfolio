import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, X, Info } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa6';

const ProjectCard = ({ project }) => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden group flex flex-col h-full relative"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a 
            href={project.liveUrl} 
            className="p-3 bg-primary text-white rounded-full hover:scale-110 transition-transform"
            aria-label="Live Demo"
          >
            <ExternalLink size={20} />
          </a>
          <a 
            href={project.githubUrl} 
            className="p-3 bg-white text-dark-bg rounded-full hover:scale-110 transition-transform"
            aria-label="GitHub Code"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-primary/10 text-primary">
              {project.category || 'Project'}
            </span>
            <h3 className="text-xl font-bold mt-2 dark:text-dark-text group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <button 
            onClick={() => setShowCaseStudy(true)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-primary transition-colors"
            title="Quick View Case Study"
          >
            <Info size={18} />
          </button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <button 
          onClick={() => setShowCaseStudy(true)}
          className="flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
        >
          View Case Study <ArrowRight size={16} />
        </button>
      </div>

      {/* Case Study Overlay */}
      <AnimatePresence>
        {showCaseStudy && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-0 z-20 bg-white dark:bg-dark-card p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-bold text-primary">Case Study</h4>
              <button 
                onClick={() => setShowCaseStudy(false)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-red-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6 text-sm">
              <div>
                <h5 className="font-bold dark:text-dark-text mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" /> The Problem
                </h5>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div>
                <h5 className="font-bold dark:text-dark-text mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" /> My Approach
                </h5>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.approach}
                </p>
              </div>

              <div>
                <h5 className="font-bold dark:text-dark-text mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" /> The Solution
                </h5>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
