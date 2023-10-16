import React from 'react'
import Navbar from '../components/navbar'
import Footer from  '../components/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function loginPage(){
    return(
     <><Navbar />
     <signUp />
     <Footer/>
     </>
     
       
    )
}
export default loginPage;