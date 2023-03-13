import React from 'react'

export const ItemListComponent = (props) => {
    return (
        <div className='itemListContainer' style={{textAlign: "center",fontSize: "30px"}}>
            <p className='item'>{props.item}</p>
            <p className='anotherItem'>{props.anotherItem}</p>
            

        </div>
    )
}
