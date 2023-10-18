import React from 'react';
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <p>{ rating }</p>
            </div>
            <p>{ hostelLocation }</p>
            <p>{ availableRooms } rooms available</p>
        </div>
     );
}
 
export default HostelDetails;