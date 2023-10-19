import React from 'react';
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa';

const HostelDetails = () => {
    const hostelName = "Hostel Name";
    const hostelLocation = "Location (Kikoni, Makerere)";
    const availableRooms = 120;
    /* const ratingIcon = "./assets/rating_icon.svg"; */
    const rating = 4.5;

    return ( 
        <div className="hostel-details" w-100>
            <div className="name-and-rating">
                <p>{ hostelName }</p>
                <div className="rating-icon-figure d-flex align-items-center justify-content-space-between">
                    <FaStar className='mx-2'/>
                    { rating }
                </div>
            </div>
            <p>{ hostelLocation }</p>
            <p>{ availableRooms } rooms available</p>
        </div>
     );
}
 
export default HostelDetails;