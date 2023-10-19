import React from 'react';
import HostelCarousel from './HostelCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import HostelDetails from './HostelDetails';

const HostelCard = () => {
  // styles
  const conatinerStyles = { maxWidth: '288px', height: '378px' };
  const col1_styles = { maxWidth: '288px', maxHeight: '288px'};
  const col2_styles = { height: '86px' };

    return (
      <div className="m-3 col-md-3 position-relative" style={ conatinerStyles }>
        <div className='row'>
            <div className='col w-100 h-100 position-absolute p-0 overflow-hidden' style={ col1_styles }>
              {/* Carousel */}
              <HostelCarousel />
            </div>
        </div>
        <div className='row'>
            <div className='col w-100 position-absolute p-0 bottom-0' style={ col2_styles }>
              {/* Details */}
              <HostelDetails />
            </div>
        </div>
    </div>
     );
}
 
export default HostelCard;