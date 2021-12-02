import React from "react"

const ItemListContainer = (props) => {
    return (
        <>
            <h1 className="text-primary d-flex justify-content-center align-items-center">{props.productos}</h1>
        </>
    )
}
export default ItemListContainer