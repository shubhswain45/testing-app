import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { usePlayAudioStore } from "@/store/PlayAudioStore";
import {
  Laptop2,
  ListMusic,
  Mic2,
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume1,
} from "lucide-react";
import { AiOutlineClose } from "react-icons/ai"; // Close icon
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { usePlaybackControlsStore } from "@/store/PlaybackControlsStore";

const style = `
  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOutToBottom {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(100%);
      opacity: 0;
    }
  }

  @keyframes scaleButton {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  .slide-enter {
    animation: slideInFromBottom 0.2s ease-out forwards;
  }

  .slide-exit {
    animation: slideOutToBottom 0.2s ease-out forwards;
  }

  .scale-animation {
    animation: scaleButton 0.3s ease-in-out;
  }
`;

export const PlaybackControls = () => {
  const { audioDetails, setAudioDetails } = usePlayAudioStore();
  const { audioFileUrl, isPlaying, title, artist } = audioDetails;
  const audioElement = useRef<HTMLAudioElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(50);
  const [duration, setDuration] = useState(0);
  const { closePlaybackControls } = usePlaybackControlsStore();
  const [isClosed, setIsClosed] = useState(false);

  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, []);

  useEffect(() => {
    const audio = audioElement.current;
    if (isPlaying) {
      audio?.play();
      setAudioDetails({ audioRef: audioElement });
    }

  }, [audioFileUrl, setAudioDetails, isPlaying]);


  useEffect(() => {
    const audio = audioElement.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const handleMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setAudioDetails({ isPlaying: false });

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", handleMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", handleMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [setAudioDetails]);

  useEffect(() => {
    if (audioElement.current) {
      audioElement.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = useCallback(() => {
    setIsAnimating(true);

    if (isPlaying) {
      audioElement.current?.pause();
    } else {
      audioElement.current?.play();
    }
    setAudioDetails({ isPlaying: !isPlaying });

    setTimeout(() => setIsAnimating(false), 300);
  }, [isPlaying, setAudioDetails]);

  const handleSeek = useCallback((value: number[]) => {
    const audio = audioElement.current;
    if (audio) {
      audio.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  }, []);

  const handleVolumeChange = useCallback((value: number[]) => setVolume(value[0]), []);

  const closePlayer = () => {
    setAudioDetails({ isPlaying: false });
    setIsClosed(true);
    setTimeout(() => closePlaybackControls(), 200);
  };

  return (
    <>
      <style>{style}</style>
      <footer
        className={`fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 px-4 z-50 ${isClosed ? "slide-exit" : "slide-enter"
          }`}
        style={{ height: "112px" }} // Enforcing consistent height
      >
        <div className="flex justify-between items-center h-full max-w-[1800px] mx-auto relative">
          <Button
            onClick={closePlayer}
            className="absolute top-0 right-0 text-white hover:bg-transparent rounded-full p-0.5 bg-transparent"
          >
            <AiOutlineClose className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-4 min-w-[180px] w-[30%] sm:flex hidden">
            <div className="w-[56px] h-[56px] relative overflow-hidden">
              <Image
                className="object-cover"
                src={audioDetails?.coverImageUrl || "https://via.placeholder.com/56"}
                alt="Image"
                fill
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate hover:underline cursor-pointer">
                {title || "Dummy Song Title"}
              </div>
              <div className="text-sm text-zinc-400 truncate hover:underline cursor-pointer">
                {artist || "Dummy Artist"}
              </div>
            </div>
          </div>


          <div className="flex flex-col items-center gap-2 flex-1 max-w-full sm:max-w-[45%]">
            <div className="flex items-center gap-4 sm:gap-6">
              <Button size="icon" variant="ghost" className="hidden sm:inline-flex hover:text-white text-zinc-400">
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-white text-zinc-400">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                className={`bg-white hover:bg-white/80 text-black rounded-full h-8 w-8 ${isAnimating ? "scale-animation" : ""
                  }`}
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-white text-zinc-400">
                <SkipForward className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hidden sm:inline-flex hover:text-white text-zinc-400">
                <Repeat className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2 w-full">
              <div className="text-xs text-zinc-400">{formatTime(currentTime)}</div>
              <Slider
                value={[currentTime]}
                max={duration || 100}
                step={1}
                className="w-full"
                onValueChange={handleSeek}
              />
              <div className="text-xs text-zinc-400">{formatTime(duration)}</div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4 min-w-[180px] w-[30%] justify-end">
            <Button size="icon" variant="ghost" className="hover:text-white text-zinc-400">
              <Mic2 className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-white text-zinc-400">
              <ListMusic className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-white text-zinc-400">
              <Laptop2 className="h-4 w-4" />
            </Button>
            <Slider
              value={[volume]}
              onValueChange={handleVolumeChange}
              min={0}
              max={100}
              step={1}
              className="w-[100px]"
            />
            <Button size="icon" variant="ghost" className="hover:text-white text-zinc-400">
              <Volume1 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <audio ref={audioElement} src={audioFileUrl || undefined} />
      </footer>
    </>
  );
};
