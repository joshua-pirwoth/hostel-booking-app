import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from'./assets/image1.jpg';
import image2 from'./assets/image2.jpg';
import image3 from'./assets/image3.jpg';

function HostelCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='hostel-carousel'>
      <Carousel fade>
        <Carousel.Item>
        <img className='d-block w-100' src={ image1 } alt="First Slide" />
        </Carousel.Item>
        <Carousel.Item>
        <img className='d-block w-100' src={ image2 } alt="Second Slide" />
        </Carousel.Item>
        <Carousel.Item>
        <img className='d-block w-100' src={ image3 } alt="Third Slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HostelCarousel;