import { usePlayAudioStore } from "@/store/PlayAudioStore";
import { usePlaybackControlsStore } from "@/store/PlaybackControlsStore";
import { FaPause, FaPlay } from "react-icons/fa";

interface DataProps {
  id: string;
  title: string;
  artist: string;
  duration: string;
  coverImageUrl?: string | null;
  audioFileUrl: string;
}

interface PlayButtonProps {
  data: DataProps | undefined | null;
}

const PlayButton = ({ data }: PlayButtonProps) => {
  const { openPlaybackControls, isOpen } = usePlaybackControlsStore();
  const { audioDetails, setAudioDetails } = usePlayAudioStore();

  const isPlayingCurrentSong =
    audioDetails.audioFileUrl === data?.audioFileUrl && audioDetails.isPlaying;

  const pauseAudio = () => {
    audioDetails.audioRef?.current?.pause();
    setAudioDetails({ isPlaying: false });
  };

  const playAudio = () => {
    openPlaybackControls();
    setAudioDetails({
      title: data?.title || "",
      artist: data?.artist || "",
      duration: data?.duration || "",
      coverImageUrl: data?.coverImageUrl || null,
      audioFileUrl: data?.audioFileUrl || "",
      isPlaying: true,
    });
  };

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!data) return;

    if (isPlayingCurrentSong) {
      pauseAudio();
    } else if (isOpen && audioDetails.audioFileUrl === data.audioFileUrl) {
      setAudioDetails({ isPlaying: true });
    } else {
      playAudio();
    }
  };

  return (
    <button
      onClick={handlePlay}
      className="
        transition 
        opacity-0 
        rounded-full 
        flex 
        items-center 
        justify-center 
        bg-green-500 
        p-4 
        drop-shadow-md 
        translate 
        translate-y-1/4 
        group-hover:opacity-100 
        group-hover:translate-y-0 
        hover:scale-110
      "
    >
      {isPlayingCurrentSong ? <FaPause className="text-black" /> : <FaPlay className="text-black" />}
    </button>
  );
};

export default PlayButton;
