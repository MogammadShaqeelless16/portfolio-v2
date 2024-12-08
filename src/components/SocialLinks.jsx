import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDribbble
} from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/yourusername',
    color: 'hover:text-gray-900'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/yourusername',
    color: 'hover:text-blue-700'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/yourusername',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Dribbble',
    icon: FaDribbble,
    url: 'https://dribbble.com/yourusername',
    color: 'hover:text-pink-600'
  }
];

function SocialLinks() {
  return (
    <div className="flex space-x-4 justify-center">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-600 transition-colors duration-200 ${link.color}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <link.icon className="w-6 h-6" />
          <span className="sr-only">{link.name}</span>
        </motion.a>
      ))}
    </div>
  );
}

export default SocialLinks;