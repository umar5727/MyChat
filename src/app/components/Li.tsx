
import Image from 'next/image'
import Link from 'next/link'
import React, { MouseEventHandler } from 'react'
import { usePathname } from 'next/navigation'

// images 
import nextimg from '../../../public/next.svg'

interface prop {
  heading: string,
  text: string,
  image: string,
  id: string
}
const Li = ({ heading, text, image, id }: prop) => {
  const setContentId = (a: any): MouseEventHandler<HTMLButtonElement> => {
    return a
  }
  return (
    <li className={`${!id ? 'bg-primary' : 'hover:bg-primary/20'} transition duration-300 flex gap-4 items-center p-2 rounded-md `}>
      <div className="flex justify-center items-center bg-yellow-50 w-12 h-12 aspect-square rounded-full ">
        <Image src={image} alt="profile" width={40} />
      </div>
      <button className='grow text-left flex justify-between' onClick={setContentId(id)}>
        <div className='grow'>
          <h1 className="font-bold text-xl">{heading}</h1>
          <p className="text-sm dark:text-gray-200 leading-3">{text}  </p>
        </div>
        <div className='flex flex-col items-end text-xs'>
          <div>10:00</div>
          <div className='bg-primary rounded-full w-fit aspect-square text-center'>2</div>
        </div>
      </button>
    </li>
  )
}

export default Li