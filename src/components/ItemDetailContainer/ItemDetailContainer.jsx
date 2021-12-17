import React from 'react'
import { useState, useEffect } from 'react'
 import {getFetch} from '../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'


function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {id}=useParams()
    useEffect(() => {
        getFetch
            .then((productFound) => {
                setItem(productFound.find(prod => prod.id === parseInt(id)))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id])
        

     
    // useEffect(()=>{
    //     getFetch
    //     .then(resp =>setItem(resp.find(producto => producto.id === parseInt(id))))
    //     .catch(err =>console.log(err))
    //     .finally(()=>setLoading(false))
        
    // },[id])


    return (
        <div>
            <h2>Esto es ItemDetailContainer</h2>
            {loading ? <h3>En espera</h3>
            :  <ItemDetail item={item}/>}
          
        </div>
    )
}

export default ItemDetailContainer