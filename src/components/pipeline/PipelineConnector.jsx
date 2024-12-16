import React from 'react';
import { motion } from 'framer-motion';

const PipelineConnector = () => {
  return (
    <motion.div
      className="h-2 bg-gray-300 flex-grow mx-2"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default PipelineConnector;