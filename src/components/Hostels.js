import 'bootstrap/dist/css/bootstrap.min.css';
import Hostel from './Hostel';

const Hostels = ({ hostels }) => {
    return ( 
        <div className='row'>
        {hostels.map((hostel) => (
            <Hostel key={hostel.id} hostel={hostel}/>
        ))}
        </div>
     );
}
 
export default Hostels;