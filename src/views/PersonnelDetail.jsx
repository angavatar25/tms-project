import { useNavigate } from 'react-router-dom';
import { parseDateOfBirth } from '../moment';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PersonnelDetail() {
  const loadPersonnelData = localStorage.getItem('personnelData');
  const parsedPersonnelData = JSON.parse(loadPersonnelData);
  let navigate = useNavigate();
  
  const personnelLocationDetail = () => {
    return parsedPersonnelData.location.city + ',' + parsedPersonnelData.location.state + ',' + parsedPersonnelData.location.country;
  }

  const returnToMainPage = () => {
    navigate('/');
  }
  return (
    <div>
      <div className='bg-gray-300 min-h-screen w-full p-5'>
        <button
          onClick={() => returnToMainPage()}
          className='mb-5 text-blue-900'>
            <FontAwesomeIcon icon={faChevronLeft} className="mr-3"/>
            Kembali
          </button>
        <div className='bg-white text-blue-900 p-5'>
          <p className='text-4xl mb-5 text-pink-600 uppercase font-bold'>Personnel Detail</p>
          <div className='mt-2'>
            <p className='font-semibold'>Name</p>
            <p className='text-xl'>{parsedPersonnelData.name.first} {parsedPersonnelData.name.last}</p>
          </div>
          <div className='mt-2'>
            <p className='font-semibold'>Telephone</p>
            <p className='text-xl'>{parsedPersonnelData.cell}</p>
          </div>
          <div className='mt-2'>
            <p className='font-semibold'>Location</p>
            <p className='text-xl'>{personnelLocationDetail()}</p>
          </div>
          <div className='mt-2'>
            <p className='font-semibold'>Email</p>
            <p className='text-xl'>{parsedPersonnelData.email}</p>
          </div>
          <div className='mt-2'>
            <p className='font-semibold'>Birthday</p>
            <p className='text-xl'>{parseDateOfBirth(parsedPersonnelData.dob.date)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
