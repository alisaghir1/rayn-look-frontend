import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import i20 from '../assets/images/logo1.png'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart);

  const handleNavigate = () => {
    navigate('/')
  }
  const handleCartNavigate = () => {
    navigate('/Cart')
  }
  
  const totalQuantity = cartItems.length;

  return (
    <Navbar expand="lg"  className="px-5 navbar">
      <Navbar.Brand as={Link} to="/" className='d-flex justify-content-baseline'>
        <img src={i20} alt="rayn-look-logo" className="custom-logo-class" onClick={handleNavigate}/>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className=' justify-self-end'/>
      <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end">
        <Nav>
          <NavLink as={Link} to="/" className="nav-link text-warning1" style={{fontSize: '1.1rem'}}>
            Home
          </NavLink>
          <NavLink as={Link} to="/products" className="nav-link text-warning1" style={{fontSize: '1.1rem'}}>
            Our Products
          </NavLink>
          <NavLink as={Link} to="/feedbacks" className="nav-link text-warning1" style={{fontSize: '1.1rem'}}>
            Give us a feedback
          </NavLink>
          <NavLink as={Link} to="/privacy-policy" className="nav-link text-warning1" style={{fontSize: '1.1rem'}}>
            Privacy Policy
          </NavLink>
          <NavLink as={Link} to="/cart" className="nav-link " style={{fontSize: '1.1rem'}}>
        <FaShoppingCart className='text-warning3'  onClick={handleCartNavigate} /> 
         <span className="cart-counter w-100" style={{borderRadius: '100%', backgroundColor: '#b69f2c', padding: '0.2em 0.5em',margin: '0.2em', fontSize:'1rem'}} >{totalQuantity}</span>
    </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
