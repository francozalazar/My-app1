import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

function ItemList({productos}) {
    return (
        <div className='contenedorProductos'>
        {productos.map((prod)=>{<Item prod={prod} key={prod.id}/>})}
       
        
        
        </div>
    )
}

export default ItemList