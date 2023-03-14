import React from 'react'
import cart from './cart.jpg'

export const CartComponent = () => {
  return (
    <div>
      <div><p style={{position:"fixed",top:"2px",fontSize:"15Apx"}}>1</p></div>
      <img src={cart} style={{height:"30px",width:"30px"}} alt="" />
      

    </div>
  )
}
