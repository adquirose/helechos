import Title from "../Title"
import { Container, Row, Col } from "reactstrap"
import { LineChart, Drop, Road2, SquareMarker, GridInterface, Quote } from '../Icons'

function Proyecto() {
  return (
    <div id="proyecto" className="section bg-azul">
        <Container>
            <Row className="d-flex justify-content-center">
                <Title text="PROYECTO"/>
            </Row>
            <Row>
                <Col sm="12" md="5">
                    <Quote width={52} height={52}/>
                    <p className="message">
                        Un lugar para vivir y también de disfrutar del descanso y 
                        el relajo en un entorno natural único.
                    </p>
                </Col>
                <Col sm="12" md="7">
                    <p className="description">
                        Entre el río Tinguiririca y cerros de árboles milenarios, 
                        parcelas agrícolas que cuentan con hermosos paisajes, 
                        en la Ruta del Vino Del Valle de Colchagua, a 18 kms de San Fernando y 
                        20 kms de Santa Cruz.
                        55 hectáreas, que darían un total de 73 parcelas de 5.000 metros.
                        A minutos de viñas en producción, restaurantes, del Museo de Santa Cruz
                        y de la Hacienda del Huique y a 1 hora de Pichilemu.
                    </p>
                </Col>
            </Row>
            <Row className="pt-4 mb-4">
                <Col md="6">
                    <p className="msg">Parcelas de <br/><span>5.000 m</span></p>
                </Col>
                <Col md="6">
                    <div className="d-flex flex-column mt-4">
                        <div className="mb-2">
                            <span className="msg-valores with-bg">Valores desde</span>
                        </div>
                        <span className="msg-valores">$ 19.990.000 hasta $ 44.999.000.</span>
                    </div>
                </Col>
            </Row>
            <div className="icons-container">
                <div className="d-flex justify-content-center"><LineChart/><span>ZONA DE ALTA <br/>PLUSVALÍA</span></div>
                <div className="d-flex justify-content-center"><GridInterface/><span>73 <br/>PARCELAS</span></div>
                <div className="d-flex justify-content-center"><SquareMarker/><span>PARCELAS <br/>PLANAS</span></div>
                <div className="d-flex justify-content-center"><Drop/><span>FACTIBILIDAD DE LUZ Y <br/>AGUA CORRIENTE</span></div>
                <div className="d-flex justify-content-center"><Road2/><span>CAMINO <br/>ASFALTADO</span></div>
            </div>
        </Container>
        
    </div>
  )
}

export default Proyecto