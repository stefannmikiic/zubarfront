import React from 'react';
import './App.css';
import Pocetna from './pages/Pocetna';
import Services from './pages/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigacija/NavBar.jsx';

function App() {
  return (
    <>
       <BrowserRouter>
       <NavBar />
         <Routes>
           <Route path='/' element={<Pocetna />} />
           <Route path='/services' element={<Services />} />
         </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
