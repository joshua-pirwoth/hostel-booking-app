
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom" // Import Router
// import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/navbar';
// import Footer from './components/footer'
// import Login from './components/loginpage'
import React from 'react'
import Auth from "./components/login"
// import Profile from './components/profile';
// import loginPage from './components/loginpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/signup" element={<Sign />} />
      <Route path="/profile" element={<userProfile />} />

    </Routes>
  </BrowserRouter>
    // <Router>
    //   {/* <Navbar />
    //   <Profile/> */}

    //   <Footer/>
  
    //     <Route path="/login" element={<loginPage />} /> 
        
      
    // </Router>
  );
}










export default App;


