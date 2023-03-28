import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppCtx';

export default () => {

  const {token, setToken} = useAppContext();
  return (
     <Navbar expand="lg" style={{background: '#9DC08B'}}>
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto"/>
          <Navbar.Collapse id='navbar-nav'>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {
                token != ""

                ? <>
                <Nav.Link as={Link} to="/" onClick={
                  setToken("")
                }>Salir</Nav.Link>
                </>
                : <>
                <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
                <Nav.Link as={Link} to="/signup">Registrarse</Nav.Link>
                </>
              }
              <Nav.Link as={Link} to="/categorias">Categorías</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
     </Navbar>
  )
}

