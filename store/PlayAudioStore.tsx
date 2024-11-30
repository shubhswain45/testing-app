import { create } from "zustand";

interface PlayAudioStore {
  audioFileUrl: string | null;
  isPlaying: boolean;
  setAudioFileUrl: (audioFileUrl: string) => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

export const usePlayAudioStore = create<PlayAudioStore>((set) => ({
  audioFileUrl: null, // default value
  isPlaying: false,
  setAudioFileUrl: (audioFileUrl: string) => set({ audioFileUrl }),
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
}));
