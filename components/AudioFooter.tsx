import React, { useState } from "react";
import { FaPlay, FaPause, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const AudioFooter = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-red-500 text-white flex flex-col items-center justify-center z-50"
            initial={{ y: "100%" }}  // Starts from the bottom
            animate={{ y: 0 }}        // Animates to the top
            exit={{ y: "100%" }}      // Exit animation (moves down)
            transition={{ duration: 0.2 }}  // Linear transition
          >
            <button
              onClick={handleCollapse}
              className="absolute top-4 right-4 text-gray-200 hover:text-white"
            >
              <FaTimes size={24} />
            </button>
            <img
              src="https://via.placeholder.com/150"
              alt="Album Art"
              className="w-40 h-40 rounded-lg mb-4"
            />
            <h1 className="text-2xl font-bold">Song Title</h1>
            <p className="text-lg text-gray-200">Artist Name</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isExpanded && (
        <footer className="fixed bottom-16 left-0 right-0 bg-gray-900 text-white flex items-center justify-between p-4">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={handleExpand}
          >
            <img
              src="https://via.placeholder.com/50"
              alt="Album Art"
              className="w-12 h-12 rounded-lg"
            />
            <div>
              <h3 className="text-sm font-medium">Song Title</h3>
              <p className="text-xs text-gray-400">Artist Name</p>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={togglePlay}
              className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-full hover:bg-teal-600"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button
              onClick={handleClose}
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white"
              aria-label="Close Audio Footer"
            >
              <FaTimes />
            </button>
          </div>
        </footer>
      )}
    </>
  );
};

export default AudioFooter;
