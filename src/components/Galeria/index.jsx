import { Container, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Title from '../Title'
// import Img1 from '../../assets/images/galeria/1.jpg'
// import Img2 from '../../assets/images/galeria/2.jpg'
// import Img3 from '../../assets/images/galeria/3.jpg'
import 'photoswipe/dist/photoswipe.css'

const MyGallery = () => (
  <Gallery>
    <div className='gallery-container'>
    <Item
      original="https://www.lanube360.com/temporales-helechos/images/galeria/1.jpg"
      thumbnail="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/1.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/1.jpg" />
      )}
    </Item>
    <Item
      original="https://www.lanube360.com/temporales-helechos/images/galeria/2.jpg"
      thumbnail="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/2.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/2.jpg" />
      )}
    </Item>
    <Item
      original="https://www.lanube360.com/temporales-helechos/images/galeria/3.jpg"
      thumbnail="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/3.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/3.jpg" />
      )}
    </Item>
    <Item
      original="https://www.lanube360.com/temporales-helechos/images/galeria/4.jpg"
      thumbnail="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/4.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/4.jpg" />
      )}
    </Item>
    <Item
      original="https://www.lanube360.com/temporales-helechos/images/galeria/5.jpg"
      thumbnail="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/5.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/5.jpg" />
      )}
    </Item>
    <Item
      original="https://www.lanube360.com/temporales-helechos/images/galeria/6.jpg"
      thumbnail="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/6.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/6.jpg" />
      )}
    </Item>
    <Item
      original="https://www.lanube360.com/temporales-helechos/images/galeria/8.jpg"
      thumbnail="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/8.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/8.jpg" />
      )}
    </Item>
    <Item
      original="https://www.lanube360.com/temporales-helechos/images/galeria/9.jpg"
      thumbnail="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/9.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/9.jpg" />
      )}
    </Item>
    <Item
      original="https://www.lanube360.com/temporales-helechos/images/galeria/10.jpg"
      thumbnail="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/10.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/10.jpg" />
      )}
    </Item>
    <Item
      original="https://www.lanube360.com/temporales-helechos/images/galeria/11.jpg"
      thumbnail="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/11.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/11.jpg" />
      )}
    </Item>
    <Item
      original="https://www.lanube360.com/temporales-helechos/images/galeria/12.jpg"
      thumbnail="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/12.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/12.jpg" />
      )}
    </Item>
    <Item
      original="https://www.lanube360.com/temporales-helechos/images/galeria/13.jpg"
      thumbnail="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/13.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="https://www.lanube360.com/temporales-helechos/images/galeria/thumb/1.jpg" />
      )}
    </Item>
    </div>
  </Gallery>
)

function Galeria() {
  return (
    <div id="galeria" className='section cd-section'>
        <Container>
            <Row className="d-flex justify-content-center">
                <Title text="GALERIA DE FOTOS"/>
            </Row>
            <Row className="d-flex justify-content-center">
              <MyGallery/>
            </Row>
        </Container>
    </div>
  )
}

export default Galeria