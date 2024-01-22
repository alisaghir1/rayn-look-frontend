import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import i20 from '../assets/images/20.jpeg'
import i21 from '../assets/images/24.jpeg'
import i22 from '../assets/images/25.jpeg'
import { FaPlane } from 'react-icons/fa'; // Plane icon from Font Awesome
import { IoMedalOutline } from 'react-icons/io5'; // Medal icon from Ionicons
import ReactCountryFlag from "react-country-flag";
import useProductsHook from '../hooks/useProductsHook'


const Home = () => {
  const products = useProductsHook()
    


 return (
  <div className="container-fluid p-4">
    <div className="row">
      {/* Left side - Large Image */}
      <div className="col-lg-8 mb-5" style={{position: 'relative'}}>
        <img
          src={i20}
          alt="Large Image"
          className="img-fluid rounded"
        />
        <div style={{position: 'absolute', top: '30%', left: '10%'}}>
          <p style={{fontSize: '2.5rem'}} className='fw-bold text-white custom-text-home w-75'>Lebanon's Most Comfortable Lenses</p>
        <button className='btn btn-warning bg-warning1 bg-md-none p-3' >SHOP NOW</button>
        </div>
      </div>

      {/* Right side - Two Smaller Images */}
      <div className="col-lg-4 d-flex flex-column justify-content-between mb-5 ">
        <div className="mb-5" style={{position: 'relative'}}>
          <img
             src={i21}
            alt="Small Image 1"
            className="img-fluid w-100 rounded custom-small-image"
            style={{ height: '350px',}}
          />
                  <div style={{position: 'absolute', top: '40%', left: '10%'}}>
          <p style={{fontSize: '1.5rem'}} className='fw-bold text-white text-larger w-100'>Without Power</p>
        <button className='btn btn-warning bg-warning1 p-3' >SHOP NOW</button>
        </div>
        </div>
        <div style={{position: 'relative'}}>
          <img
             src={i22}
            alt="Small Image 2"
            className="img-fluid w-100 rounded custom-small-image"
            style={{ height: '350px',}}

          />
                  <div style={{position: 'absolute', top: '40%', left: '10%'}}>
          <p style={{fontSize: '1.5rem'}} className='fw-bold text-white text-larger w-100'>With Power</p>
        <button className='btn btn-warning bg-warning1 p-3' >SHOP NOW</button>
        </div>
        </div>
      </div>
    </div>
    <div className='m-5 d-flex ' style={{borderBottom: '1px solid #b69f2c'}}></div>
    <p className='text-lighter opacity-50 m-2'>COLOURED CONTACT LENSES</p>
    <div className='d-flex justify-content-between mx-2 my-5'>
      <p style={{borderBottom: '1px solid #b69f2c'}}>WITH <span style={{color: '#b69f2c'}}>POWER</span></p>
      <button className='btn btn-warning bg-warning1 bg-md-none p-3 h-50' >SHOP NOW</button>
    </div>
    <div className='my-5 d-flex gap-2'>
      {products.map((product,index) => (
        <div key={index}>
        {product && product.Category.Name === 'with-power' && (
          <div className='mx-5'>
          <img style={{height: '250px' , width: '250px'}} src={`http://localhost:8080/${product.Image[0]}`} alt={index} />
          </div>
          )} 
          </div>
      ))}
    </div>
    <div className=' w-100 d-flex flex-column flex-md-row py-5 align-items-center justify-content-around text-black gap-5' style={{borderBottom: '1px solid #b69f2c', borderTop: '1px solid #b69f2c'}}>
      <p><span className='p-2 text-warning1'><FaPlane /></span>WORLDWIDE SHIPPING</p>
      <p><span className='p-2 text-warning1'><IoMedalOutline /></span>BEST RATINGS IN ALL ACROSS LEBANON</p>
      <p><span className='p-2'><ReactCountryFlag countryCode="US" svg  /></span>MADE IN USA</p>
    </div>
    <div className='d-flex justify-content-between mx-2 my-5'>
      <p style={{borderBottom: '1px solid #b69f2c'}}>WITHOUT <span style={{color: '#b69f2c'}}>POWER</span></p>
      <button className='btn btn-warning bg-warning1 bg-md-none p-3 h-50' >SHOP NOW</button>
    </div>
    <div className='my-5 d-flex gap-2'>
      {products.map((product,index) => (
        <div key={index}>
        {product && product.Category.Name === 'without-power' && (
          <div className='mx-5'>
          <img style={{height: '250px' , width: '250px'}} src={`http://localhost:8080/${product.Image[0]}`} alt={index} />
          </div>
          )} 
          </div>
      ))}
    </div>
    <div className='py-5'>
      <p className='py-5 m-2' style={{fontSize: '2rem', borderTop: '1px solid #b69f2c'}}>OUR BEUATIFULL CUSTOMERS</p>
      </div>
  </div>
 )
}

export default Home
