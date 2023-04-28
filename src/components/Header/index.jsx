import { Container, Row, Col } from 'reactstrap';

function Header() {
  return (
    <div className='header-container'>
      <div id="header">
        <div style={{position:'absolute', bottom:'150px', width:'100%'}}>
          <Container>
            <Row>
              <Col sm="10" md="6">
                <p>¡La parcela que siempre <span>soñaste!</span></p>
              </Col>
              <Col>
              </Col>
            </Row>
            <Row>
              <div className='d-flex justify-content-center'>
                <button onClick={()=> console.log('click')}>CONOCE MÁS</button>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Header