import '../App.css';
import CardPersonnel from '../components/CardPersonnel';
import { connect } from 'react-redux';
import { simpleAction } from '../redux/action';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function IndexPage(props) {
  let navigate = useNavigate();
  const [personnelData, setPersonnelData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage] = useState(4);
  const [pageCount, setPageCount] = useState(0);

  const paginationHandler = (array, index, size) => {
    index = Math.abs(parseInt(index));
    index = index > 0 ? index - 1 : index;
    size = parseInt(size);
    size = size < 1 ? 1 : size;

    return [...(array.filter((value, n) => {
        return (n >= (index * size)) && (n < ((index + 1) * size))
    }))]
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage === pageCount) {
      setCurrentPage(pageCount);
    }
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)

    if (currentPage === 1) {
      setCurrentPage(1);
    }
  }

  const personnelDetail = (data) => {
    localStorage.setItem('personnelData', JSON.stringify(data));
    navigate('/personnel-detail')
  }

  useEffect(() => {
    props.getPersonnelData();
    const pageCountDivide = props.personnel.length / showPerPage;
    setPageCount(pageCountDivide);
  }, [])

  useEffect(() => {
    const initialData = paginationHandler(props.personnel, currentPage, showPerPage);
    setPersonnelData(initialData);
  },[currentPage])
  return (
    <div className="App">
      <div className='page-container'>
        <div className='personnel-list-container'>
          <div className='personnel-list'>
            <p className='text-4xl text-pink-600 uppercase font-bold'>Personnel List</p>
            <p className='text-blue-900 text-xl mt-2'>List of all personnels</p>
          </div>
          <div className='personnel-list my-auto md:flex mt-5 md:mt-0'>
            <div className='w-full md:w-1/2 border border-gray-500 leading-loose pl-6 rounded-md mr-4 flex'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-pink-600 my-auto mr-3" />
              <input
                type="text"
                name=""
                id=""
                placeholder='Find Personnels'
                className='w-full border-none focus:outline-none'
              />
            </div>
            <button className='uppercase bg-pink-600 btn-base w-full md:w-1/2 mt-3 md:mt-0'>
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
          <button className={`mr-10 ${currentPage === 1 ? 'text-blue-400' : 'text-blue-900'}`} onClick={() => prevPage()}>
            <FontAwesomeIcon icon={faChevronLeft} className="mr-3" />
            Previouse Page
          </button>
          <button className={`${currentPage === pageCount ? ' text-blue-400' : 'text-blue-900'}`} onClick={() => nextPage()}>
            Next Page
            <FontAwesomeIcon icon={faChevronRight} className="ml-3" />
          </button>
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
