import { create } from "zustand";
import React from "react"; // Required for React.createRef

interface AudioDetails {
  title: string | null;
  artist: string | null;
  duration: string | null;
  coverImageUrl: string | null;
  audioFileUrl: string | null;
  isPlaying: boolean;
  audioRef: React.RefObject<HTMLAudioElement> | null; // Add the ref here
}

interface PlayAudioStore {
  audioDetails: AudioDetails;
  setAudioDetails: (details: Partial<AudioDetails>) => void;
}

export const usePlayAudioStore = create<PlayAudioStore>((set) => ({
  audioDetails: {
    title: null,
    artist: null,
    duration: null,
    coverImageUrl: null,
    audioFileUrl: null,
    isPlaying: false,
    audioRef: React.createRef<HTMLAudioElement>(), // Initialize the ref
  },
  setAudioDetails: (details) =>
    set((state) => ({
      audioDetails: { ...state.audioDetails, ...details },
    })),
}));
