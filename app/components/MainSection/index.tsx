import React from 'react'
import {Icons} from '@/components/Icons'
import {AnimatePresence, motion} from 'framer-motion'

interface Props {
  actived: {
    id: string
    name: string
  }
}

const MainSection = ({actived}: Props) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key='actived'
        className='h-full w-[600px] bg-[#FFFFFF05] px-6 py-3'
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
        <div className='w-full text-xl font-bold'>{actived && actived.name}</div>
        <div className='mt-1 w-full text-xs font-light text-base-grey'>100 {actived && actived.name}</div>
        <div className='relative mt-3 w-full'>
          <div className='w-full rounded-lg bg-[#00000085] px-3 py-2'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2'>
              <Icons name='Search' width={16} height={16} className='text-base-grey' />
            </div>
            <input placeholder={`Search in ${actived && actived.name}`} className='ml-6 block w-full border-none bg-transparent outline-none placeholder:text-[#FFFFFF90]' />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MainSection
