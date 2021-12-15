import React from "react";
import { useState, useEffect } from "react";
import { getFetch } from "./getFetch";


function ItemListContainer({ saludo }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch.then((resp) => setProducts(resp))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
  }, []);

 
  
  return (
    <div>
      <h1>{saludo}</h1>
        {loading ? <h2>Cargando...</h2> : <h2>Lista de productos</h2>}  


          {products.map((product) => 
          <li key={product.id} className="product" id={product.id}>
          <div className="imagen-product">
            <img src={product.imagen} alt="imagen" />
          </div>
          <p className="nombre">${product.nombre}</p>
          <p className="precio">${product.precioLabel}</p>
          <button className="btn-info rounded-pill">AÑADIR AL CARRO</button>
        </li>)};
          
                   
    </div>
  );
}


export default ItemListContainer;
    
