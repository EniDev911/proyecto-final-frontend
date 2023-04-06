import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppCtx';
import logo from "../assets/images/logo.png";

export default () => {

  const setActive = ({ isActive }) => (isActive ? "active" : "noactive");

  const {token, setToken, totalCart, cartItems} = useAppContext();
  return (
     <Navbar sticky='top' expand="lg" style={{background: '#9DC08B'}} className="shadow">
        <Container>
          <Navbar.Brand as={Link} >
            <img src={logo} alt="logo" 
            height="90" 
            onClick={()=> window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
            className="position-absolute d-none d-lg-block"
            style={{top:"10px", filter: "drop-shadow(3px 2px 5px #00000040)"}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto"/>
          <Navbar.Collapse id='navbar-nav'>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              {
                token ? <>
                <Nav.Link as={Link} to="/" onClick={
                  () => {
                    setToken(localStorage.removeItem("token"));
                  }
                }>Salir</Nav.Link>
                <Nav.Link as={NavLink} to="/details-shopping">Mis compras</Nav.Link>
                </>
                : <>
                <Nav.Link as={NavLink} to="/login">Iniciar sesión</Nav.Link>
                <Nav.Link as={NavLink} to="/signup">Registrarse</Nav.Link>
                </>
              }
              <Nav.Link as={NavLink} to="/cart">Categorías</Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <i class="fa-solid fa-cart-shopping fs-3"></i>
                
              </Nav.Link>{" "}
               {/* <span>$ {totalCart(cartItems)}</span> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
     </Navbar>
  )
}

