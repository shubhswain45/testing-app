import { MdAccountCircle } from "react-icons/md";

export default function SmallHeader() {
  return (
    <header className="bg-[#000000] text-white fixed top-0 left-0 right-0 h-16 z-50 shadow-md flex items-center justify-between px-6">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-slack"><rect width="3" height="8" x="13" y="2" rx="1.5" /><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" /><rect width="3" height="8" x="8" y="14" rx="1.5" /><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" /><rect width="8" height="3" x="14" y="13" rx="1.5" /><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" /><rect width="8" height="3" x="2" y="8" rx="1.5" /><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" /></svg>
      </div>

      {/* Right: Premium Icon and Avatar */}
      <div className="flex items-center space-x-4">
       

        {/* Avatar */}
        <MdAccountCircle size={30} className="hover:text-green-500 transition duration-300 cursor-pointer" />
      </div>
    </header>
  );
}
