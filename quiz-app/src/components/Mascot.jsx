import React from 'react';
import { motion } from 'framer-motion';

const Mascot = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="absolute left-8 bottom-8 z-10"
    >
      {/* Speech Bubble */}
      <div className="bg-white rounded-2xl shadow-lg p-4 relative mb-2" style={{
        border: '3px solid #71C6E2',
        borderRadius: '20px',
        maxWidth: '200px'
      }}>
        {/* Speech bubble tail pointing down */}
        <div 
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
          style={{
            width: '0',
            height: '0',
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent',
            borderTop: '12px solid #71C6E2'
          }}
        />
        <div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
          style={{
            width: '0',
            height: '0',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '10px solid white'
          }}
        />
        <p className="text-gray-800 font-bold text-center text-xl" style={{
          fontFamily: 'Comic Sans MS, cursive, sans-serif'
        }}>
          Best of Luck!
        </p>
      </div>
      
      {/* Cat paw image */}
      <div className="flex justify-center">
        <img src="/cat_palm.gif" alt="Cat" style={{ width: '150px', height: '150px' }} />
      </div>
    </motion.div>
  );
};

export default Mascot;