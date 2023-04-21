import React from 'react'
import cart from './cart.jpg'
import { Link } from 'react-router-dom';


export const CartComponent = () => {
  return (
    <div>
      <div><p style={{position:"fixed",top:"2px",fontSize:"15Apx"}}>1</p></div>
      <Link to='/checkout'><img src={cart} style={{height:"30px",width:"30px"}} alt="" /></Link>
      

    </div>
  )
}
