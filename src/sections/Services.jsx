import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data';

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <SectionHeading 
          title="My Services" 
          subtitle="Specialized solutions tailored to your business needs and digital goals." 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:bg-primary transition-all duration-500"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-white group-hover:text-primary transition-all duration-500 w-fit mb-6">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-dark-text group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-white/80 transition-colors leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
