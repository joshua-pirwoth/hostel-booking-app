import React from 'react';
import './style.css'
import Gallery from './hostelGallery'
import Details from './about';
import Rates from './rates';
import Offers from './offers';

function HostelName (){
return(
    <>
    <div className='alldetails'>
    <div className='Hostel-name'>
    <h2>Hostel Name - Location  </h2>
    
    <h3>Save</h3>
   
    </div>
    
    <Gallery/>
    <hr/>
    <Details/>
    <hr/>
    
    <hr/>
    <div>
        <h2>About this hostel</h2>
        <p>(hostel-name) is located in (location). It was officially opened in (year). It is a (category) hostel <br/>
        The hostel is situated near the University. Visitors are allowed in hostels for specific time.<br/> Security at the hostel premises is good for the students</p>
    </div>
    <hr/>
    </div>
<Offers/>
    </>
)
}

export default HostelName;