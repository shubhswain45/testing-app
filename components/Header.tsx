
import { MdAccountCircle } from "react-icons/md";


export default function Header() {
    return (
        <header className="bg-[#000000] text-white fixed top-0 left-0 right-0 h-16 z-50 shadow-md flex items-center justify-between px-6">
            {/* Logo */}
            <div className="flex items-center space-x-2 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-slack"><rect width="3" height="8" x="13" y="2" rx="1.5" /><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" /><rect width="3" height="8" x="8" y="14" rx="1.5" /><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" /><rect width="8" height="3" x="14" y="13" rx="1.5" /><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" /><rect width="8" height="3" x="2" y="8" rx="1.5" /><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" /></svg>
            </div>

            {/* Center: Home and Searcfh Bar */}
            <div className="flex items-center space-x-4 flex-grow justify-center">
                {/* Home Button */}
                <button className="flex items-center justify-center w-12 h-12 bg-[#1f1f1f] rounded-full hover:bg-green-500 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house">
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                </button>

                {/* Explore Button */}
                <button className="flex items-center justify-center w-12 h-12 bg-[#1f1f1f] rounded-full hover:bg-green-500 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-compass"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" /><circle cx="12" cy="12" r="10" /></svg>
                </button>

                {/* Search Bar */}
                <div className="relative w-1/2 max-w-lg">
                    {/* Search Icon inside input */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search for songs, artists, or albums"
                        className="bg-[#1f1f1f] text-sm rounded-full pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
            </div>

            {/* Right: Premium Icon and Avatar */}
            <div className="flex items-center space-x-4">


                {/* Avatar */}
                <MdAccountCircle size={30} className="hover:text-green-500 transition duration-300 cursor-pointer" />
            </div>
        </header>
    );
}
