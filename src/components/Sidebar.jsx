import React from 'react'
import { faCalendar, faHouse, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Sidebar() {
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
    <div className='sidebar bg-gray-200 min-h-screen p-5 hidden md:block'>
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
