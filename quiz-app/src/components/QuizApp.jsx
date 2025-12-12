import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import ResultsScreen from './ResultsScreen';
import { questions, correctAnswers } from '../data/quizData';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questions[currentQuestion].id]: answer
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(selectedAnswers).forEach(qId => {
      if (selectedAnswers[qId] === correctAnswers[qId]) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  if (showResults) {
    return (
      <ResultsScreen 
        score={calculateScore()} 
        onRestart={handleRestart} 
      />
    );
  }

  return (
    <QuizQuestion
      currentQuestion={currentQuestion}
      questions={questions}
      selectedAnswers={selectedAnswers}
      onAnswerSelect={handleAnswerSelect}
      onNext={handleNext}
      onBack={handleBack}
    />
  );
};

export default QuizApp;