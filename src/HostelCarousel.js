import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image1 from'./assets/image1.jpg';
import image2 from'./assets/image2.jpg';
import image3 from'./assets/image3.jpg';

function HostelCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (    
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        {/* <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol> */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={ image1 } className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={ image2 } className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={ image3 } className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        {/* <span className="sr-only">Previous</span> */}
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        {/* <span className="sr-only">Next</span> */}
      </button>
    </div>
  );
}

export default HostelCarousel;