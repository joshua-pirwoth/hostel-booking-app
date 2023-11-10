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
      <button className='border p-2 flex rounded-2 cursor-pointer rounded-full py-2 px-4'>
     Show more amenities   
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
  
    </div>

    
    </div>
  );
};

export default HostelList;
