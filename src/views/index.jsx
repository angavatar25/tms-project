import '../App.css';
import CardPersonnel from '../components/CardPersonnel';
import { connect } from 'react-redux';
import { simpleAction } from '../redux/action';
import { useEffect } from 'react';

function IndexPage(props) {
  useEffect(() => {
    props.getPersonnelData();
  }, [])
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
            props.personnel && props.personnel.map((index, key) => (
              <CardPersonnel
                key={`key-index-${key}`}
                firstName={index.name.first}
                lastName={index.name.last}
                phoneNumber={index.cell}
                birthdayDate={index.dob.date}
                emailAddress={index.email}
                personnelId={index.id.value}
              />
            ))
          }
        </div>
        <div className='text-center mt-10 gap-4 text-blue-900'>
          <button className='mr-10'>Previous Page</button>
          <button>Next Page</button>
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
