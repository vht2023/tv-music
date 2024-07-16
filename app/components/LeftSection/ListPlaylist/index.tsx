import React, {useState} from 'react'
import {Icons} from '@/components/Icons'
import {AnimatePresence, motion} from 'framer-motion'

const ListPlaylist = () => {
  const [togglePlaylist, setTogglePlaylist] = useState<boolean>(true)
  return (
    <AnimatePresence mode='wait'>
      <div className='mt-6'>
        <div className='flex-between px-2'>
          <div className='text-lg font-semibold'>Playlists</div>
          <div className='cursor-pointer' onClick={() => setTogglePlaylist(!togglePlaylist)}>
            <Icons name={togglePlaylist ? 'Down' : 'Right'} width={15} height={15} />
          </div>
        </div>
        {togglePlaylist && (
          <motion.div
            className='mt-3'
            key='togglePlaylist'
            initial='initial'
            animate='open'
            exit='collapsed'
            transition={{duration: 0.2}}
            variants={{
              initial: {opacity: 0, height: 0, y: -10},
              open: {opacity: 1, height: 'auto', y: 0},
              collapsed: {opacity: 0, height: 0, y: 10},
            }}
          >
            <div className='flex cursor-pointer items-center rounded-xl px-2 py-2 hover:bg-base'>
              <div className='flex h-8 w-8 items-center'>
                <Icons name='Playlists' width={20} height={20} />
              </div>
              <div>All Playlists</div>
            </div>
            {/* Map list playlists */}
            {/* ------------------ */}

            {/* Add new playlists */}
            <div className='flex cursor-pointer items-center rounded-xl px-2 py-2 hover:bg-base'>
              <div className='flex h-8 w-8 items-center'>
                <div className='rounded-md bg-base p-1'>
                  <Icons name='Plus' width={14} height={14} />
                </div>
              </div>
              <div>Add Playlist</div>
            </div>
            {/* ---------------- */}
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  )
}

export default ListPlaylist
