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
    <div className='sidebar hidden md:block'>
      <ul>
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
