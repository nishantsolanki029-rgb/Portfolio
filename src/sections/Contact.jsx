import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
        console.error("Submission Error:", data);
      }
    } catch (error) {
      setStatus('error');
      console.error("Fetch Error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-bg/50">
      <div className="container-custom">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or just want to say hello? Feel free to reach out!" 
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 dark:text-dark-text">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold dark:text-dark-text mb-1">Email Me</h4>
                  <p className="text-gray-600 dark:text-gray-400">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-secondary/10 text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold dark:text-dark-text mb-1">Call Me</h4>
                  <p className="text-gray-600 dark:text-gray-400">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-accent/10 text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold dark:text-dark-text mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold dark:text-dark-text mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {personalInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 flex items-center justify-center rounded-xl glass hover:bg-primary hover:text-white transition-all duration-300 text-gray-500 dark:text-gray-400"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-gray-300">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-dark-bg/50 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-dark-bg outline-none transition-all dark:text-dark-text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-gray-300">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-dark-bg/50 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-dark-bg outline-none transition-all dark:text-dark-text"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required 
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-dark-bg/50 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-dark-bg outline-none transition-all dark:text-dark-text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">Message</label>
                <textarea 
                  name="message"
                  required 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-dark-bg/50 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-dark-bg outline-none transition-all dark:text-dark-text resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-500 text-center font-medium mt-4">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center font-medium mt-4">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
