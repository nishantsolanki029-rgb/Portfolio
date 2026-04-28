import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data';
import { Code2, Heart, Lightbulb, Zap } from 'lucide-react';

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable, and readable code." },
  { icon: Zap, title: "Performance", desc: "Optimizing apps for maximum speed and efficiency." },
  { icon: Heart, title: "User Focused", desc: "Designing with the end-user in mind for best UX." },
  { icon: Lightbulb, title: "Problem Solver", desc: "Finding creative solutions to complex challenges." },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-bg/50">
      <div className="container-custom">
        <SectionHeading 
          title="About Me" 
          subtitle="My journey as a developer and what drives me to build great software." 
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 dark:text-dark-text">
              Passionate developer focused on building <span className="text-primary">clean UI</span> and <span className="text-secondary">scalable apps</span>.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Hello! I'm {personalInfo.name}, a developer with a passion for creating digital experiences that are both beautiful and functional. My journey in web development started with a curiosity about how things work on the internet, which quickly turned into a career dedicated to building high-quality applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I specialize in the MERN stack and modern frontend technologies. I believe in continuous learning and staying updated with the latest industry trends to provide the best solutions for my clients.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-dark-text">{item.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">1+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="glass-card p-6 text-center bg-primary/5 border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="glass-card p-6 text-center bg-secondary/5 border-secondary/20">
                <div className="text-4xl font-bold text-secondary mb-2">1+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Happy Client</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Support & Dedication</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
