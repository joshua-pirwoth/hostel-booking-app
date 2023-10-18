import React from 'react';
import HostelCarousel from './HostelCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import HostelDetails from './HostelDetails';

const HostelCard = () => {
  // styles
  const conatinerStyles = { maxWidth: '310px', height: '400px', position: 'relative' };
  const col1_styles = { width: '100%', height: '100%', maxWidth: '310px', maxHeight: '310px', overflow: 'hidden', position: 'absolute', padding: 0 };
  const col2_styles = { width: '100%', height: '86px', position: 'absolute', bottom: '0', padding: 0 }

    return (
      <Container style={ conatinerStyles }>
      <Row>
        <Col style={ col1_styles }>
          {/* Carousel */}
          <HostelCarousel />
        </Col>
      </Row>
      <Row>
        <Col style={ col2_styles }>
          {/* Details */}
          <HostelDetails />
        </Col>
      </Row>
    </Container>
     );
}
 
export default HostelCard;