import React from "react"
import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return (
        <>
            <h1 className="text-info d-flex justify-content-center align-items-center">{props.productos}</h1>
            <ItemCount/>
        </>
    
    )
}
export default ItemListContainer