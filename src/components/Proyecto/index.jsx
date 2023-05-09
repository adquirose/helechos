import Title from "../Title"
import { Row, Col } from "reactstrap"
import Comillas from '../../assets/images/comillas.png'
import Plusvalia from '../../assets/images/plusvalia.png'
import Parcelas from '../../assets/images/parcelas.png'
import ParcelasPlanas from '../../assets/images/parcelas-planas.png'
import AguaLuz from '../../assets/images/agua-luz.png'
import Camino from '../../assets/images/camino.png'

function Proyecto() {
  return (
    <div id="proyecto" className="section bg-azul cd-section">
        <div className="container-lg">
            <Row className="d-flex justify-content-center">
                <Title text="PROYECTO"/>
            </Row>
            <Row>
                <Col sm="12" md="5" className="pt-3 pt-md-0">
                    <img style={{width:'80px'}} src={Comillas} alt="comillas"/>
                    <p className="message">
                        Un lugar para vivir y también <br/>
                        de disfrutar del descanso y el <br/>
                        relajo en un entorno natural único.
                    </p>
                </Col>
                <Col sm="12" md="7">
                    <p className="description">
                        Entre el río Tinguiririca y cerros de árboles milenarios, 
                        parcelas agrícolas que cuentan con hermosos paisajes, 
                        en la Ruta del Vino Del Valle de Colchagua, a 18 kms de San Fernando y 
                        20 kms de Santa Cruz.<br/>
                        <b>55 hectáreas</b>, que darían un total de 73 parcelas de 5.000 metros.
                        A minutos de viñas en producción, restaurantes, del Museo de Santa Cruz
                        y de la Hacienda del Huique y a 1 hora de Pichilemu.
                    </p>
                </Col>
            </Row>
            <Row className="pt-4 mb-4">
                <Col md="5">
                    <p className="msg">Parcelas de <br/><span>5.000 m</span></p>
                </Col>
                <Col md="7">
                    <div className="d-flex flex-column mt-4">
                        <div className="mb-2">
                            <span className="msg-valores with-bg">Valores desde</span>
                        </div>
                        <span className="msg-valores">$ 19.990.000 hasta $ 44.999.000.</span>
                    </div>
                </Col>
            </Row>
            <div className="icons-container">
                <div className="d-flex justify-content-center"><img style={{width:'40px', height:'40px'}} src={Plusvalia} alt="plusvalia"/><span>ZONA DE ALTA <br/>PLUSVALÍA</span></div>
                <div className="d-flex justify-content-center"><img style={{width:'40px', height:'40px'}} src={Parcelas} alt="parcelas"/><span>73 <br/>PARCELAS</span></div>
                <div className="d-flex justify-content-center"><img style={{width:'40px', height:'40px'}} src={ParcelasPlanas} alt="parcelas-planas"/><span>PARCELAS <br/>PLANAS</span></div>
                <div className="d-flex justify-content-center"><img style={{width:'40px', height:'40px'}} src={AguaLuz} alt="agua-luz"/><span>FACTIBILIDAD DE LUZ Y <br/>AGUA CORRIENTE</span></div>
                <div className="d-flex justify-content-center"><img style={{width:'40px', height:'40px'}} src={Camino} alt="camino"/><span>CAMINO <br/>ASFALTADO</span></div>
            </div>
        </div>
        
    </div>
  )
}

export default Proyecto