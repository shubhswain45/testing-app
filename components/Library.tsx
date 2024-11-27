import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { TbPlaylist } from 'react-icons/tb'

function Library() {
    return (
        <div className="flex flex-col ">
          <div className="flex items-center justify-between px-5 py-4">
            <div className="inline-flex items-center gap-2">
              <TbPlaylist className="text-neutral-400" size={26} />
              <p className="text-neutral-400 font-medium text-md">Your libray</p>
            </div>
            <AiOutlinePlus
              className="text-neutral-400 cursor-pointer hover:text-white transition"
            //   onClick={onClick}
              size={20}
            />
          </div>
          <div className="flex flex-col gap-y-2 mt-4 px-3">
           
          </div>
        </div>
      )
}

export default Library