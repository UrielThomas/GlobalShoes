import React from 'react'
import { CartComponent } from '../CartComponent/CartComponent';
import { CategoriesComponent } from './CategoriesComponent';
import { Link } from "react-router-dom";




export const NavBarComponent = () => {
    return (
        <nav>
            <div className='brand'><Link to="/">GlobalStore</Link></div>
            <CategoriesComponent/>
            <div className='cart'>
                <CartComponent />
            </div>
        </nav>
    );
};

