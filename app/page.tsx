'use client'

import {useState} from 'react'

import {useAuth} from '@/context/AuthContext'
import Login from '@/components/Login'
import Loading from '@/components/Loading'
import LeftSection from './components/LeftSection'
import MainSection from './components/MainSection'

export default function App() {
  const {user, loading} = useAuth()

  const [actived, setActived] = useState<{id: string; name: string}>({id: 'recently', name: 'Recently'})

  if (loading) return <Loading />

  if (!user) return <Login />

  return (
    <div className='absolute-center h-[600px]'>
      <div className='flex h-full rounded-2xl shadow-lg shadow-white/30 backdrop-blur'>
        {/* LEFT SECTION */}
        <LeftSection actived={actived} setActived={setActived} />

        {/* MAIN SECTION */}
        <MainSection actived={actived} />
      </div>
    </div>
  )
}
