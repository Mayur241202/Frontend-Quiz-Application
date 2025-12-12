import React from 'react';
import { motion } from 'framer-motion';

const OptionsList = ({ options, selectedAnswer, onSelect }) => {
  return (
    <div className="space-y-4 mb-8">
      {options.map((option, idx) => (
        <motion.button
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          onClick={() => onSelect(option)}
          style={{
            background: selectedAnswer === option
              ? 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
              : 'linear-gradient(89.72deg, rgba(198, 233, 247, 0.1) 0.09%, rgba(229, 248, 255, 0.1) 99.91%)',
            border: selectedAnswer === option
              ? '2px solid rgba(150, 229, 255, 0.5)'
              : '1px solid rgba(150, 229, 255, 0.5)',
            borderRadius: '8px',
            padding: '16px',
            fontSize: '18px',
            fontWeight: '500',
            width: '100%',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {option}
        </motion.button>
      ))}
    </div>
  );
};

export default OptionsList;