import React, { useState } from 'react';
import tsmLogo from '../assets/logo-tms-white.jpeg';
import MobileSidebar from './MobileSidebar';

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  return (
    <div>
        {showSidebar && 
          <MobileSidebar
            closeSidebar={handleSidebar}
          />
        }
        <div className='flex justify-between p-5 w-full bg-white'>
            <div className='image-container flex'>
                <button className='hamburger-icon my-auto mr-3 md:hidden' onClick={handleSidebar}>
                    <div className='w-8 h-1 bg-blue-900'></div>
                    <div className='w-8 h-1 mt-2 bg-blue-900'></div>
                    <div className='w-8 h-1 mt-2 bg-blue-900'></div>
                </button>
                <div className='my-auto'>
                    <img className='w-20' src={tsmLogo} alt="" />
                </div>
            </div>
            <div className='flex my-auto'>
                <p className='my-auto mr-5 text-blue-900 font-bold hidden md:block'>
                    <span className='italic font-normal'>Hello,</span> TMS User
                </p>
                <div className='w-16 h-16 rounded-full border border-blue-900 text-blue-900'>
                    <span className='m-auto flex justify-center items-center h-full'>Photo</span>
                </div>
            </div>
        </div>
    </div>
  )
}
