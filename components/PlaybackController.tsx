import React from 'react'

function PlaybackController() {
    return (
        <footer className="h-20 sm:h-24 bg-[#000000] border-t border-zinc-800 px-4">
            <div className="flex justify-between items-center h-full max-w-[1800px] mx-auto">
                {/* Currently playing song */}
                <div className="hidden sm:flex items-center gap-4 min-w-[180px] w-[30%]">
                    <img
                        src="song-image.jpg" // placeholder image
                        alt="Song Title"
                        className="w-14 h-14 object-cover rounded-md"
                    />f
                    <div className="flex-1 min-w-0">
                        <div className="font-medium truncate hover:underline cursor-pointer">
                            Song Title
                        </div>
                        <div className="text-sm text-zinc-400 truncate hover:underline cursor-pointer">
                            Artist Name
                        </div>
                    </div>
                </div>

                {/* Player controls */}
                <div className="flex flex-col items-center gap-2 flex-1 max-w-full sm:max-w-[45%]">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <button className="hidden sm:inline-flex hover:text-white text-zinc-400">
                            {/* Shuffle icon */}
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 3h18"></path>
                                <path d="M3 9l6-6m0 0l6 6m-6-6v12"></path>
                            </svg>
                        </button>

                        <button className="hover:text-white text-zinc-400">
                            {/* Skip Back icon */}
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 18l-6-6 6-6"></path>
                                <path d="M7 18l-6-6 6-6"></path>
                            </svg>
                        </button>

                        <button className="bg-white hover:bg-white/80 text-black rounded-full h-8 w-8">
                            {/* Play/Pause icon */}
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 3v18l15-9z"></path>
                            </svg>
                        </button>

                        <button className="hover:text-white text-zinc-400">
                            {/* Skip Forward icon */}
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 6l6 6-6 6"></path>
                                <path d="M17 6l6 6-6 6"></path>
                            </svg>
                        </button>

                        <button className="hidden sm:inline-flex hover:text-white text-zinc-400">
                            {/* Repeat icon */}
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 5v14l9-7z"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 w-full">
                        <div className="text-xs text-zinc-400">0:00</div>
                        <div className="w-full bg-gray-700 h-1"></div>
                        <div className="text-xs text-zinc-400">3:00</div>
                    </div>
                </div>

                {/* Volume controls */}
                <div className="hidden sm:flex items-center gap-4 min-w-[180px] w-[30%] justify-end">
                    <button className="hover:text-white text-zinc-400">
                        {/* Mic icon */}
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 1v18m-7-7h14"></path>
                        </svg>
                    </button>
                    <button className="hover:text-white text-zinc-400">
                        {/* Music List icon */}
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 1v18m-7-7h14"></path>
                        </svg>
                    </button>
                    <button className="hover:text-white text-zinc-400">
                        {/* Laptop icon */}
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 9l-2-2 2-2m-6 2l2-2 2 2m-2 2v5"></path>
                        </svg>
                    </button>

                    <div className="flex items-center gap-2">
                        <button className="hover:text-white text-zinc-400">
                            {/* Volume icon */}
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l6-6 6 6m0 6l-6 6-6-6"></path>
                            </svg>
                        </button>

                        <div className="w-24 bg-gray-700 h-1"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default PlaybackController