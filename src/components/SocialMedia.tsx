import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com/jahidulhassan' },
  { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/jahidulhassan' },
  { name: 'Twitter', icon: <Twitter size={24} />, url: 'https://twitter.com/jahidulhassan' },
  { name: 'Email', icon: <Mail size={24} />, url: 'mailto:jahidul.hassan@example.com' },
];

const SocialMedia = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Connect With Me</h2>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-gray-400 hover:text-purple-400 transition duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;