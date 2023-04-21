import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore'




export const Products = () => {

    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const stock = collection(db, 'stock');
        getDocs(stock)
            .then(stock => {
                if (stock.lenght === 0) {
                    console.log('no products')
                }

                setStockData(stock.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            }).catch(err => console.log(err))

    }, []);

    console.log(stockData)










    return stockData === undefined ? (
        <div>Aguarde por favor</div>) :
        (

            <div className='background'>

                {
                    stockData.map((e) => (

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


