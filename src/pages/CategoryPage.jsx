import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Products } from './Products'



export const CategoryPage = () => {
    const {catId} = useParams();
    const catProd = Products



    let filter=[]
    for(let i=0;i<catProd.length;i++){
        if(catProd[i].category ===catId){
            filter.push(catProd[i])
        }
    }
    return (
        <div className='background'>
        {
            filter.map((e) => (

                <div className='container'>
                    
                        <div className='card'>
                            <h1 className='cardTitle'>{e.title}</h1>
                            <img src={e.image} alt={e.title} className="cardImage" />
                            <p className='cardPrice'>${e.price}</p>
                            <Link to={`/products/${e.id}`}><button>Agregar al carro</button></Link>
                        </div>
                    

                </div>
            ))
        }
        </div>
    )
}
