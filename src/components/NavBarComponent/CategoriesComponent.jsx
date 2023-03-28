import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export const CategoriesComponent = () => {
    return (
        <div className='list'>
            <ul>

                <li>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Catalogo"
                        menuVariant="dark">
                        <NavDropdown.Item><Link to="/Caballero">Caballero</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/Dama">Dama</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/Ninos">Ninos</Link></NavDropdown.Item>
                    </NavDropdown>
                </li>
                <li><a href="#">Saldos</a></li>
                <li><a href="#">Contacto</a></li>

            </ul>
        </div>
    )
}
