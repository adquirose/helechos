import { Container, Row } from 'reactstrap'
import Title from '../Title'

function Masterplan() {
  return (
    <div id="masterplan" className='section cd-section'>
        <Container>
            <Row className="d-flex justify-content-center">
                <Title text="MASTERPLAN 360"/>
            </Row>
            <Row>
                <iframe src="https://www.lanube360.com/bajos-los-helechos/" title="masterplan"></iframe>
            </Row>
        </Container>
    </div>
  )
}

export default Masterplan