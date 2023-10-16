import React from 'react'
import Auth  from '../components/login'
import Navbar from '../components/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function loginPage(){
    return(
     
        <BrowserRouter>
        <Routes>
           <Route path='/auth' element={<loginPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}