
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home'
import Appointment from '../src/pages/Appointment'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import Header from './components/Header';
import Footer from './components/Footer';
import Servicepage from './pages/Servicepage';
import Autodetailpage from './pages/Autodetailpage'
import Expressintpage from './pages/Expressintpage';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/servicepage' element={<Servicepage/>}/>
        <Route path='/autodetail' element={<Autodetailpage/>}/>
        <Route path='/expressint' element={<Expressintpage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
