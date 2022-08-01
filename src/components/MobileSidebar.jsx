import { faCalendar, faHouse, faList, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function MobileSidebar(props) {
  const {
    closeSidebar,
  } = props

  const sidebarMenu = [
    {
      id: 1,
      name: 'Beranda',
      icon: faHouse,
    },
    {
      id: 2,
      name: 'Personnel List',
      icon: faList,
    },
    {
      id: 3,
      name: 'Daily Attendance',
      icon: faCalendar,
    },
  ]

  return (
    <div className='sidebar bg-gray-200 min-h-screen p-5 fixed w-full md:hidden'>
        <button
          className='text-blue-900 mb-4'
          onClick={closeSidebar}>
            <FontAwesomeIcon icon={faTimesCircle} size="2x" />
        </button>
        <ul className='text-blue-900 text-3xl leading-snug mt-5'>
          {
            sidebarMenu.map((index) => (
              <li className='mb-3' key={index.id}>
                  <FontAwesomeIcon icon={index.icon} size="1x" className='mr-3' />
                  <a href="">{index.name}</a>
              </li>
            ))
          }
        </ul>
    </div>
  )
}
