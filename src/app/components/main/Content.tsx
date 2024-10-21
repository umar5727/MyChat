"use client"
import contentContext from '@/app/hooks/context/context/ContentContext'
import React, { useContext } from 'react'

const Content = () => {
  const { contentId } = useContext(contentContext)
  console.log('content id : ', contentId)
  return (
    <div>Content for id {contentId}</div>
  )
}

export default Content