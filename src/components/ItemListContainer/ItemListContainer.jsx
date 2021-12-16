import React from "react";
import { useState, useEffect } from 'react'
import {getFetch} from '../helpers/getFetch'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

function ItemListContainer({greeting}) {
    const [productos, setProductos]=useState([])
    const [loading, setLoading] = useState(true)

    const{idCategoria}=useParams()
    useEffect(()=>{

        if (idCategoria) {
            getFetch
            .then(resp =>setProductos(resp.filter(producto => producto.marca === idCategoria)))
            .catch(err =>console.log(err))
            .finally(()=>setLoading(false))
        } else {
            
            getFetch
            .then(resp =>setProductos(resp))
            .catch(err =>console.log(err))
            .finally(()=>setLoading(false))
        }


    },[idCategoria])
    console.log(idCategoria);
    return (
        <div>
            <h1>{greeting}</h1>
            
            {loading ? <h2>Cargando...</h2>
            : <ItemList productos={productos} />
            }
           
        </div>
    )
}

export default ItemListContainer
    
