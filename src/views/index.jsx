import '../App.css';
import CardPersonnel from '../components/CardPersonnel';
import { connect } from 'react-redux';
import { simpleAction } from '../redux/action';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function IndexPage(props) {
  let currentPage = 1;
  let navigate = useNavigate();
  const [personnelData, setPersonnelData] = useState([]);

  const paginationHandler = (array, index, size) => {
    index = Math.abs(parseInt(index));
    index = index > 0 ? index - 1 : index;
    size = parseInt(size);
    size = size < 1 ? 1 : size;

    return [...(array.filter((value, n) => {
        return (n >= (index * size)) && (n < ((index+1) * size))
    }))]
  }

  const nextPage = () => {
    currentPage++;

    const paginationData = paginationHandler(props.personnel, currentPage, 4);
    setPersonnelData(paginationData);
  }

  const prevPage = () => {
    currentPage--;

    if (currentPage === 1) {
      currentPage = 1;
    }

    const paginationData = paginationHandler(props.personnel, currentPage, 4);
    setPersonnelData(paginationData);
  }

  const personnelDetail = (data) => {
    localStorage.setItem('personnelData', JSON.stringify(data));
    navigate('/personnel-detail')
  }

  useEffect(() => {
    props.getPersonnelData();
  }, [])

  useEffect(() => {
    const initialData = paginationHandler(props.personnel, currentPage, 4);
    setPersonnelData(initialData);
  },[currentPage])
  return (
    <div className="App">
      <div className='bg-gray-300 min-h-screen md:col-span-2 w-full p-5'>
        <div className='block md:flex justify-between bg-white p-3'>
          <div className='personnel-list'>
            <p className='text-4xl text-pink-600 uppercase font-bold'>Personnel List</p>
            <p className='text-blue-900 text-xl mt-2'>List of all personnels</p>
          </div>
          <div className='personnel-list my-auto md:flex mt-5 md:mt-0'>
            <input
              type="text"
              name=""
              id=""
              placeholder='Find Personnels'
              className='w-full md:w-1/2 border border-gray-500 py-3 px-6 rounded-md mr-4'
            />
            <button className='uppercase bg-pink-600 text-white py-3 px-6 rounded-md w-full md:w-1/2 mt-3 md:mt-0'>
              Add Personnel +
            </button>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          {
            personnelData && personnelData.map((index, key) => (
              <CardPersonnel
                key={`key-index-${key}`}
                firstName={index.name.first}
                lastName={index.name.last}
                phoneNumber={index.cell}
                birthdayDate={index.dob.date}
                emailAddress={index.email}
                personnelId={index.id.value}
                goToPersonnelDetail={() => personnelDetail(index)}
              />
            ))
          }
        </div>
        <div className='text-center mt-10 gap-4 text-blue-900'>
          <button className='mr-10' onClick={() => prevPage()}>Previous Page</button>
          <button onClick={() => nextPage()}>Next Page</button>
        </div>
      </div>
    </div>
  );
}

const reduxState = (state) => ({
  personnel: state.counter.personnelData
})

const reduxDispatch = (dispatch) => ({
  getPersonnelData: () => dispatch(simpleAction()),
})

export default connect(reduxState, reduxDispatch) (IndexPage);
