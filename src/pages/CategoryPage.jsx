import React, { useState, useEffect } from 'react'
import { Link, useParams, } from 'react-router-dom'
import { getDocs, getFirestore, collection } from 'firebase/firestore'
import Card from 'react-bootstrap/Card';









export const CategoryPage = () => {



    const paramCategory = useParams()
    console.log(paramCategory);

    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        console.log(paramCategory);
        const stock = collection(db, 'stock');
        getDocs(stock)
            .then(stock => {
                if (stock.lenght === 0) {
                    console.log('no products')
                }

                setStockData(stock.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            }).catch(err => console.log(err))

    }, []);


    const filtered = []
    stockData.forEach(e => {
        console.log(e.category);
        if (e.category === paramCategory.category)
            filtered.push(e);
    });


    console.log(filtered);


    return (
        <div className='background'>
            {
                filtered.map((e) => (

                    <div className='CBackground'>
                        <div className='CContainer'>
                        <Link to={`/products/${e.id}`}>
                            <Card style={{ width: '20rem' }}>

                                <Card.Img variant="top" src={e.image} alt={e.title} className="CcardImage" />
                                <Card.Body className='CcardB'>
                                    <Card.Title className='CcardTitle'>{e.title}</Card.Title>

                                    <Card.Text className='Ctext'>{e.description}</Card.Text>
                                    <Card.Text className='Ctext'>${e.price}</Card.Text>
                                </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
