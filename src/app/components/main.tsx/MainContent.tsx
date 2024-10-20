import React from 'react'
import LeftSide from '../LeftSide'
import Image from 'next/image'

import bgImage from '../../../../public/bgBriks.jpg'
const MainContent = () => {

  return (
    <main className='flex min-h-screen'>
      <LeftSide />
      <div className='relative bg-no-repeat bg-cover grow bg-gray-800 z-10 '>
        <Image src={bgImage} alt='background' layout='fill' className='z-10 relative opacity-20' />
        {/* <div className='w-full h-full z-20 bg-[#222]/30 absolute top-0 left-0'>

        </div> */}
      </div>
    </main>
  )
}

export default MainContent