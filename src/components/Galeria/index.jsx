import { Container, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Title from '../Title'
import 'photoswipe/dist/photoswipe.css'

const MyGallery = () => (
  <Gallery>
    <div className='gallery-container'>
    <Item
      original="../../assets/images/galeria/1.jpg"
      thumbnail="../../assets/images/galeria/thumb/1.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="../../assets/images/galeria/thumb/1.jpg" />
      )}
    </Item>
    <Item
      original="../../assets/images/galeria/2.jpg"
      thumbnail="../../assets/images/galeria/thumb/2.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="../../assets/images/galeria/thumb/2.jpg" />
      )}
    </Item>
    <Item
      original="../../assets/images/galeria/3.jpg"
      thumbnail="../../assets/images/galeria/thumb/3.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="../../assets/images/galeria/thumb/3.jpg" />
      )}
    </Item>
    <Item
      original="../../assets/images/galeria/4.jpg"
      thumbnail="../../assets/images/galeria/thumb/4.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="../../assets/images/galeria/thumb/4.jpg" />
      )}
    </Item>
    <Item
      original="../../assets/images/galeria/5.jpg"
      thumbnail="../../assets/images/galeria/thumb/5.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="../../assets/images/galeria/thumb/5.jpg" />
      )}
    </Item>
    <Item
      original="../../assets/images/galeria/6.jpg"
      thumbnail="../../assets/images/galeria/thumb/6.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="../../assets/images/galeria/thumb/6.jpg" />
      )}
    </Item>
    <Item
      original="../../assets/images/galeria/8.jpg"
      thumbnail="../../assets/images/galeria/thumb/8.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="../../assets/images/galeria/thumb/8.jpg" />
      )}
    </Item>
    <Item
      original="../../assets/images/galeria/9.jpg"
      thumbnail="../../assets/images/galeria/thumb/9.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="../../assets/images/galeria/thumb/9.jpg" />
      )}
    </Item>
    <Item
      original="../../assets/images/galeria/10.jpg"
      thumbnail="../../assets/images/galeria/thumb/10.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="../../assets/images/galeria/thumb/10.jpg" />
      )}
    </Item>
    <Item
      original="../../assets/images/galeria/11.jpg"
      thumbnail="../../assets/images/galeria/thumb/11.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="../../assets/images/galeria/thumb/11.jpg" />
      )}
    </Item>
    <Item
      original="../../assets/images/galeria/12.jpg"
      thumbnail="../../assets/images/galeria/thumb/12.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="../../assets/images/galeria/thumb/12.jpg" />
      )}
    </Item>
    <Item
      original="../../assets/images/galeria/13.jpg"
      thumbnail="../../assets/images/galeria/thumb/13.jpg"
      width="1024"
      height="576"
    >
      {({ ref, open }) => (
        <img className="image-gallery" ref={ref} onClick={open} src="../../assets/images/galeria/thumb/13.jpg" />
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