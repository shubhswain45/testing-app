import { create } from "zustand";

interface PlaybackControlsStore {
    isOpen: boolean;
    closePlaybackControls: () => void;
    openPlaybackControls: () => void;
}

export const usePlaybackControlsStore = create<PlaybackControlsStore>((set) => ({
    isOpen: false, // default to open
    closePlaybackControls: () => set({ isOpen: false }),
    openPlaybackControls: () => set({ isOpen: true }),
}));
