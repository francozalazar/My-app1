import React from 'react'
import {Button }  from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import {Link} from 'react-router-dom'
import getFetch from '../helpers/getFetch'
import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer'
import {ItemDetail} from '../ItemDetail/ItemDetail'

function Item({prod}) {
    return (
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={prod.imagen} />
    <Card.Body>
      <Card.Title>{prod.nombre}</Card.Title>
      <Card.Text>$
    {prod.precio}
      </Card.Text>
      {/* <Button variant="info" ><Link to={id}>Ver mas</Link></Button> */}
      <Link className="text-black" to={`/React/item/${prod.id}`}>Ver producto</Link>
    </Card.Body>
  </Card>

 
)}

export default Item