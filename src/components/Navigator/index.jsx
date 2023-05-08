import { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import classNames from 'classnames';
// const PATH_LOGO= 'https://www.lanube360.com/temp-img-helechos/images/logo.png'
import LogoColor from '../../assets/images/logo.png'
import LogoBlanco from '../../assets/images/logo-blanco.png'

function Navigator(args){
    const [isOpen, setIsOpen] = useState(false);
    const [colorNavbar, setColorNavbar] = useState('navbar-color');
    const [logo, setLogo] = useState(LogoColor)
    const [sizeLogo, setSizeLogo] = useState('logo-3x')

    const toggle = () => setIsOpen(!isOpen);
    useEffect(() => {
        const updateView = () => {
            var contentSections = document.getElementsByClassName("cd-section");
            var navigationItems = document
              .getElementById("navigator-nav")
              .getElementsByTagName("a");
            
            for (let i = 0; i < contentSections.length; i++) {
              var activeSection =
                parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
              if (
                contentSections[i].offsetTop - window.innerHeight / 2 <
                  window.pageYOffset &&
                contentSections[i].offsetTop +
                  contentSections[i].scrollHeight -
                  window.innerHeight / 2 >
                  window.pageYOffset
              ) {
                navigationItems[activeSection].classList.add("activo");
              } else {
                navigationItems[activeSection].classList.remove("activo");
              }
            }
          };
      
          window.addEventListener("scroll", updateView);
          return function cleanup() {
            // document.body.classList.remove("presentation-page");
            window.removeEventListener("scroll", updateView);
          };
    });
    
    useEffect(() => {
        const updateNavbarColor = () => {
          if (
            document.documentElement.scrollTop > 100 ||
            document.body.scrollTop > 100
          ) {
            setLogo(LogoBlanco);
            setColorNavbar('navbar-white')
            setSizeLogo('logo-1x')

          } else if (
            document.documentElement.scrollTop < 99 ||
            document.body.scrollTop < 99
          ) {
            setLogo(LogoColor);
            setColorNavbar('navbar-color')
            setSizeLogo('logo-3x')
          }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
          window.removeEventListener("scroll", updateNavbarColor);
        };
      });
    return(
        <div id="navigator">
            <Navbar className={classNames(colorNavbar)} expand="lg" fixed="top" color={colorNavbar} container={true} {...args}>
                <NavbarBrand href="/"><img className={classNames(sizeLogo)} src={logo} alt="logo-helechos"/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav id="navigator-nav" className="ms-auto" navbar>
                        <NavItem>
                            <NavLink data-number="1" href="#proyecto">PROYECTO</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink data-number="2" href="#masterplan">
                                MASTERPLAN360
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink data-number="3" href="#galeria">
                                GALERÍA
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink data-number="4" href="#ubicacion">
                                UBICACIÓN
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink data-number="5" href="#contacto">
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

