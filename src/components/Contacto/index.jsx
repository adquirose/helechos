import { Container, Row, Col} from 'reactstrap'
import Title from '../Title'
import { PhoneCall, LogoWhatsapp, Email, Pin3 } from '../Icons'
function Formulario(){
  return(
    <form>
      <input name="name" placeholder="NOMBRE" type="text"/>
      <input name="email" placeholder="MAIL" type="email"/>
      <textarea name="mensaje" placeholder="MENSAJE" type="textarea"/>
      <div className='d-flex justify-content-end'>
        <button>ENVIAR</button>
      </div>
    </form>
  )
}
function Contacto() {
  return (
    <div id="contacto" className='section pb-5'>
        <Container>
            <Row className="d-flex justify-content-center">
                <Title text="CONTACTO"/>
            </Row>
            <Row style={{marginTop:'40px'}}>
              <Col>
                <div>
                  <span>¡Escribenos y <br/>te asesoramos!</span>
                  <div className='pt-4'>
                    <div className='pb-3 d-flex'>
                      <div style={{width:'75px', display:'flex', justifyContent:'space-between'}}>
                        <PhoneCall/><LogoWhatsapp/>
                      </div>
                      <a href='https://api.whatsapp.com/send/?phone=56991939661'>+569 9 1939661</a>
                    </div>
                    <div className='pb-3'><Email/><a href='mailto:contacto@bajosdeemiliana.cl'>contacto@bajosdeemiliana.cl</a></div>
                    <div className='pb-3'><Pin3/><a>Los Moscosos, Placilla, Colchagua.</a></div>
                  </div>
                </div>
              </Col>
              <Col>
                <Formulario/>
              </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contacto