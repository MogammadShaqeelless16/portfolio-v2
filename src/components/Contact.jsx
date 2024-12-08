import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDribbble
} from 'react-icons/fa';
import ContactLink from './ContactLink';

function Contact() {
  const contactLinks = [
    {
      icon: FiMail,
      href: "mailto:shaqeelless4@gmail.com",
      text: "shaqeelless4@gmail.com"
    },
    {
      icon: FiPhone,
      href: "tel:+27680938371",
      text: "+27 68 093 8371"
    },
    {
      icon: FaGithub,
      href: "https://github.com/yourusername",
      text: "GitHub Profile"
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/yourusername",
      text: "LinkedIn Profile"
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/yourusername",
      text: "Twitter Profile"
    },
    {
      icon: FaDribbble,
      href: "https://dribbble.com/yourusername",
      text: "Dribbble Portfolio"
    }
  ];

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Me</h2>
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ContactLink {...link} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;