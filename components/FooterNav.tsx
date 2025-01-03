export default function FooterNav() {
    return (
      <div className="fixed bottom-0 w-full bg-gray-800 text-white flex justify-around py-2 md:hidden">
        <button className="flex flex-col items-center">
          <span>🏠</span>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center">
          <span>🔍</span>
          <span className="text-xs">Explore</span>
        </button>
        <button className="flex flex-col items-center">
          <span>📚</span>
          <span className="text-xs">Library</span>
        </button>
        <button className="flex flex-col items-center">
          <span>⚙️</span>
          <span className="text-xs">Settings</span>
        </button>
      </div>
    );
  }
  