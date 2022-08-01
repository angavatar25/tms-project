import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { parseDateOfBirth } from '../moment';

export default function CardPersonnel(props) {
  const {
    firstName,
    lastName,
    phoneNumber,
    birthdayDate,
    emailAddress,
    personnelId,
    goToPersonnelDetail,
  } = props

  const checkPersonnelId = () => {
    if (personnelId && personnelId.includes('undefined') || !personnelId) {
      return '-';
    }
    return personnelId;
  }

  return (
    <div>
      <div className='bg-white p-3 text-blue-900 cursor-pointer' onClick={goToPersonnelDetail}>
        <div className="upper-section flex justify-between border-b border-gray-300 pb-3">
          <p className='text-blue-900'>
            Personnel ID: <span className='text-pink-600'>{checkPersonnelId()}</span>
          </p>
          <div>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
        <div className="photo-section">
          <div className=' w-24 h-24 rounded-full border border-blue-900 mx-auto my-10'>
            <span className='m-auto flex justify-center items-center h-full'>Photo</span>
          </div>
        </div>
        <div>
          <div className='mt-2'>
            <p className='font-semibold'>Name</p>
            <p className='text-xl'>{firstName} {lastName}</p>
          </div>
          <div className='mt-2'>
            <p className='font-semibold'>Telephone</p>
            <p className='text-xl'>{phoneNumber}</p>
          </div>
          <div className='hidden md:block'>
            <div className='mt-2'>
              <p className='font-semibold'>Birthday</p>
              <p className='text-xl'>{parseDateOfBirth(birthdayDate)}</p>
            </div>
            <div className='mt-2'>
              <p className='font-semibold'>Email</p>
              <p className='text-xl break-all'>{emailAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
