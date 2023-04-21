import React from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore, collection, addDoc } from 'firebase/firestore'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const DetailedProduct = () => {









  const { itemId } = useParams()
  const [itemData, setItemData] = React.useState({})
  React.useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, 'stock', itemId);
    getDoc(docRef)
      .then((item) => {
        if (!item.exists()) {
          console.log('error,no product')
        }
        setItemData({ id: item.id, ...item.data() })
      })
      .catch((err) => console.log('err'));
  }, [itemId])

  console.log(itemData)



  const submHandler = (e) => {
    e.preventDefault();
    const checkoutItem = itemData
    const db = getFirestore();
    const checkoutCollection = collection(db, 'checkout')
    addDoc(checkoutCollection, checkoutItem).then(({ id }) => console.log(id))
  }




  return (
    <div className='background'>

      <Card style={{ width: '20rem' }} className='container'>

        <Card.Img variant="top" src={itemData.image} alt={itemData.title} className="ccardImage" />
        <Card.Body className='cardB'>
          <Card.Title className='cardTitle'>{itemData.title}</Card.Title>

          <Card.Text>{itemData.description}</Card.Text>
          <Card.Text>${itemData.price}</Card.Text>
          <Button variant="primary" onClick={submHandler}>Add item to cart</Button>
        </Card.Body>
      </Card>
    </div>

  )
}
