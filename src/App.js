
import './App.css';

import { BrowserRouter} from "react-router-dom" // Import Router
// import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/navbar';
import Footer from './components/footer'
// import Login from './components/loginpage'
import React from 'react'
import HostelName from './components/hostel';
import Amenities from './components/offers';
import Rates from './components/rates';


// import Profile from './components/profile';
// import loginPage from './components/loginpage';

function App() {
  return (
    <BrowserRouter>
   <Navbar />
   {/* <HostelName/> */}
   <Amenities/>
{/* <Rates/> */}

   <Footer/>
  </BrowserRouter>
  
  );
}










export default App;


