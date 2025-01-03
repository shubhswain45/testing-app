import { FaHome, FaSearch, FaBook, FaCog } from "react-icons/fa";

export default function FooterNav() {
  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white flex justify-around py-3 shadow-md md:hidden">
      <button className="flex flex-col items-center">
        <FaHome size={20} />
        <span className="text-xs mt-1">Home</span>
      </button>
      <button className="flex flex-col items-center">
        <FaSearch size={20} />
        <span className="text-xs mt-1">Explore</span>
      </button>
      <button className="flex flex-col items-center">
        <FaBook size={20} />
        <span className="text-xs mt-1">Library</span>
      </button>
      <button className="flex flex-col items-center">
        <FaCog size={20} />
        <span className="text-xs mt-1">Settings</span>
      </button>
    </div>
  );
}
