"use client"

import Image from "next/image"
import PlayButton from "./PlayButton"

interface DataProps {
    id: string,
    audioFileUrl: string
    coverImageUrl?: string | null
}

const SongItem = ({ data, idx }: { data: DataProps | undefined | null, idx: number }) => {

    console.log(idx);
    
    return (
        <div
            onClick={() => { }}
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
                <Image className="object-cover" src={"https://github.com/nicitaacom/19_spotify-clone/blob/production/public/images/liked.png?raw=true"} fill alt="Image" />
            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <p className="font-semibold truncate w-full">title</p>
                <p
                    className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          ">
                    By author
                </p>
            </div>
            <div
                className="
          absolute 
          bottom-24 
          right-5
        ">
                <PlayButton audioFileUrl={data?.audioFileUrl || ""}/>
            </div>
        </div>
    )
}

export default SongItem