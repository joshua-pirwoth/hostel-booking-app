import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

import Button from 'react-bootstrap/Button';

function Rates() {
    return (
      
            <div className="rate-container">
              <h2>Rates</h2>
              <hr/>
              <table>
                <tr>
                    <td className="px-4">Single Room <br/>UGX..............</td>
                  
                    <td className='px-4'><Button variant="primary" type="submit" className="btn">Book</Button></td>

                </tr>
              </table>
              <hr/>
              <table>
                <tr>
                    <td className="px-4">Single Room <br/>UGX..............</td>
                  
                    <td className='px-4'><Button variant="primary" type="submit" className="btn">Book</Button></td>

                </tr>
              </table>
            </div>
          
        
      
    );
  }
  
  export default Rates;
  