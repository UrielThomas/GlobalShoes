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
                        title="Category"
                        menuVariant="dark">
                        <NavDropdown.Item><Link to="/CategoryPage/men's clothing">Men's clothing</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/CategoryPage/jewelery">Jewelery</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/CategoryPage/electronics">Electronics</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/CategoryPage/women's clothing">Women's clothing</Link></NavDropdown.Item>
                    </NavDropdown>
                </li>
                <li><Link to="/Products">Products</Link></li>
                <li><Link to='/new-product'>New Product</Link></li>

            </ul>
        </div>
    )
}
