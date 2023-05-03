import Navigator from "./components/Navigator"
import Header from "./components/Header"
import Proyecto from "./components/Proyecto"
import Masterplan from "./components/Masterplan"
import Galeria from "./components/Galeria"
import Ubicacion from "./components/Ubicacion"
import Contacto from "./components/Contacto"
import { BrowserRouter } from "react-router-dom"
function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Navigator/>
      <Proyecto/>
      <Masterplan/>
      <Galeria/>
      <Ubicacion/>
      <Contacto/>
    </BrowserRouter>
    
  )
}
export default App