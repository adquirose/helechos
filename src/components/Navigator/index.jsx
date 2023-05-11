import { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import classNames from 'classnames';

function Navigator(args){
    const [isOpen, setIsOpen] = useState(false);
    const [colorNavbar, setColorNavbar] = useState('navbar-color py-5');
   
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
            document.documentElement.scrollTop > 320 ||
            document.body.scrollTop > 320
          ) {
            setColorNavbar('navbar-white py-2' )
          } else if (
            document.documentElement.scrollTop < 319 ||
            document.body.scrollTop < 319
          ) {
            setColorNavbar('navbar-color py-2 py-md-5')
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
                <NavbarToggler onClick={toggle} className='me-2 ms-auto' />
                <Collapse isOpen={isOpen} navbar>
                    <Nav id="navigator-nav" className="ms-auto" navbar>
                        <NavItem>
                            <NavLink onClick={toggle} data-number="1" href="#proyecto">PROYECTO</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={toggle} data-number="2" href="#masterplan">
                                MASTERPLAN360
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={toggle} data-number="3" href="#galeria">
                                GALERÍA
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={toggle} data-number="4" href="#ubicacion">
                                UBICACIÓN
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={toggle} data-number="5" href="#contacto">
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

