import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
        <>
             <Row className='BodyRow'>
                <Col sm={2} className='firstC'>sm=2</Col>
                <Col sm={7} className='secondC'>  <div className="Footer">
      <p>© 2023 Auriel James V. Fernandez, All Rights Reserved</p>
  </div></Col>
                <Col sm={3} className='thirdC'>sm=3</Col>
            </Row>
          
          
          
        </>
    )
}

export default Footer