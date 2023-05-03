import { Container, Row, Col } from 'reactstrap';

function Header() {
  return (
    <div className='header-container'>
      <div id="header">
        <div className="header-msg-container">
          <Container>
            <Row>
              <Col sm="10" md="7">
                <p>¡La parcela que siempre <span>soñaste!</span></p>
              </Col>
              <Col>
              </Col>
            </Row>
            <Row>
              <div className='d-flex justify-content-center' >
                <a href="#proyecto"><button>CONOCE MÁS</button></a>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Header