import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './css/meanmenu.css';
import './css/animate.min.css';
import './css/boxicons.min.css';
import './css/nice-select.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/style2.css';
import './css/responsive.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import Infrastructure from './Infrastructure';
import Achievement from './Achievements';
import ContactUs from './ContactUs';
import Header from './components/Header';
import Footer from './components/Footer'

const App = () =>{
  return(
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/infra' element={<Infrastructure/>}/>
      <Route path='/achieve' element={<Achievement/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
    <Footer />
    </>
  );
};

export default App;
