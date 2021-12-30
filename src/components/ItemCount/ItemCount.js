import { useCartContext } from "../../context/CartContext";
import './ItemCount.css';

const ItemCount = ({ stock, onAdd }) => {
    const {count, setCount} = useCartContext()

    const addCounter = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            alert('No queda más stock de este producto.');
        }
    }
    const substractCounter = () => {
        if (count <= stock && count > 1) {
            setCount(count - 1)
        }
        else {
            setCount(0);
        }
    }
    return (
        <>
    <button className='btn btn-primary mx-2' onClick={addCounter}>+</button>
    <p>{count}</p>
    <button className='btn btn-primary mx-2' onClick={substractCounter}>-</button>
    <button className='btn btn-primary mx-3' onClick={onAdd}>Agregar al carrito</button>
</>
   )
} 


export default ItemCount  














// function ItemCount({stock, initial}) {


//     const [value, setValue] = useState(initial)

//     const handleSuma = (valor)=>{
//         value < stock ? setValue(previo => previo+ valor): console.log('compra maxima posible')
//     }

//     const handleResta =(valor)=>{
//         value > initial ? setValue(estadoPrevio => estadoPrevio - valor) : console.log('compra minima posible')
//     }


//     const onAdd = () => {
//         const message = `Agregaste ${value} producto`;
//         value === 1 ? alert(message) : alert(`${message}s`);
//         setValue(initial)
//       };

//     return (
//         <div>
//         <p>{value}</p>    
        
//         <div><button className="button-count" onClick={()=>handleSuma(1)}>+</button>
//         <button className="button-count" onClick={()=>handleResta(1)}>-</button>
//         </div>
//         <button className="button-count" onClick={()=>onAdd(value)}>Agregar al carrito</button>
        
//         </div>
//     )
// }











































// import { useState } from "react";

// export default function ItemCount(props) {

//     const [Count, setCount] = useState(0);

//     const counterAdd = () => {
//         if (Count < props.stock) {
//             setCount(Count + 1)
//         } else {
//             alert('No hay suficiente stock.');
//         }
//     }

//     const counterSubstract = () => {
//         if (Count > 1) {
//             setCount(Count - 1)
//         }
//         else {
//             setCount(0);
//         }
//     }

//     const addToCart = () => {
//         alert('Has añadido el producto correctamente');
//     }
//     return (
//         <>
//             <button className='btn btn-info mx-2' onClick={counterAdd}>+</button>
//             <p>{Count}</p>
//             <button className='btn btn-info mx-2' onClick={counterSubstract}>-</button>

//             <div className='mt-2'> 
//                 <button className='btn btn-info mx-3' onClick={addToCart}>Agregar al carrito</button>
//              </div>
//         </>
//     ) 
// }