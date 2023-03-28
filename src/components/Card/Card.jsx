import React from 'react'
import { Link } from 'react-router-dom'

export const Card = (tittle, src, price, id) => {
    return (
        <>
                <div className='card'>
                    <h1>{tittle}</h1>
                    <img src={src} alt={tittle} />
                    <p>${price}</p>
                    <button className='cardButton'>Add item to cart</button>
                </div>
        </>
    )
}
