"use client"

import { usePlaybackControlsStore } from "@/store/PlaybackControlsStore"
import { PlaybackControls } from "./PlaybackControls"
import { usePathname } from "next/navigation"
import { usePlayAudioStore } from "@/store/PlayAudioStore"
import { useEffect } from "react"

function HandlePlaybackControls() {
    const pathname = usePathname()
    const { setAudioDetails } = usePlayAudioStore()
    const { isOpen } = usePlaybackControlsStore()

    // Check if the pathname starts with "/show"
    const isShowPage = pathname.startsWith("/show");

    useEffect(() => {
        if (isShowPage) {
            // Set audio details only when the pathname starts with "/show"
            setAudioDetails({ isPlaying: false });
        }
    }, [isShowPage, setAudioDetails]); // Only run when isShowPage changes

    return (
        <>
            {!isShowPage && isOpen && <PlaybackControls />}
        </>
    )
}

export default HandlePlaybackControls
