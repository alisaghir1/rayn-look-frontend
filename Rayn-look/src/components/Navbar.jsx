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
        <img src={i20} alt="" className="custom-logo-class" onClick={handleNavigate}/>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className=' justify-self-end'/>
      <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end">
        <Nav>
          <NavLink as={Link} to="/" className="nav-link text-warning1">
            Home
          </NavLink>
          <NavLink as={Link} to="/products" className="nav-link text-warning1">
            Our Products
          </NavLink>
          <NavLink as={Link} to="/reviews" className="nav-link text-warning1">
            Give us a review
          </NavLink>
          <NavLink as={Link} to="/privacy-policy" className="nav-link text-warning1">
            Privacy Policy
          </NavLink>
          <NavLink as={Link} to="/cart" className="nav-link text-warning3">
        <FaShoppingCart  onClick={handleCartNavigate} /> | 
         <span className="cart-counter"> {totalQuantity}</span>
    </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
