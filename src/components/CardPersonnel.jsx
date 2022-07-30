import React from 'react'

export default function CardPersonnel() {
  return (
    <div>
      <div className='bg-white'>
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
      </div>
    </div>
  )
}
