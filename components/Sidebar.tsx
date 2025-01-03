export default function Sidebar() {
    return (
      <div className="hidden md:flex flex-col w-64 bg-gray-800 text-white h-full fixed top-0 left-0">
        <h1 className="text-2xl font-bold p-4">Spotify Clone</h1>
        <nav className="mt-4">
          <ul className="space-y-4">
            <li className="px-4 py-2 hover:bg-gray-700 rounded">Home</li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded">Explore</li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded">Library</li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded">Search</li>
          </ul>
        </nav>
      </div>
    );
  }
  