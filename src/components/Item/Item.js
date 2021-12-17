import React from 'react'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
function Item({prod}) {
    return (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={prod.imagen} />
    <Card.Body>
      <Card.Title>{prod.nombre}</Card.Title>
      <Card.Text>$
    {prod.precio}
      </Card.Text>
      {/* <Button variant="info" ><Link to={id}>Ver mas</Link></Button> */}
      <Link className="text-black" to={`/detalle/${prod.id}`}>Ver producto</Link>
    </Card.Body>
  </Card>
  </>
 
)}

export default Item