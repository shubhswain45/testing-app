"use client"
import { useState } from "react";

const MusicBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold">Song Title</h4>
          <p className="text-sm text-gray-400">Artist Name</p>
        </div>
        <button
          className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
          onClick={() => setIsVisible(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MusicBar;
