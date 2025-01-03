import Sidebar from "./components/Sidebar";
import FooterNav from "./components/FooterNav";

export default function App() {
  return (
    <div className="h-screen flex">
      {/* Sidebar for larger screens */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 ml-0 md:ml-64">
        <header className="bg-white shadow p-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </header>
        <main className="p-4">
          <p>Welcome to your Spotify Clone!</p>
        </main>
      </div>

      {/* Footer Navigation for smaller screens */}
      <FooterNav />
    </div>
  );
}
