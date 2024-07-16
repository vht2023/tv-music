'use client'

import React, {createContext, PropsWithChildren, useContext, useEffect, useState} from 'react'
import {User} from 'firebase/auth'
import {auth, signInWithGoogle, logout} from '@/libs/firebase'

interface AuthContextProps {
  user: User | null
  loading: boolean
  signInWithGoogle: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  logout: async () => {},
})

export const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  return <AuthContext.Provider value={{user, loading, signInWithGoogle, logout}}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
