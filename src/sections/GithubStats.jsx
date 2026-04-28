import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { githubStats } from '../data';
import { Star, GitBranch, Users, Activity } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa6';

const icons = [Star, Activity, GitBranch, Users];

const GithubStats = () => {
  return (
    <section className="section-padding bg-dark-bg text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="inline-flex items-center gap-3 text-primary mb-6">
              <Github size={32} />
              <span className="text-xl font-bold uppercase tracking-widest">GitHub Activity</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Open Source is my <span className="text-primary">Passion</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I believe in sharing knowledge and contributing to the community. My GitHub profile showcases my consistent growth and dedication to building open-source tools.
            </p>
            <a 
              href={`https://github.com/${githubStats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-fit"
            >
              Follow me on GitHub
            </a>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-2 gap-6 w-full">
            {githubStats.stats.map((stat, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
