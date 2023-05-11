import { Container, Row, Col } from 'reactstrap';
import Logo from '../../assets/images/logo-a.png'

function Header() {
  return (
    <div className='header-container'>
      <div id="header">
        <img className="logo" src={Logo} alt="logo"/>
        <div className="header-msg-container">
          <Container>
            <Row>
              <Col sm="10" md="8">
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