/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

export const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -90 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              transition: { 
                type: 'spring', 
                stiffness: 100,
                damping: 10
              }
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="text-center"
          >
            {/* Main Spinner with Logo Integration */}
            <div className="relative">
              <CircularProgress 
                size={80}
                thickness={4}
                color="primary"
                className="text-blue-500"
              />
              
              {/* Optional center logo or text */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    transition: { 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </div>

            {/* Loading Text with Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <p className="text-gray-600 font-medium text-lg">
                Loading
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    repeatDelay: 0.5,
                  }}
                >
                  ...
                </motion.span>
              </p>
            </motion.div>

            {/* Optional Progress Indicator */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-1 bg-gray-200 mt-4 rounded-full overflow-hidden"
            >
              <div className="h-full bg-blue-500"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

