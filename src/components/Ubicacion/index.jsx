/* eslint-disable no-unused-vars */
import { useState, useCallback} from 'react'
import { Container, Row } from 'reactstrap'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Title from '../Title'

  function MyMap(){
    const center={ lat:-34.612935, lng: -71.135840 }
    const position = { lat: -34.612935, lng: -71.135840 }
    
    const containerStyle = {
      height: '550px',
      width:'100%',
      overflow:'hidden',
      marginTop:'40px'
    };
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY
      
    })
  
    const [map, setMap] = useState(null)
  
    const onLoad = useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);  
      
      setMap(map)
    }, [])
  
    const onUnmount = useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          mapTypeId="satellite"
          zoom={17}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <Marker position={position}/>
        </GoogleMap>
    ) : <></>
  }
function Ubicacion() {
  return (
    <div id="ubicacion" className="section bg-azul cd-section">
        <Container>
            <Row className="d-flex justify-content-center">
                <Title text="UBICACIÓN"/>
            </Row>
            <Row className='py-4'>
                <MyMap/>
            </Row>
            <div className='d-flex justify-content-center pb-5'>
                <button>DESCARGAR PLANO</button>
            </div>
        </Container>
    </div>
  )
}

export default Ubicacion