import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';





export const Products = () => {

    const [stock, setStock] = useState([]);

    useEffect(() => {
        getStock();

    }, []);

    const getStock = async () => {
        const response = await fetch('https://fakestoreapi.com/products?limit=6')
        const data = await response.json()
        setStock(data)
        console.log(stock)
    }
    const { productId } = useParams();


console.log(productId);

    return Products===undefined?(
        <div>Aguarde por favor</div>):
        (
        <div className='background'>
        {
            stock.map((e) => (

                <div className='container'>
                    <Link to={`/products/${e.id}`}>
                        <div className='card'>
                            <h1 className='cardTitle'>{e.title}</h1>
                            <img src={e.image} alt={e.title} className="cardImage" />
                            <p className='cardPrice'>${e.price}</p>
                        </div>
                    </Link>

                </div>
            ))
        }
        </div>

    )


}


