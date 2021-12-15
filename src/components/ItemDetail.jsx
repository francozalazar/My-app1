import React from 'react';
import ItemCount from './ItemCount';



function ItemDetail({item}) {
  
    
    return (
        <div className='divDetail' key={item.id}>
            <p> Producto: {item.nombre}</p>
            <p> Descripcion: {item.descripcion}</p>
            <p>
                 <img className='imgDetail' src={item.imagen} alt={item.alt} />
            </p>
            <p>precio: ${item.precio}</p>
             <p> <ItemCount  stock ={10} initial={1} />
            </p>
           
        </div>
    )
}

export default ItemDetail


