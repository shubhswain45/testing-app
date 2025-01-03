import PlayButton from "@/components/PlayButton";
import RoundedIcons from "@/components/RoundedIcon";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const SectionGrid = () => {
  const title = "Featured Songs";

  // Dummy songs data
  const songs = [
    {
      _id: "1",
      imageUrl: "https://via.placeholder.com/200?text=Song+1",
      title: "Song One",
      artist: "Artist A",
    },
    {
      _id: "2",
      imageUrl: "https://via.placeholder.com/200?text=Song+2",
      title: "Song Two",
      artist: "Artist B",
    },
    {
      _id: "3",
      imageUrl: "https://via.placeholder.com/200?text=Song+3",
      title: "Song Three",
      artist: "Artist C",
    },
    {
      _id: "4",
      imageUrl: "https://via.placeholder.com/200?text=Song+4",
      title: "Song Four",
      artist: "Artist D",
    },
    {
      _id: "5",
      imageUrl: "https://via.placeholder.com/200?text=Song+5",
      title: "Song Five",
      artist: "Artist E",
    },
  ];

  return (
    <main className="bg-[#121212] rounded-lg p-4 h-full overflow-y-auto">
      <RoundedIcons />
      <div className="p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Good afternoon</h1>

        <div className="space-y-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
              <button className="text-sm text-zinc-400 hover:text-white">Show all</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {songs.map((song) => (
                <div
                  key={song._id}
                  className="bg-zinc-800/40 p-4 rounded-md hover:bg-zinc-700/40 transition-all group cursor-pointer"
                >
                  <div className="relative mb-4">
                    <div className="aspect-square rounded-md shadow-lg overflow-hidden">
                      <img
                        src={song.imageUrl}
                        alt={song.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <PlayButton />
                  </div>
                  <h3 className="font-medium mb-2 truncate">{song.title}</h3>
                  <p className="text-sm text-zinc-400 truncate">{song.artist}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="mt-8 p-6 rounded-lg text-center text-zinc-400">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">About Us</h4>
            <p className="text-sm">
              Your Music App is a platform where music lovers can discover, stream, and enjoy
              their favorite songs.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Contact Us</h4>
            <p className="text-sm">
              Email: <a href="mailto:support@musicapp.com" className="text-blue-400 hover:underline">support@musicapp.com</a>
            </p>
            <p className="text-sm">
              Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+1 (234) 567-890</a>
            </p>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Follow Us</h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-zinc-700 my-4" />
        <p className="text-sm">
          © 2025 Your Music App. All rights reserved. Built with ❤️ by MusicApp Devs.
        </p>
      </footer>
    </main>
  );
};

export default SectionGrid;
