import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartComponent} from '../CartComponent/CartComponent';




export const NavBarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Global Shoes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Saldos</Nav.Link>
                        <NavDropdown title="Catalogo" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Caballeros</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Damas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
                <CartComponent/>
            </Container>
        </Navbar>
    );
};

