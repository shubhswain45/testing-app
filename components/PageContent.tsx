"use client"

import { useGetFeedTracks } from "@/hooks/track"
import SongItem from "./SongItem"

const PageContent: React.FC = () => {
    const {data: songs} = useGetFeedTracks()    

  if (songs?.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available.</div>
  }

  console.log("inside page content");
  
  return (
    <div
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-4 
        mt-4
      ">
      {songs?.map((item, idx) => (
        <div key={item?.id}>

        <SongItem data={item} idx={idx} />

        </div>
      ))}
    </div>
  )
}

export default PageContent