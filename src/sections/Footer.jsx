import React from 'react';
import { Link } from 'react-scroll';
import { personalInfo } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-white/10 dark:bg-dark-bg">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <Link to="home" smooth={true} className="text-2xl font-bold cursor-pointer text-gradient">
            {personalInfo.name}
          </Link>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            Building digital excellence one pixel at a time.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <Link to="about" smooth={true} className="cursor-pointer hover:text-primary transition-colors text-sm font-medium dark:text-gray-300">About</Link>
          <Link to="projects" smooth={true} className="cursor-pointer hover:text-primary transition-colors text-sm font-medium dark:text-gray-300">Projects</Link>
          <Link to="blog" smooth={true} className="cursor-pointer hover:text-primary transition-colors text-sm font-medium dark:text-gray-300">Blog</Link>
          <Link to="contact" smooth={true} className="cursor-pointer hover:text-primary transition-colors text-sm font-medium dark:text-gray-300">Contact</Link>
        </div>

        <div className="flex gap-4">
          {personalInfo.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="text-gray-400 hover:text-primary transition-colors"
              title={social.name}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="container-custom mt-12 pt-8 border-t border-gray-100 dark:border-white/5 text-center">
        <p className="text-gray-400 text-xs">
          © {currentYear} {personalInfo.name}. All rights reserved. 
          <span className="mx-2">|</span>
          Built with React + Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
