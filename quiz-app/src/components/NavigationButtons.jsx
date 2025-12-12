import React from 'react';
import { motion } from 'framer-motion';

const NavigationButtons = ({ 
  currentQuestion, 
  totalQuestions, 
  isAnswerSelected, 
  onBack, 
  onNext 
}) => {
  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  return (
    <div className="flex justify-end gap-3">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onBack}
        disabled={isFirstQuestion}
        style={{
          background: !isFirstQuestion
            ? 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
            : 'rgba(200, 200, 200, 0.3)',
          borderRadius: '8px',
          padding: '12px',
          border: 'none',
          cursor: !isFirstQuestion ? 'pointer' : 'not-allowed',
          opacity: !isFirstQuestion ? 1 : 0.5,
          transition: 'all 0.2s'
        }}
        whileHover={!isFirstQuestion ? { scale: 1.05 } : {}}
        whileTap={!isFirstQuestion ? { scale: 0.95 } : {}}
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </motion.button>

      {/* Next/Submit Button */}
      <motion.button
        onClick={onNext}
        disabled={!isAnswerSelected}
        style={{
          background: isAnswerSelected
            ? 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
            : 'rgba(200, 200, 200, 0.3)',
          borderRadius: '8px',
          padding: '12px',
          border: 'none',
          cursor: isAnswerSelected ? 'pointer' : 'not-allowed',
          opacity: isAnswerSelected ? 1 : 0.5,
          transition: 'all 0.2s'
        }}
        whileHover={isAnswerSelected ? { scale: 1.05 } : {}}
        whileTap={isAnswerSelected ? { scale: 0.95 } : {}}
      >
        {isLastQuestion ? (
          <span className="px-4 font-semibold text-gray-800">Submit</span>
        ) : (
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </motion.button>
    </div>
  );
};

export default NavigationButtons;