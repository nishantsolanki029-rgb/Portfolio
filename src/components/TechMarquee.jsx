import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  "React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Next.js", 
  "TypeScript", "Redux", "Firebase", "Figma", "Git", "GitHub", 
  "Postman", "REST APIs", "MySQL", "JavaScript", "HTML5", "CSS3"
];

const TechMarquee = () => {
  return (
    <div className="py-12 overflow-hidden bg-primary/5 border-y border-primary/10">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex gap-12 items-center"
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-4xl font-bold text-gray-300 dark:text-gray-700 hover:text-primary transition-colors cursor-default select-none uppercase tracking-tighter"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;
