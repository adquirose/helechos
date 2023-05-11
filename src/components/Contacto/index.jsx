import { useState } from 'react'
import { Container, Row, Col} from 'reactstrap'
import Title from '../Title'
import { Phone, LogoWhatsapp, Email, Pin3 } from '../Icons'
import axios from 'axios'

const INITIAL_STATE = {
  nombre:'',
  email:'',
  mensaje:''
}

function Formulario(){
  const [data, setData] = useState(INITIAL_STATE)
  const [isLoading, setIsLoading] = useState(false)
  const handleOnChange = event => {
    event.preventDefault()
    setData({...data, [event.target.name]: event.target.value})
  }
  const handleOnSubmit = (event) => {
    event.preventDefault();
		const { nombre, email, mensaje } = data 
		const message = `
			Nombre: ${nombre} 
			Email: ${email} 
			Mensaje: ${mensaje}
    `
    const info = {
      to:'contacto@bajosdeloshelechos.cl',
      replyTo: email,
      subject:'Formulario Contacto',
      text: message
    }

		setIsLoading(true)
		axios.post('https://us-central1-firemailer.cloudfunctions.net/submitContactoFZ',info)
			.then(res => {
				console.log(`mensaje enviado: ${res.data.isEmailSend}`)
				setIsLoading(false)
			})
			.catch(error => console.log(`ha ocurrido un error ${error}`))
		setData(INITIAL_STATE)
	};
  const { nombre, email, mensaje } = data
  const isDisabled = nombre === '' || email === '' 

  return(
    <form onSubmit={handleOnSubmit}>
      <input 
        name="nombre" 
        placeholder="NOMBRE" 
        type="text"
        value={nombre}
        onChange={handleOnChange}
      />
      <input 
        name="email" 
        placeholder="MAIL" 
        type="email"
        value={email}
        onChange={handleOnChange}
      />
      <textarea 
        name="mensaje" 
        placeholder="MENSAJE" 
        type="textarea"
        value={mensaje}
        onChange={handleOnChange}
      />
      <div className='d-flex justify-content-end'>
        {isLoading ? 
          <span style={{fontSize:'16px'}}>Enviando...</span> :
          <button
            type="submit"
            disabled={isDisabled}
          >
            Enviar
          </button>
      }
      </div>
    </form>
  )
}
function Contacto() {
  return (
    <div id="contacto" className='section pb-5 cd-section'>
        <Container>
            <Row className="d-flex justify-content-center">
                <Title text="CONTACTO"/>
            </Row>
            <Row style={{marginTop:'40px'}}>
              <Col md="6" sm="12">
                <div>
                  <span>¡Escríbenos y <br/>te asesoramos!</span>
                  <div className='pt-4'>
                    <div className='pb-3 d-flex'>
                      <div style={{width:'75px', display:'flex', justifyContent:'space-between'}}>
                        <Phone/><LogoWhatsapp/>
                      </div>
                      <a href='https://api.whatsapp.com/send/?phone=56991939661'>+569 9 1939661</a>
                    </div>
                    <div className='pb-3'><Email/><a href='mailto:contacto@bajosdeloshelechos.cl'>contacto@bajosdeloshelechos.cl</a></div>
                    <div className='pb-3'><Pin3/><a>Los Moscosos, Placilla, Colchagua.</a></div>
                  </div>
                </div>
              </Col>
              <Col md="6" sm="12" className='pt-4 pt-md-0'>
                <Formulario/>
              </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contacto