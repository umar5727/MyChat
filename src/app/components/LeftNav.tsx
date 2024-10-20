"use client"
import { icon } from '@fortawesome/fontawesome-svg-core'
import { faCommentDots, faPhone, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LeftNav = () => {
  const pathName = usePathname()
  const nav = [
    {
      href: '/chat',
      icon: faCommentDots
    },
    {
      href: '/call',
      icon: faPhone,
    },
    {
      href: '/status',
      icon: faUserGroup,
    },
  ]
  return (
    <div className='flex flex-col gap-2 items-center bg-gray-800 p-2'>
      <div className='bg-primary p-3 rounded-md w-fit '>
        <FontAwesomeIcon icon={faUser} className='w-4' />
      </div>
      {
        nav?.map((field, index) => (
          <Link
            key={index}
            href={field.href}
            className={`group/nav ${pathName === field.href ? 'bg-primary' : 'hover:bg-primary/20  '} w-10 h-10 flex justify-center items-center transition-colors  p-3 rounded-md duration-300`}>
            <FontAwesomeIcon icon={field.icon} className='w-4 group-hover/nav:scale-125 transition-transform duration-300 ' />
          </Link>
        ))
      }

    </div>
  )
}

export default LeftNav