import React from 'react';
import { motion } from 'framer-motion';

const QuizHeader = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-center mb-8"
    >
      <h1 
        style={{
          background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontFamily: 'DM Serif Display',
          fontWeight: 400,
          fontStyle: 'italic'
        }} 
        className="text-5xl md:text-6xl mb-3"
      >
        Test Your Knowledge
      </h1>
      <div
        style={{
          width: '422px',
          height: '45px',
          borderRadius: '8px',
          padding: '10px 31px',
          backgroundColor: 'rgb(255, 255, 255)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          gap: '10px'
        }}
      >
        <p className="text-gray-600 text-lg font-medium m-0">
          Answer all questions to see your results
        </p>
      </div>
    </motion.div>
  );
};

export default QuizHeader;