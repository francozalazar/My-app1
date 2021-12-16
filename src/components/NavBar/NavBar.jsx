 import React from  "react"
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button, } from 'react-bootstrap'
import  CartWidget  from '../NavBar/CartWidget'
import { Link } from 'react-router-dom'







export const NavBar = () => {
  return (
      <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
              <Navbar.Brand href="#">Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                  >
                      <Nav.Link href="#">Catálogo</Nav.Link>
                      <NavDropdown title="Más" id="navbarScrollingDropdown">
                          <NavDropdown.Item href="#">Metodos de pago</NavDropdown.Item>
                          <NavDropdown.Item href="#">Entregas</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#">
                              Sobre nosotros
                          </NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                  <Form className="d-flex container">
                      <FormControl
                          type="search"
                          placeholder="Buscar modelos..."
                          className="me-2"
                          aria-label="Search"
                      />
                      <Button variant="outline-info">Buscar</Button>
                  </Form>
                  <Nav.Link>
                    <CartWidget/>
                  </Nav.Link>
              </Navbar.Collapse>
          </Container>
      </Navbar>

  )
}

