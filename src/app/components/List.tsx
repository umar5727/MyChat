import React from 'react'
import Li from './Li'
import nextimg from '../../../public/next.svg'
const List = () => {
  return (
    <ul className='flex flex-col gap-1 p-2'>
      <p className='text-sm text-gray-400 py-2'>All Chats</p>
      <Li
        heading='Home'
        image={nextimg}
        text='lorem lorem lorem lorem'
        id='1'
      />
      <Li
        heading='About'
        image={nextimg}
        text='lorem lorem lorem lorem'
        id='2'
      />
      <Li
        heading='Third'
        image={nextimg}
        text='lorem lorem lorem lorem'
        id='3'
      />
    </ul>
  )
}

export default List