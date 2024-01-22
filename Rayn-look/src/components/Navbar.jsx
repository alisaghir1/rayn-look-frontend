import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import i20 from '../assets/images/rayn-look-logo1.png'
import { FaShoppingCart } from 'react-icons/fa';

const Navigation = () => {
  return (
    <Navbar expand="lg"  className="px-5 navbar">
      <Navbar.Brand as={Link} to="/" className='d-flex justify-content-baseline'>
        <img src={i20} alt="" className="custom-logo-class" />
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
          <NavLink as={Link} to="/cart" className="nav-link text-warning1">
        <FaShoppingCart />
    </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
