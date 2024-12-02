"use client"
import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import PageContent from '@/components/PageContent'
import { usePlaybackControlsStore } from '@/store/PlaybackControlsStore'
import React from 'react'

function Page() {
  const { isOpen } = usePlaybackControlsStore()
  const height = isOpen ? "h-[500px]" : "h-full" // fixed height value syntax

  console.log(height, "height");
  
  return (
    <div className={`text-neutral-400 rounded-lg w-full ${height} overflow-hidden overflow-y-auto`}>
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
          <ListItem image="https://github.com/nicitaacom/19_spotify-clone/blob/production/public/images/liked.png?raw=truen" name="Liked Songs" href="liked" />
        </div>
      </Header>        
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest Songs</h1>
        </div>
        <PageContent />
      </div>
    </div>
  )
}

export default Page
