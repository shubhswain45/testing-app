"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCw, Heart } from "lucide-react";
import Header from "@/components/Header";
import { BiDotsVertical } from "react-icons/bi";

function AudioPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(240); // Example duration in seconds
  const [isLiked, setIsLiked] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleSeek = (amount: number) => {
    setCurrentTime((prev) => Math.max(0, Math.min(duration, prev + amount)));
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Header>
      <div className="flex flex-col items-center text-neutral-400 p-6">
        {/* Image Section with Title, Heart Icon, and More Button */}
        <div className="w-[350px] h-[350px] relative overflow-hidden rounded-md">
          {/* More Button (Three Dots Vertical) */}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 text-white"
          >
            <BiDotsVertical className="w-10 h-10" /> {/* Increased size */}
          </Button>

          {/* Image */}
          <Image
            src="https://via.placeholder.com/300"
            alt="Album Cover"
            height={350}
            width={350}
            className="object-cover"
          />
        </div>

        {/* Title and Heart Icon Below the Image */}
        <div className="mt-4 flex items-center justify-between w-[350px]">
          <h2 className="text-lg font-semibold text-white">Album Title</h2>
          <Button
            size="icon"
            variant="ghost"
            className={`text-red-500 ${isLiked ? "text-red-600" : ""}`}
            onClick={toggleLike}
          >
            <Heart className="w-6 h-6" />
          </Button>
        </div>

        {/* Progress Bar (Increased slider size) */}
        <div className="flex items-center gap-4 w-full max-w-md mt-4">
          <span className="text-xs">{formatTime(currentTime)}</span>
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            onValueChange={(value) => setCurrentTime(value[0])}
            className="flex-1 h-4 hover:cursor-grab active:cursor-grabbing" // Increased height for slider
          />
          <span className="text-xs">{formatTime(duration)}</span>
        </div>

        {/* Controls Section */}
        <div className="flex items-center gap-6 mt-6">
          <Button
            size="icon"
            variant="ghost"
            className="hover:text-green-500 text-gray-400"
            onClick={() => handleSeek(-10)}
          >
            <RotateCw className="rotate-180 w-6 h-6" /> {/* 10s Back */}
          </Button>
          <Button
            size="icon"
            className="bg-green-500 text-black rounded-full h-12 w-12"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="hover:text-green-500 text-gray-400"
            onClick={() => handleSeek(10)}
          >
            <RotateCw className="w-6 h-6" /> {/* 10s Forward */}
          </Button>
        </div>
      </div>
    </Header>
  );
}

export default AudioPage;
