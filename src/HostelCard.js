import Carousel from './Carousel';
import './card.css';

const HostelCard = () => {
    const hostelName = "Hostel Name";
    const hostelLocation = "Location (e.g. Kikoni, Makerere)";
    const availableRooms = 120;
    const ratingIcon = "/rating_icon.svg";
    const rating = 4.5;

    return ( 
        <div className="hostel-card">
            {/* Carousel */}
            <Carousel />
            {/* Hostel details */}
            <div className="hostel-details">
                <div className='details-header'>
                <h3>{ hostelName }</h3>
                <div className='rating'>
                    <img src={ ratingIcon } alt="rating_icon" />
                    <p>{ rating }</p>
                </div>
                </div>
                
                <p>{ hostelLocation }</p>
                <p>{ availableRooms } rooms available</p>
            </div>
        </div>
     );
}
 
export default HostelCard;