import React from 'react';
import QuizCard from './QuizCard';
import QuizProgress from './QuizProgress';
import QuizResults from './QuizResult';
import { quizQuestions } from '../../constants/quizQuestions';
import useQuiz from '../../../hooks/useQuiz';

const Quiz = () => {
  const {
    currentQuestion,
    selectedOptions,
    showResults,
    correctAnswers,
    showResult,
    handleOptionSelect,
    resetQuiz
  } = useQuiz(quizQuestions);

  if (showResults) {
    return (
      <QuizResults
        correctAnswers={correctAnswers}
        totalQuestions={quizQuestions.length}
        onRetry={resetQuiz}
      />
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Cuestionario CI/CD</h2>
      <QuizProgress
        current={currentQuestion}
        total={quizQuestions.length}
        correctAnswers={correctAnswers}
      />
      <QuizCard
        question={question.question}
        options={question.options}
        selectedOption={selectedOptions[currentQuestion]}
        onSelect={handleOptionSelect}
        isCorrect={selectedOptions[currentQuestion] === question.correctAnswer}
        showResult={showResult}
      />
    </div>
  );
};

export default Quiz;