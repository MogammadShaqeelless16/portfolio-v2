import React from 'react';
import CodeIllustration from './illustrations/CodeIllustration';
import DesignIllustration from './illustrations/DesignIllustration';
import { motion } from 'framer-motion';

function Artwork() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Creative Corner</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-lg shadow-sm"
          >
            <CodeIllustration />
            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Clean Code</h3>
            <p className="text-gray-600">Crafting elegant solutions through clean, maintainable code</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-white rounded-lg shadow-sm"
          >
            <DesignIllustration />
            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Creative Design</h3>
            <p className="text-gray-600">Bringing ideas to life through intuitive user interfaces</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Artwork;