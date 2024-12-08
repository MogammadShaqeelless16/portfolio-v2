import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from './ProfileImage';
import SocialLinks from './SocialLinks';

function Hero() {
  return (
    <div className="hero-section">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfileImage />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto px-4"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frontend Developer & WordPress Specialist
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Based in Cape Town, creating visually engaging, user-friendly, and scalable websites
            with modern technologies and best practices.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col space-y-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex justify-center space-x-4">
            <motion.a 
              href="#contact" 
              className="bg-facebook hover:bg-facebook-dark text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a 
              href="#projects" 
              className="border-2 border-facebook text-facebook hover:bg-facebook hover:text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>
          <SocialLinks />
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Hero;