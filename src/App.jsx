import logo from './logo.svg';
import './App.css';
import Home from './Portfolio/Home';
import About from './Portfolio/About';
import Services from './Portfolio/Service';
import Sidenav from './Shared/Sidenav';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Services />}></Route>
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
{/*      
      <About />
      <Services/> */}
    </div>
  );
}

export default App;
