import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = useMemo(() => [personalInfo.role, "Frontend Specialist", "Backend Architect"], []);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  // Memoize particles to avoid hydration mismatch and purity errors
  const particles = useMemo(() => [...Array(6)].map((_, i) => ({
    id: i,
    size: Math.random() * 300 + 100,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 10,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
  })), []);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        setSpeed(50);
      } else {
        setDisplayText(prev => currentRole.substring(0, prev.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, speed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 section-padding">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
        
        {/* Particle-like elements */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
            }}
            animate={{
              y: [0, p.y, 0],
              x: [0, p.x, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6"
          >
            Available for new opportunities
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:text-dark-text leading-tight">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-8 h-12">
            {displayText}<span className="animate-pulse text-primary">|</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="projects" smooth={true} className="btn-primary cursor-pointer">
              View Projects <ChevronRight size={20} />
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transition-transform"
                title={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          {/* Stylized Avatar Placeholder */}
          <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop" 
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
      >
        <Link to="about" smooth={true} className="cursor-pointer">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
