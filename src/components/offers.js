import React from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';





function HostelList(){
  return (





    <div className="container mt-4">
    <h4 className="display-6">What this hostel offers.</h4>
    <div className="container mt-10">
      <div className="row mb-10">
        <div className="col-12 col-sm-6 p-0 mb-0">
          <ul className="list-unstyled list-group-custom">
            <li className='list-custom'>Free WiFi</li>
            <li className='list-custom'>Pool Table</li>
            <li className='list-custom'>Play Station</li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 p-0 mb-0">
          <ul className="list-unstyled list-group-custom">
            <li className='list-custom'> Transport to campus</li>
            <li className='list-custom'>Transport to campus</li>
            <li className='list-custom'>DsTv</li>
            
          </ul>
        </div>
        
      </div>
      <button className='border p-2 flex rounded-2 cursor-pointer rounded-full py-2 px-4'>Show more amenities</button>
    </div>

    
    </div>
  );
};

export default HostelList;
