import React from 'react'

import {Icons} from '@/components/Icons'
import {useAuth} from '@/context/AuthContext'

const Login = () => {
  const {user, signInWithGoogle} = useAuth()
  console.log(user)

  const handleSignIn = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='absolute-center'>
      <div className='flex-center h-full w-full flex-col gap-3 rounded-2xl p-10 shadow-lg shadow-white/30 backdrop-blur'>
        {/* LEFT */}
        <div className='text-white/80'>
          <Icons name='MusicLoginLogo' width={128} height={128} />
        </div>
        <div className='flex cursor-pointer items-center gap-2 rounded-lg bg-white/80 p-3 py-1.5 shadow-xl shadow-white/20 active:scale-[.98]' onClick={handleSignIn}>
          <Icons name='GoogleLogo' width={24} height={24} />
          <span className='text-black/95'>Sign In with Google</span>
        </div>
      </div>
    </div>
  )
}

export default Login
