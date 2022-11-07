import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container> 
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/add-product">Add-Product</Nav.Link>
            <Nav.Link as={Link} to="/manage-product">Manage-Product</Nav.Link>
          </Nav> 
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
