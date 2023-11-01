import React from 'react';

import './style.css'

import Button from 'react-bootstrap/Button';

function Rates() {
    return (
      <div className="bg-white shadow p-4 rounded-2xl">
        <div className="text-2xl text-center">
        Price: *** / per night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
        <div className="py-3 px-4">
            <label>Check in:</label>
            <input type="date" value=""/>
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check out:</label>
            <input type="date" value="" />
          </div>
          <div className="py-3 px-4 border-t">
          <label>Number of guests:</label>
          <input type="number"
                 value=""/>
        </div>
        <div className="py-3 px-4 border-t">
            <label>Your full name:</label>
            <input type="text"
                   value=""
                   />
            <label>Phone number:</label>
            <input type="tel"
                   value=""
                  />
          </div>
        </div>

      </div>

      </div>
            
        
      
    );
  }
  
  export default Rates;
  