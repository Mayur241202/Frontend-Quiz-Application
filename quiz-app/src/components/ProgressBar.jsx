import React from 'react';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between mt-2 px-1">
        {Array.from({ length: totalQuestions }).map((_, idx) => (
          <div
            key={idx}
            style={{
              height: '6px',
              flex: 1,
              margin: '0 4px',
              borderRadius: '4px',
              backgroundColor: idx <= currentQuestion ? 'rgba(21, 49, 61, 1)' : 'rgba(200, 200, 200, 1)',
              border: idx <= currentQuestion ? '2px solid rgba(21, 49, 61, 1)' : 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;