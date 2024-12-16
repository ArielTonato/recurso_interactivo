import React from 'react';

const QuizProgress = ({ current, total, correctAnswers }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Pregunta {current + 1} de {total}</span>
        <span className="text-sm font-medium">Correctas: {correctAnswers}/{total}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizProgress;