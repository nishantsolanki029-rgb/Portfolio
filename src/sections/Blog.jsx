import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { blogs } from '../data';
import { ArrowRight, Calendar, User, X, Clock } from 'lucide-react';

const Blog = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <SectionHeading 
          title="Latest Blog Posts" 
          subtitle="Insights, tutorials, and my thoughts on the latest trends in web development." 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group h-full flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 py-1 px-3 bg-primary text-white text-xs font-bold rounded-full">
                  Tech
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> Nishant</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 dark:text-dark-text group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                  {blog.description}
                </p>

                <button 
                  onClick={() => setActiveBlog(blog)}
                  className="flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Detail Modal */}
      <AnimatePresence>
        {activeBlog && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveBlog(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-dark-card rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setActiveBlog(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white md:text-gray-500 hover:text-red-500 transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto max-h-[90vh]">
                <div className="relative h-64 md:h-80 w-full">
                  <img 
                    src={activeBlog.image} 
                    alt={activeBlog.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-white">{activeBlog.title}</h2>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8 border-b border-gray-100 dark:border-white/5 pb-6">
                    <span className="flex items-center gap-2 font-medium"><Calendar size={18} className="text-primary" /> {activeBlog.date}</span>
                    <span className="flex items-center gap-2 font-medium"><User size={18} className="text-primary" /> By Nishant</span>
                    <span className="flex items-center gap-2 font-medium"><Clock size={18} className="text-primary" /> 5 min read</span>
                  </div>

                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                      {activeBlog.content}
                    </p>
                    <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                      Stay tuned for more updates and in-depth tutorials on this topic. If you enjoyed this post, feel free to share it with your network!
                    </p>
                  </div>

                  <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-md uppercase tracking-wider">Web Development</span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-md uppercase tracking-wider">Tutorial</span>
                    </div>
                    <button 
                      onClick={() => setActiveBlog(null)}
                      className="btn-primary py-2 px-8"
                    >
                      Close Article
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
