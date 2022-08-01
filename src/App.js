import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import IndexPage from './views';
import './styles/App.scss';
import PersonnelDetail from './views/PersonnelDetail';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-1  md:grid-cols-3'>
        <div>
          <Sidebar/>
        </div>
        <div className='bg-gray-300 md:col-span-2'>
          <Routes>
            <Route path='/' element={<IndexPage/>}></Route>
            <Route path='/personnel-detail' element={<PersonnelDetail/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
