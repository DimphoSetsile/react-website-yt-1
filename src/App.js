import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      
      
      <Routes>
        {/*links on the navbar*/}
        <Route path='/Home' element={<Home/>} />
        <Route path='/Services' element={<Services/>} />
         <Route path='/Products' element={<Products/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        

        
      
      </Routes>
      
      <Footer />
     </Router>
    </>
  );
}


export default App;
