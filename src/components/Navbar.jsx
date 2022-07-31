import React from 'react';
import tsmLogo from '../assets/logo-tms-white.jpeg';

export default function Navbar() {
  return (
    <div>
        <div className='flex justify-between p-5'>
            <div className='image-container'>
                <img src={tsmLogo} alt="" />
            </div>
            <div className='flex my-auto'>
                <p className='my-auto mr-5 text-blue-900 font-bold'><span className='italic font-normal'>Hello,</span> TMS User</p>
                <div className='w-16 h-16 rounded-full border border-blue-900 text-blue-900'>
                    <span className='m-auto flex justify-center items-center h-full'>Photo</span>
                </div>
            </div>
        </div>
    </div>
  )
}
