import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { usePlayAudioStore } from "@/store/PlayAudioStore";
import { Laptop2, ListMusic, Mic2, Pause, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume1 } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

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

  .scale-animation {
    animation: scaleButton 0.3s ease-in-out;
  }
`;

export const PlaybackControls = () => {
  const { audioFileUrl, isPlaying, setIsPlaying } = usePlayAudioStore();
  const audioElement = useRef<HTMLAudioElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(50);
  const [duration, setDuration] = useState(0);

  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, []);

  useEffect(() => {
    const audio = audioElement.current;

    if (audioFileUrl) {
      audio?.play();
      setIsPlaying(true);
    } else {
      audio?.pause();
      setIsPlaying(false);
    }
  }, [audioFileUrl, setIsPlaying]);

  useEffect(() => {
    const audio = audioElement.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const handleMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", handleMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", handleMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [setIsPlaying]);

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
    setIsPlaying(!isPlaying);

    setTimeout(() => setIsAnimating(false), 300);
  }, [isPlaying, setIsPlaying]);

  const handleSeek = useCallback((value: number[]) => {
    const audio = audioElement.current;
    if (audio) {
      audio.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  }, []);

  const handleVolumeChange = useCallback((value: number[]) => setVolume(value[0]), []);

  return (
    <>
      <style>{style}</style>
      <footer className="fixed bottom-0 left-0 right-0 h-20 sm:h-24 bg-zinc-900 border-t border-zinc-800 px-4 z-50 slide-enter">
        <div className="flex justify-between items-center h-full max-w-[1800px] mx-auto">
          {/* Currently playing song */}
          <div className="hidden sm:flex items-center gap-4 min-w-[180px] w-[30%]">
            <img
              src="https://via.placeholder.com/56"
              alt="Song Thumbnail"
              className="w-14 h-14 object-cover rounded-md"
            />
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate hover:underline cursor-pointer">
                Dummy Song Title
              </div>
              <div className="text-sm text-zinc-400 truncate hover:underline cursor-pointer">
                Dummy Artist
              </div>
            </div>
          </div>

          {/* Player controls */}
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
                className={`bg-white hover:bg-white/80 text-black rounded-full h-8 w-8 ${isAnimating ? "scale-animation" : ""}`}
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

            <div className="hidden sm:flex items-center gap-2 w-full">
              <div className="text-xs text-zinc-400">{formatTime(currentTime)}</div>
              <Slider
                value={[currentTime]}
                max={duration || 100}
                step={1}
                className="w-full hover:cursor-grab active:cursor-grabbing"
                onValueChange={handleSeek}
              />
              <div className="text-xs text-zinc-400">{formatTime(duration)}</div>
            </div>
          </div>

          {/* Volume controls */}
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
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost" className="hover:text-white text-zinc-400">
                <Volume1 className="h-4 w-4" />
              </Button>
              <Slider
                value={[volume]}
                max={100}
                step={1}
                onValueChange={handleVolumeChange}
                className="w-24 hover:cursor-grab active:cursor-grabbing"
              />
            </div>
          </div>
        </div>
      </footer>

      {audioFileUrl && <audio ref={audioElement} src={audioFileUrl} />}
    </>
  );
};
