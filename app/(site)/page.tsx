import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import React from 'react'

function page() {
  return (
    <div className="text-neutral-400 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
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
        {/* <PageContent songs={songs} /> */}
      </div>
    </div>
  )
}

export default page