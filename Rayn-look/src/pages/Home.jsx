import React from "react";
import i20 from "../assets/images/20.jpeg";
import i21 from "../assets/images/27.jpg";
import i22 from "../assets/images/32.webp";
import { FaPlane } from "react-icons/fa"; // Plane icon from Font Awesome
import { IoMedalOutline } from "react-icons/io5"; // Medal icon from Ionicons
import ReactCountryFlag from "react-country-flag";
import { useNavigate,Link } from "react-router-dom";
import useProductsHook from "../hooks/useProductsHook";
import EyeLoader from "../components/EyeLoader";
import FrequentlyAsked from "./FrequentlyAsked";
import { ReactTyped } from "react-typed";
 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./home.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid } from "swiper/modules";
//

const Home = () => {
  const { products, productLoading } = useProductsHook();
  console.log(products)

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/products')
  }

  const containerStyle = {
    height: productLoading ? '20vh' : '100%'
  }


  return (
    <div className="container-fluid p-4">
      <div className="row">
        {/* Left side - Large Image */}
        <div className="col-lg-8 mb-3" style={{ position: "relative" }}>
          <img src={i20} alt="Large Image" className="img-fluid rounded" />
          <div style={{ position: "absolute", top: "30%", left: "10%" }}>
            <p
              style={{ fontSize: "2.5rem" }}
              className="fw-bold text-white custom-text-home w-75 "
            >
              Lebanon's Most <ReactTyped
                strings={['Comfortable ', 'Unique ', 'Affordable', 'Captivating']}
                typeSpeed={100}
                backSpeed={50}
                loop
              /> 
                Lenses
            </p>
            <button className="btn btn-warning bg-warning1 bg-md-none p-3" onClick={handleNavigate}>
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Right side - Two Smaller Images */}
        <div className="col-lg-4 d-flex flex-column justify-content-between mb-5 ">
          <div className="mb-2" style={{ position: "relative" }}>
            <img
              src={i22}
              alt="Small Image 1"
              className="img-fluid w-100 rounded custom-small-image m-1"
            />
            <div style={{ position: "absolute", top: "40%", left: "10%" }}>
              <p
                style={{ fontSize: "1.5rem" }}
                className="fw-bold text-white text-larger w-100"
              >
                Without Power
              </p>
              <button className="btn btn-warning bg-warning1 p-3" onClick={handleNavigate}>
                SHOP NOW
              </button>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <img
              src={i21}
              alt="Small Image 2"
              className="img-fluid w-100 rounded custom-small-image m-1"
            />
            <div style={{ position: "absolute", top: "40%", left: "10%" }}>
              <p
                style={{ fontSize: "1.5rem" }}
                className="fw-bold text-white text-larger w-100"
              >
                With Power
              </p>
              <button className="btn btn-warning bg-warning1 p-3" onClick={handleNavigate}>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="m-5 d-flex "
        style={{ borderBottom: "1px solid #b69f2c" }}
      ></div>
      <p style={{fontSize: '1.3rem'}} className="m-2">COLOURED CONTACT LENSES</p>
      <div className="d-flex justify-content-between mx-2 my-5">
        <p style={{ borderBottom: "1px solid #b69f2c" }}>
          WITH <span style={{ color: "#b69f2c" }}>POWER</span>
        </p>
      </div>
      <div style={containerStyle} className="my-5 d-flex gap-2">
      {productLoading ? (
        <EyeLoader />
      ) : (
        <Swiper
          autoplay={true}
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 600px
            1100: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            
         }}
        >
          {products
            .filter((product) => product.Category && product.Category.Name === "with-power")
            .map((product, index) => (
              <SwiperSlide key={index} className="bg-transparent">
              <Link to={'/single-product'} state={{ product, productLoading }}>
                <div  className="swiper-image-container">
                  <img
                    className="swiper-image"
                    src={`http://localhost:8080/${product.Image[0]}`}
                    alt={index}
                  />
                  <div className="overlay">
                    <p className="m-1 fw-bold">Click to see product details</p>
                  </div>
                </div>
              </Link>
              <div className="d-flex justify-content-center">
              <p className="my-2 ">{product.Name}</p>
              </div>
            </SwiperSlide>
            ))}
        </Swiper>
      )}
      </div>
      <div
        className=" w-100 d-flex flex-column flex-md-row py-5 align-items-baseline justify-content-around text-black gap-5"
        style={{
          borderBottom: "1px solid #b69f2c",
          borderTop: "1px solid #b69f2c",
        }}
      >
        <p>
          <span className="p-2 text-warning1">
            <FaPlane />
          </span>
          WORLDWIDE SHIPPING
        </p>
        <p>
          <span className="p-2 text-warning1">
            <IoMedalOutline />
          </span>
          BEST RATINGS IN ALL ACROSS LEBANON
        </p>
        <p>
          <span className="p-2">
            <ReactCountryFlag countryCode="US" svg />
          </span>
          MADE IN USA
        </p>
      </div>
      <div className="d-flex justify-content-between mx-2 my-5">
        <p style={{ borderBottom: "1px solid #b69f2c" }}>
          WITHOUT <span style={{ color: "#b69f2c" }}>POWER</span>
        </p>
      </div>
      <div style={containerStyle} className="my-5 d-flex gap-2">
      {productLoading ? (
        <EyeLoader />
      ) : (
        <Swiper
        autoplay={true}
        slidesPerView={1}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 600px
          1100: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
       }}
      >
        {products
          .filter((product) => product.Category && product.Category.Name === "without-power")
          .map((product, index) => (
            <SwiperSlide key={index} className="bg-transparent">
              <Link to={'/single-product'} state={{product, productLoading}}>
              <div className="swiper-image-container">
                  <img
                    className="swiper-image"
                    src={`http://localhost:8080/${product.Image[0]}`}
                    alt={index}
                  />
                  <div className="overlay">
                    <p className="m-1 fw-bold">Click to see product details</p>
                  </div>
                </div>
              </Link>
              <div className="d-flex justify-content-center">
              <p className="my-2">{product.Name}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      )}
      </div>
      <div className="m-5"  style={{borderBottom: '1px solid #b69f2c'}} ></div>
      <div className="bg-transparent my-5"><FrequentlyAsked /></div>
    </div>
  );
};

export default Home;
