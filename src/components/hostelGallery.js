import React from 'react';
import './style.css'
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
// import image4 from './images/image4.jpg';
// import image5 from './images/image5.jpg';

function Gallery(){
    const images = [image1, image2, image3];
    return(
        <>
        
    {/* <div className="image-gallery">
      <div className="left-image">
        <img src={images[0]} alt='' />
      </div>
      <div className="right-images">
        {images.slice(1).map((image, index) => (
          <img key={index} src={image} alt={` ${index + 2}`} />
        ))}
      </div>
    </div> */}
    
 
        </>
    )
}
export default Gallery;