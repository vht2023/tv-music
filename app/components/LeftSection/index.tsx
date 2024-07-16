import React from 'react'
import ListPlaylist from './ListPlaylist'
import {useAuth} from '@/context/AuthContext'
import Header from './Header'
import ListFeatures from './ListFeatures'

interface Props {
  actived: {
    id: string
    name: string
  }
  setActived: React.Dispatch<
    React.SetStateAction<{
      id: string
      name: string
    }>
  >
}

const LeftSection = (props: Props) => {
  const {user} = useAuth()

  return (
    <div className='min-w-[300px] rounded-l-2xl bg-gradient-to-r from-[#FFFFFF10] to-[#00000010] px-2 py-4'>
      {/* HEADER APP NAME */}
      <Header displayName={user?.displayName} />

      {/* LIST FEATURES */}
      <ListFeatures {...props} />

      {/* LIST PLAYLISTS */}
      <ListPlaylist />
    </div>
  )
}

export default LeftSection
