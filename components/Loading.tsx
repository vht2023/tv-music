import Lottie from 'lottie-react'
import React, {useEffect, useRef} from 'react'

import animationData from '@assets/loading-animation.json'

const Loading = () => {
  return (
    <div className='relative z-[1000] h-screen bg-white bg-opacity-15'>
      <div className='flex-center absolute-center h-full w-full'>
        <Lottie animationData={animationData} className='h-[100px] w-[100px]' loop={true} />
      </div>
    </div>
  )
}

export default Loading
