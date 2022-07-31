import React from 'react'

export default function CardPersonnel() {
  return (
    <div>
      <div className='bg-white p-3 text-blue-900'>
        <div className="upper-section flex justify-between">
          <p className='text-blue-900'>
            Personnel ID: <span className='text-pink-600'>123456</span>
          </p>
          <div>
            <button>
              Settings
            </button>
          </div>
        </div>
        <div className="photo-section">

        </div>
        <div>
          <div className='mt-2'>
            <p className='font-semibold'>Name</p>
            <p className='text-xl'>First Name Last Name</p>
          </div>
          <div className='mt-2'>
            <p className='font-semibold'>Telephone</p>
            <p className='text-xl'>Phone Number</p>
          </div>
          <div className='mt-2'>
            <p className='font-semibold'>Birthday</p>
            <p className='text-xl'>DD-MM-YYYY</p>
          </div>
          <div className='mt-2'>
            <p className='font-semibold'>Email</p>
            <p className='text-xl'>Email Address</p>
          </div>
        </div>
      </div>
    </div>
  )
}
