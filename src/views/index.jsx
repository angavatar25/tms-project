import '../App.css';
import CardPersonnel from '../components/CardPersonnel';

function IndexPage() {
  return (
    <div className="App">
      <div className='grid grid-cols-3'>
        <div className='sidebar bg-gray-200 min-h-screen'>
          <ul>
              <li>Beranda</li>
              <li>Personnel List</li>
              <li>Daily Attendance</li>
          </ul>
        </div>
        <div className='bg-gray-300 min-h-screen md:col-span-2 w-full p-5'>
          <div className='flex justify-between bg-white p-3'>
            <div className='personnel-list'>
              <p className='text-4xl text-pink-600'>Personnel List</p>
              <p className='text-blue-900 text-xl mt-2'>List of all personnels</p>
            </div>
            <div className='personnel-list my-auto'>
              <input
                type="text"
                name=""
                id=""
                placeholder='Find Personnels'
                className=' border border-gray-500 py-3 px-6 rounded-md mr-4'
              />
              <button className='uppercase bg-pink-600 text-white py-3 px-6 rounded-md'>
                Add Personnel +
              </button>
            </div>
          </div>
          <div className="mt-6">
            <CardPersonnel/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
