import React from 'react';

const RoundedIcons = () => {
  return (
    <div className="flex justify-start items-center gap-3">
      {/* Music Icon */}
      <button className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full shadow-md hover:bg-teal-600">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-music"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
      </button>

      {/* Playlist Icon */}
      <button className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full shadow-md hover:bg-orange-600">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-library-big"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></svg>
      </button>
    </div>
  );
};

export default RoundedIcons;
