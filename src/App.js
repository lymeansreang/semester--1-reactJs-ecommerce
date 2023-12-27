import React from 'react';
// import react router data
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
// import component
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header/>
      <Hero/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  </div>;
};

export default App;
