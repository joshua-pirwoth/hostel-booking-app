import { useState } from 'react';
import './card.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" onClick={handlePrev}>
        <img src="/prev_arrow_icon.svg" alt="previous" />
      </a>
      <a className="carousel-control-next" onClick={handleNext}>
      <img src="/next_arrow_icon.svg" alt="next" />
      </a>
    </div>
  );
};

export default Carousel;
