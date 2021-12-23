import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

function ItemDetail({item}) {
    const [goCart, setGoCart] = React.useState(false)
    const {cartList, agregarAlCarrito}=useCartContext()

    const onAdd = (cantidad) => {
        console.log(cantidad)
        setGoCart(true)
    }
    
    return (
        <div className='divDetail' key={item.id}>
            <p> Producto: {item.nombre}</p>
            <p> Descripcion: {item.descripcion}</p>
            <p>
                 <img className='imgDetail' src={item.imagen} alt={item.alt} />
            </p>
            <p>precio: ${item.precio}</p>
            {!goCart ? <ItemCount  stock ={10} initial={1} onAdd={onAdd} /> : <Link className='botonCarroDetail' to="/carro">Ir al carrito</Link> }
            
           
        </div>
    )
}

export default ItemDetail


