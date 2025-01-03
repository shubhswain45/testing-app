import React, { useState } from "react";
import { FaPlay, FaPause, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AudioFooter = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showMoreOptions, setShowMoreOptions] = useState(false);

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
        setShowMoreOptions(false);
    };

    const toggleMoreOptions = () => {
        setShowMoreOptions((prev) => !prev);
    };

    if (!isVisible) return null;

    return (
        <>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="fixed inset-0 bg-red-500 text-white flex flex-col items-center justify-center z-50"
                        initial={{ y: "100%" }} // Starts from the bottom
                        animate={{ y: 0 }}      // Animates to the top
                        exit={{ y: "100%" }}    // Exit animation (moves down)
                        transition={{ duration: 0.2 }} // Linear transition
                    >
                        {/* Cross Icon */}
                        <button
                            onClick={handleCollapse}
                            className="absolute top-4 left-4 text-gray-200 hover:text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>

                        {/* More Icon */}
                        <button
                            onClick={toggleMoreOptions}
                            className="absolute top-4 right-4 text-gray-200 hover:text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                        </button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {showMoreOptions && (
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 bg-[#282828] text-white p-4 rounded-t-lg"
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "100%" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ul className="space-y-2">
                                        <li className="hover:text-teal-400 cursor-pointer">Option 1</li>
                                        <li className="hover:text-teal-400 cursor-pointer">Option 2</li>
                                        <li className="hover:text-teal-400 cursor-pointer">Option 3</li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <Image
                            src="https://static.vecteezy.com/system/resources/previews/008/653/792/non_2x/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
                            alt="Album Art"
                            className="rounded-lg mb-4"
                            width={350}
                            height={350}
                        />
                        <h1 className="text-2xl font-bold">Song Title</h1>
                        <p className="text-lg text-gray-200">Artist Name</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isExpanded && (
                <footer className="fixed bottom-16 left-0 right-0 bg-red-500 text-white flex items-center justify-between p-4">
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
