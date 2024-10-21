import React from 'react'
import LeftSide from '../LeftSide'
import Image from 'next/image'

import bgImage from '../../../../public/bgBriks.jpg'
import Content from './Content'
const MainContent = () => {

  return (
    <main className='flex min-h-screen'>
      <LeftSide />
      <div className='relative bg-no-repeat bg-cover grow bg-gray-800 z-10 '>
        <Image src={bgImage} alt='background' layout='fill' className='z-10 relative opacity-20' />

        <Content />
      </div>
    </main>
  )
}

export default MainContent