import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

export default () => {
  return (
     <Navbar expand="lg">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse id='navbar-nav'>
            <Nav className="ms-auto text-uppercase">

            </Nav>
          </Navbar.Collapse>
        </Container>
     </Navbar>
  )
}

