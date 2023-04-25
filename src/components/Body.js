import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Body() {
  return (

    <>
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
      <Row className='BodyRow'>
        <Col sm={2} className='firstC'></Col>
        <Col sm={7} className='secondC'>
            <div className='BodyContent'>
                <h1 className='ContentTitle'>Welcome User</h1>
                <div className='Desk'>
                <div className='SS'> </div>
                <h6 className='Description'><b>Create Read Update Delete project using React.js. Come on !! and let's play with datas.</b><br></br>
                The new Quick Start teaches modern React and includes live examples.</h6></div> 
            </div>
        </Col>
        <Col sm={3} className='thirdC'>

            <h3 className='Contact'>Get in touch</h3>
            <ul className='PInfo'>
                <li className='fullname'>MY FULLNAME ⮟</li>
                <li>MY AGE ⮟</li>
                <li>MY EMAIL ⮟</li>
                <li>MY ADDRESS ⮟</li>
                <li>MY PHONE NUMBER ⮟</li>
            </ul>
        </Col>
      </Row>
      </>
  );
}

export default Body;