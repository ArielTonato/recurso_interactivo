import React from 'react';
import { motion } from 'framer-motion';

const InfoCard = ({ title, children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </motion.div>
  );
};

export default InfoCard;