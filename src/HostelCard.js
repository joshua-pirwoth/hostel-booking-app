import React from 'react';
import './card.css';
import HostelCarousel from './HostelCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const HostelCard = () => {
    
    const hostelName = "Hostel Name";
    const hostelLocation = "Location (e.g. Kikoni, Makerere)";
    const availableRooms = 120;
    /* const ratingIcon = "./assets/rating_icon.svg"; */
    const rating = 4.5;

    return ( 
    <div className="conatiner">
      <Card>
      {/* Carousel */}
      <HostelCarousel />
      <Card.Body>
        <Card.Title>
          { hostelName }
          {/* <div className='hostel-rating d-flex flex-column justify-content-space-between align-items-center' style={{width: '15%'}}>
              <img src={ ratingIcon } alt="rating_icon" /> */}
          { rating }
            {/* </div> */} 
        </Card.Title>
        <Card.Text>
            <p>{ hostelLocation }</p>
            <p>{ availableRooms } rooms available</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
     );
}
 
export default HostelCard;