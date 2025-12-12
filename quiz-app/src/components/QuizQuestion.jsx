import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuizHeader from './QuizHeader';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import OptionsList from './OptionsList';
import NavigationButtons from './NavigationButtons';
import Mascot from './Mascot';

const QuizQuestion = ({
  currentQuestion,
  questions,
  selectedAnswers,
  onAnswerSelect,
  onNext,
  onBack
}) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 relative"
      style={{
        background: 'linear-gradient(107.96deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)'
      }}
    >
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'linear-gradient(112.86deg, rgba(255, 255, 255, 0.4) -6.68%, rgba(255, 255, 255, 0.12) 45.63%, rgba(255, 255, 255, 0.4) 103.45%)',
            borderRadius: '50px',
            padding: '30px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-b from-blue-50 to-white rounded-3xl shadow-2xl overflow-hidden relative"
          >
            {/* Mascot - Only on first question */}
            {currentQuestion === 0 && <Mascot />}

            {/* Main Content */}
            <div className="px-8 md:px-20 py-12 md:py-16" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {/* Header */}
              <QuizHeader />

              {/* Progress Bar */}
              <ProgressBar 
                currentQuestion={currentQuestion} 
                totalQuestions={questions.length} 
              />

              {/* Question and Options */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <QuestionCard
                    questionNumber={currentQuestion + 1}
                    question={questions[currentQuestion].question}
                  />

                  <OptionsList
                    options={questions[currentQuestion].options}
                    selectedAnswer={selectedAnswers[questions[currentQuestion].id]}
                    onSelect={onAnswerSelect}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <NavigationButtons
                currentQuestion={currentQuestion}
                totalQuestions={questions.length}
                isAnswerSelected={!!selectedAnswers[questions[currentQuestion].id]}
                onBack={onBack}
                onNext={onNext}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizQuestion;