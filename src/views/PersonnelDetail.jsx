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

  const personnelData = {
    "name": parsedPersonnelData.name.first + " " + parsedPersonnelData.name.last,
    "telephone": parsedPersonnelData.cell,
    "location": personnelLocationDetail(),
    "email": parsedPersonnelData.email,
    "birthday": parseDateOfBirth(parsedPersonnelData.dob.date)
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
          {
            personnelData && Object.entries(personnelData).map(([key, value]) => (
              <div className='mt-2' key={`personnel-detail-${key}`}>
                <p className='font-semibold capitalize'>{key}</p>
                <p className='text-xl'>{value}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
