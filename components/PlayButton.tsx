import { usePlayAudioStore } from "@/store/PlayAudioStore"
import { usePlaybackControlsStore } from "@/store/PlaybackControlsStore"
import { FaPlay } from "react-icons/fa"

const PlayButton = ({ audioFileUrl }: { audioFileUrl: string }) => {
  const { openPlaybackControls } = usePlaybackControlsStore()
  const { setAudioFileUrl } = usePlayAudioStore()

  return (
    <button
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
      onClick={() => {
        openPlaybackControls()
        setAudioFileUrl(audioFileUrl)
      }}
    >
      <FaPlay className="text-black" />
    </button>
  )
}

export default PlayButton