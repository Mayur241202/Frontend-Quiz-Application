import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ResultsScreen = ({ score, onRestart }) => {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const increment = score / (duration / 50);
    let currentValue = 0;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= score) {
        setDisplayScore(score);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.floor(currentValue));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-gray-50 px-6 py-2 rounded-full mb-8"
          >
            <p className="text-gray-700 font-medium">Keep Learning!</p>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'DM Serif Display',
              fontWeight: 400,
              fontStyle: 'italic'
            }}
            className="text-4xl md:text-5xl font-serif italic mb-4"
          >
            Your Final score is
          </motion.h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="text-8xl md:text-9xl font-bold text-teal-700 mb-8"
            style={{
              background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'DM Serif Display',
              fontWeight: 400
            }}
          >
            {displayScore}
            <span 
              className="text-6xl" 
              style={{
                background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'DM Serif Display',
                fontWeight: 400
              }}
            >
              %
            </span>
          </motion.div>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            onClick={onRestart}
            className="bg-cyan-100 hover:bg-cyan-200 text-gray-800 font-semibold px-10 py-4 rounded-xl transition-all duration-200"
            style={{
              background: 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Again
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultsScreen;