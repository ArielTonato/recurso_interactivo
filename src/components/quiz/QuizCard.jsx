import React from 'react';
import { motion } from 'framer-motion';

const QuizCard = ({ question, options, selectedOption, onSelect, isCorrect, showResult }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6 mb-4"
    >
      <h3 className="text-xl font-semibold mb-4">{question}</h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              selectedOption === index
                ? showResult
                  ? isCorrect
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : 'bg-blue-100 border-blue-500'
                : 'bg-gray-50 hover:bg-gray-100'
            } border-2`}
          >
            {option}
          </button>
        ))}
      </div>
      {showResult && (
        <div className={`mt-4 p-3 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {isCorrect ? '¡Correcto!' : 'Incorrecto. Intenta de nuevo.'}
        </div>
      )}
    </motion.div>
  );
};

export default QuizCard;