import {createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = ()=>useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito (item){
       
        const indice = cartList.findIndex(i=> i.id === item.id) 

        if(indice >-1){
            
            const cantPrevia = cartList[indice].cantidad
            cartList.splice(indice,1)
            setCartList([...cartList, {...item, cantidad:item.cantidad + cantPrevia}])
        }else {
            
            setCartList([...cartList, item])
        }
    } 
    function borrarCarrito(){
        setCartList([])
    }

    function borrarItem(id){
        
        const cartSinItem = cartList.filter(prodEliminar=>prodEliminar.id !== id) 
        setCartList(cartSinItem)
        
        
        
    }

    return (
    <CartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        borrarCarrito,
        borrarItem
    }}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider