import React from 'react';
import './style.css'




function HostelList(){
  return (
    <div className="container mt-4">
    <h1 className="display-6">What this hostel offers.</h1>
    <div className="container">
      <div className="row mb-0">
        <div className="col-12 col-sm-6 p-0 mb-0">
          <ul className="list-unstyled list-group-custom">
            <li className='list-custom'>Free WiFi</li>
            <li className='list-custom'>Pool Table</li>
            <li className='list-custom'>Play Station</li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 p-0 mb-0">
          <ul className="list-unstyled list-group-custom">
            <li className='list-custom'>Transport to campus</li>
            <li className='list-custom'>Transport to campus</li>
            <li className='list-custom'>DsTv</li>
            {/* <li className='list-custom'>Another List Item 3</li> */}
          </ul>
        </div>
      </div>
    </div>

    
    </div>
  );
};

export default HostelList;
