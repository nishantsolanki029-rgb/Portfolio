import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey and the companies I've had the pleasure to work with." 
        />

        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[-11px] md:left-1/2 top-0 md:top-6 w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-dark-bg z-10 -translate-x-1/2" />

                <div className="w-full md:w-1/2">
                  <div className={`glass-card p-8 hover:border-primary/50 transition-colors ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <div className={`flex items-center gap-3 mb-2 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Briefcase size={20} />
                      </div>
                      <span className="text-primary font-bold tracking-wider">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold dark:text-dark-text mb-1">{exp.role}</h3>
                    <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-4">{exp.company}</h4>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium dark:text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
