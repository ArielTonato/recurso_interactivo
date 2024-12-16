import React from 'react';
import { motion } from 'framer-motion';

const PipelineStage = ({ name, color }) => {
  return (
    <motion.div
      className={`${color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {name}
    </motion.div>
  );
};

export default PipelineStage;