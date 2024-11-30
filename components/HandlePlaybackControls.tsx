"use client"

import { usePlaybackControlsStore } from "@/store/PlaybackControlsStore"
import { PlaybackControls } from "./PlaybackControls"

function HandlePlaybackControls() {
    const { isOpen } = usePlaybackControlsStore()
    return (
        <>
            {isOpen && <PlaybackControls/>}
        </>
    )
}

export default HandlePlaybackControls