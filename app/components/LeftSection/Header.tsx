import {logout} from '@/libs/firebase'
import React from 'react'

const Header = ({displayName}: {displayName?: string | null}) => {
  return (
    <div className='rounded-2xl px-2'>
      <div className='flex-between items-center'>
        <div className='text-2xl font-bold'>TV Music</div>
        <div className='cursor-pointer rounded-md bg-base px-2 py-1' onClick={logout}>
          {displayName}
        </div>
      </div>
      <div className='text-base-grey'>All Music</div>
    </div>
  )
}

export default Header
