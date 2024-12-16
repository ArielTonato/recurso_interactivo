import React from 'react';
import { motion } from 'framer-motion';

const QuizResults = ({ correctAnswers, totalQuestions, onRetry }) => {
  const percentage = (correctAnswers / totalQuestions) * 100;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg shadow-lg p-8 text-center"
    >
      <h2 className="text-2xl font-bold mb-4">¡Cuestionario Completado!</h2>
      <div className="mb-6">
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {percentage}%
        </div>
        <p className="text-gray-600">
          Respondiste correctamente {correctAnswers} de {totalQuestions} preguntas
        </p>
      </div>
      
      {percentage === 100 ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
          ¡Felicitaciones! ¡Has dominado los conceptos de CI/CD!
        </div>
      ) : (
        <div className="bg-blue-100 text-blue-800 p-4 rounded-lg mb-6">
          ¡Buen intento! Repasa los conceptos e intenta de nuevo para mejorar tu puntuación.
        </div>
      )}

      <button
        onClick={onRetry}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Intentar de nuevo
      </button>
    </motion.div>
  );
};

export default QuizResults;