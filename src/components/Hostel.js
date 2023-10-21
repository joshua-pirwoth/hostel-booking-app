import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa';
import '../index.css';


const Hostel = ( {hostel} ) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12" style={{margin: '12px 0px'}}>
        <div className="card" style={{maxWidth: '310px', maxHeight: '386px'}}>
            <img src={hostel.hostelImage} className="card-img-top" alt="hostelThumbnail" style={{ border: '1px solid black' }} />
            <div className="hostel-desc" style={{width: '100%'}}>
                <div>
                    <p className="card-text" style={{fontWeight: 'bold'}}>
                        {hostel.hostelName}
                    </p>
                    <p><FaStar />     {hostel.rating}</p>
                </div>                
                <p className="card-text" style={{color: '#717171'}}>{hostel.hostelLocation}</p>
                <p className="card-text"><span style={{fontWeight: 'bold'}}>{hostel.roomsAvailable}</span> rooms available</p>        
            </div>
        </div>
    </div>
  );
};

export default Hostel;
