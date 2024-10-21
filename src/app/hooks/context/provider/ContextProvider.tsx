"use client"
import React, { useState } from 'react'
import contentContext from '../context/ContentContext'
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [contentId, setContentId] = useState('1')
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  const contextValue = {
    contentId,
    setContentId,
    toggleTheme
  }
  return (
    <contentContext.Provider value={contextValue}>
      {children}
    </contentContext.Provider>
  )
}

export default ContextProvider