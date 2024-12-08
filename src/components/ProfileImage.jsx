import React from 'react';
import { motion } from 'framer-motion';

function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-facebook to-primary-400 rounded-full opacity-20 blur-2xl transform -translate-y-4" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-facebook rounded-full opacity-20 blur-2xl transform translate-y-4" />
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img
          src="/profile.jpeg"
          alt="Shaqeel Less"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
}

export default ProfileImage;
