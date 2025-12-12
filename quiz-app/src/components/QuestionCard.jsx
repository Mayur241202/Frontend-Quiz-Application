import React from 'react';

const QuestionCard = ({ questionNumber, question }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, rgba(198, 233, 247, 1) 0%, rgba(229, 248, 255, 1) 100%)',
        border: '1px solid rgba(150, 229, 255, 1)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px'
      }}
    >
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center">
        {questionNumber}. {question}
      </h2>
    </div>
  );
};

export default QuestionCard;