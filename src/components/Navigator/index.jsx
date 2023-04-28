import { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
const PATH_LOGO= 'https://www.lanube360.com/temp-img-helechos/images/logo.png'
function Navigator(args){
    const [isOpen, setIsOpen] = useState(false);
    const [logoVisible, setLogoVisible] = useState(true)
    const opt = ()=> {
        if(logoVisible){
            return 'logo-grande'
            
        }else{
            return 'logo-chico'
            
        }
    }
    const toggle = () => setIsOpen(!isOpen);
    useEffect(() => {
        const updateNavbarColor = () => {
          if (
            document.documentElement.scrollTop > 360 ||
            document.body.scrollTop > 360
          ) {
            setLogoVisible(false);
          } else if (
            document.documentElement.scrollTop < 359 ||
            document.body.scrollTop < 359
          ) {
            setLogoVisible(true);
          }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
          window.removeEventListener("scroll", updateNavbarColor);
        };
      });
    return(
        <div id="navigator">
            <Navbar expand="md" fixed="top" container={true} {...args}>
                <NavbarBrand href="/"><img className={opt()} src={PATH_LOGO} alt="logo-helechos"/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink href="#proyecto">PROYECTO</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#masterplan">
                                MASTERPLAN360
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#galeria">
                                GALERÍA
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#ubicacion">
                                UBICACIÓN
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contacto">
                                CONTACTO
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
  );
}
export default Navigator

