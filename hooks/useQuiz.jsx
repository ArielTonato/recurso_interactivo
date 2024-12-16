import { useState } from 'react';

export const useQuiz = (questions) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (optionIndex) => {
    if (showResult) return;

    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = optionIndex;
    setSelectedOptions(newSelectedOptions);
    setShowResult(true);

    const isCorrect = optionIndex === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setShowResult(false);
      } else {
        setShowResults(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOptions(new Array(questions.length).fill(null));
    setShowResults(false);
    setCorrectAnswers(0);
    setShowResult(false);
  };

  return {
    currentQuestion,
    selectedOptions,
    showResults,
    correctAnswers,
    showResult,
    handleOptionSelect,
    resetQuiz
  };
};

export default useQuiz;