"use client"

import Image from "next/image"
import PlayButton from "./PlayButton"
import { useRouter } from "next/navigation"

interface DataProps {
    id: string,
    title: string,
    artist: string,
    duration: string
    audioFileUrl: string
    coverImageUrl?: string | null
}

const SongItem = ({ data, idx }: { data: DataProps | undefined | null, idx: number }) => {

    console.log(idx);
    const router = useRouter()

    return (
        <div
            onClick={() => { router.push(`show/${data?.id}`)}}
            className="
        relative 
        group 
        flex 
        flex-col 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10 
        transition 
        p-3
      ">
            <div
                className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-md 
          overflow-hidden
        ">
                <Image className="object-cover" src={data?.coverImageUrl ? data?.coverImageUrl : "https://via.placeholder.com/56"} fill alt="Image" />
            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <p className="font-semibold truncate w-full">{data?.title}</p>
                <p
                    className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          ">
                    By {data?.artist}
                </p>
            </div>
            <div
                className="
          absolute 
          bottom-24 
          right-5
        ">
                <PlayButton data={data} />
            </div>
        </div>
    )
}

export default SongItem