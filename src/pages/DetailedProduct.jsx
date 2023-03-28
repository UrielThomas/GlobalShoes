import React from 'react'
import { useParams } from 'react-router-dom'
import { Products } from './Products'


export const DetailedProduct = () => {
  const { itemId } = useParams
  const id = itemId - 1;
  const item = Products;




  return (
    <div>
      <div className='DCard'>
        <h1 className='DcardTittle'>{item[itemId].title}</h1>
        <img src={item[itemId].image} alt={item[itemId].title} className="DcardImage" />
        <p className='DcardPrice'>${item[itemId].price}</p>
        <button className='DcardButton'>Add item to cart</button>
      </div>
    </div>
  )
}
