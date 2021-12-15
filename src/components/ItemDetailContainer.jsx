import React from 'react'
import { useState, useEffect } from 'react'
 import {getFetch} from './getFetch.js'
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    
    
     
    useEffect(()=>{
        getFetch
        .then(resp =>setItem(resp.find((prod)=>prod.id===3)))
        .catch(err =>console.log(err))
        .finally(()=>setLoading(false))
        
    },[])


    return (
        <div>
            <h2>Esto es ItemDetailContainer</h2>
            {loading ? <h3>En espera</h3>
            :  <ItemDetail item={item}/>}
          
        </div>
    )
}

export default ItemDetailContainer