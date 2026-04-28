import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Send } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-12 text-center text-white shadow-2xl"
        >
          {/* Background Decor */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 border-8 border-white rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 border-8 border-white rounded-full" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your next project?</h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              I'm currently available for freelance work and open to new opportunities. Let's build something amazing together.
            </p>
            <Link 
              to="contact" 
              smooth={true} 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all active:scale-95 shadow-xl"
            >
              Get Started <Send size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
