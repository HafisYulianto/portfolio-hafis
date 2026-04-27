import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#030712] flex items-center justify-center overflow-hidden">
      <div className="relative flex flex-col items-center">
        {/* Glowing Orbs */}
        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] w-64 h-64 rounded-full -z-10 animate-pulse"></div>
        <div className="absolute inset-0 bg-purple-500/20 blur-[100px] w-64 h-64 rounded-full -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Text Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent flex items-center"
        >
          H <span className="text-white ml-1"> y</span>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-gray-800 rounded-full mt-8 overflow-hidden relative">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
