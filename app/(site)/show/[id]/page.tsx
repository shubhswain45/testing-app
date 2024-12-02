"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCw, Heart } from "lucide-react";
import Header from "@/components/Header";
import { BiDotsVertical } from "react-icons/bi";
import { useGetTrackById, useLikeTrack } from "@/hooks/track";
import { usePlayAudioStore } from "@/store/PlayAudioStore";

function AudioPage() {
  const { id } = useParams();
  const validId = typeof id === "string" ? id : "";
  const { data: track, isLoading } = useGetTrackById(validId);
  const { setAudioDetails, audioDetails } = usePlayAudioStore();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLiked, setIsLiked] = useState(track?.hasLiked || false);
  const [scaleAnimation, setScaleAnimation] = useState(false);

  const { mutate: likeTrack } = useLikeTrack(setIsLiked);

  const audioElement = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (track) {
      setAudioDetails({
        title: track?.title || "",
        artist: track?.artist || "",
        duration: track?.duration || "",
        coverImageUrl: track?.coverImageUrl || null,
        audioFileUrl: track?.audioFileUrl || "",
        audioRef: audioElement,
      });
      setIsLiked(track?.hasLiked || false);
    }
  }, [setAudioDetails, track]);

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
  }, [setAudioDetails, audioDetails]);

  const handleSeek = useCallback((value: number[]) => {
    const audio = audioElement.current;
    if (audio) {
      audio.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  }, []);

  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioElement.current;
    if (audioDetails.isPlaying) {
      audio?.pause();
    } else {
      audio?.play();
    }
    setAudioDetails({ isPlaying: !audioDetails.isPlaying });
    setScaleAnimation(true);
    setTimeout(() => setScaleAnimation(false), 300);
  }, [audioDetails.isPlaying, setAudioDetails]);

  const skipTime = (seconds: number) => {
    const audio = audioElement.current;
    if (audio) {
      audio.currentTime += seconds;
      setCurrentTime(audio.currentTime);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <style>{`
        @keyframes scaleAnimation {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .scale-animation {
          animation: scaleAnimation 0.3s ease-in-out;
        }
      `}</style>

      <div className="text-neutral-400 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
        <Header>
          <div className="flex flex-col items-center justify-center w-full h-full">
            {/* Image Section */}
            <div className="w-[300px] h-[300px] relative overflow-hidden rounded-md">
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 text-white"
              >
                <BiDotsVertical className="w-10 h-10" />
              </Button>
              <Image
                src={track?.coverImageUrl || "https://via.placeholder.com/300"}
                alt="Album Cover"
                height={300}
                width={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-4 flex items-center justify-between w-[300px]">
              <h2 className="text-lg font-semibold text-white">
                {track?.title || "Unknown Title"}
              </h2>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-transparent hover:text-white"
                onClick={() => likeTrack(track?.id || "")}
              >
                <Heart
                  className="w-6 h-6"
                  fill={isLiked ? "green" : "none"}
                  stroke={isLiked ? "green" : "currentColor"}
                />
              </Button>
            </div>

            {/* Seek Bar */}
            <div className="flex items-center gap-4 w-full max-w-md mt-4">
              <div className="text-xs text-zinc-400">
                {formatTime(currentTime)}
              </div>

              <Slider
                value={[currentTime]}
                max={duration || 100}
                step={1}
                className="w-full"
                onValueChange={handleSeek}
              />
              <div className="text-xs text-zinc-400">{formatTime(duration)}</div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-6 mt-6">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-transparent hover:text-white"
                onClick={() => skipTime(-10)} // Go back 10 seconds
              >
                <RotateCw className="rotate-180 w-6 h-6" />
              </Button>
              <Button
                size="icon"
                className={`bg-green-500 hover:bg-green-600 text-black rounded-full h-12 w-12 ${scaleAnimation ? "scale-animation" : ""}`}
                onClick={togglePlay}
              >
                {audioDetails.isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-transparent hover:text-white"
                onClick={() => skipTime(10)} // Go forward 10 seconds
              >
                <RotateCw className="w-6 h-6" />
              </Button>
            </div>

            {/* Audio Element */}
            <audio ref={audioElement} src={track?.audioFileUrl || undefined} />
          </div>
        </Header>
      </div>
    </>
  );
}

export default AudioPage;
