import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';






export const Checkout = () => {
    const [checkoutData, setCheckoutData] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const checkout = collection(db, 'checkout');
        getDocs(checkout)
            .then(checkout => {
                if (checkout.lenght === 0) {
                    console.log('no products')
                }

                setCheckoutData(checkout.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            }).catch(err => console.log(err))

    }, []);

    console.log(checkoutData)










    return checkoutData === undefined ? (
        <div>Aguarde por favor</div>) :
        (

            <div className='background'>

                {
                    checkoutData.map((e) => (

                        
                        <Card className='container'>

                                <Card.Img variant="top" src={e.image} alt={e.title} className="cardImage" />
                                <Card.Body className='cardB'>
                                    <Card.Title className='cardTitle'>{e.title}</Card.Title>

                                    <Card.Text>{e.description}</Card.Text>
                                    <Card.Text>${e.price}</Card.Text>
                                    <Button variant="primary">Delete item</Button>
                                </Card.Body>
                            </Card>

                        



                       




                    ))
                }

                <div className='checkout'><Button>Checkout!</Button></div>

            </div >


        )



}
