import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar bg-gray-200 min-h-screen p-5 hidden md:block'>
        <ul className='text-blue-900 text-3xl leading-snug'>
            <li>
                <a href="">Beranda</a>
            </li>
            <li>
                <a href="">Personnel List</a>
            </li>
            <li>
                <a href="">Daily Attendance</a>
            </li>
        </ul>
    </div>
  )
}
