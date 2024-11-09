import React from "react";
import i20 from "../assets/images/20.jpeg";
import i21 from "../assets/images/27.jpg";
import i22 from "../assets/images/32.webp";
import { FaPlane } from "react-icons/fa"; // Plane icon from Font Awesome
import { IoMedalOutline } from "react-icons/io5"; // Medal icon from Ionicons
import ReactCountryFlag from "react-country-flag";
import { useNavigate, Link } from "react-router-dom";
import useProductsHook from "../hooks/useProductsHook";
import EyeLoader from "../components/EyeLoader";
import FrequentlyAsked from "./FrequentlyAsked";
import { ReactTyped } from "react-typed";
import { Helmet } from "react-helmet";

// Inside the component



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
  console.log(products);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  const containerStyle = {
    height: productLoading ? "20vh" : "100%",
  };

  return (
    <main className="container-fluid p-4">
      <Helmet>
        <title>Lebanon's Comfortable Contact Lenses - Rayn-Look</title>
        <meta name="description" content="Explore the most comfortable and affordable contact lenses in Lebanon. Worldwide shipping available." />
        <meta name="keywords" content="contact lenses, affordable lenses, Lebanon, comfortable lenses, colored lenses" />
       </Helmet>
      <section className="main__article">
        <article style={{ position: "relative" }}>
          <img src={i21} alt="a girl wearing contact lenses" style={{borderRadius:'10px', width:'100%'}}  />
          <div style={{ position: "absolute", top: "30%", left: "10%" }}>
            <header
              style={{ fontSize: "3.5rem" }}
              className="fw-bold text-white custom-text-home w-75 "
            >
              Lebanon's Most{" "}
              <ReactTyped
                strings={[
                  "Comfortable ",
                  "Unique ",
                  "Affordable",
                  "Captivating",
                ]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
              Lenses
            </header>
            <button
              className="btn btn-warning bg-warning1 bg-md-none p-3"
              onClick={handleNavigate}
            >
              SHOP NOW
            </button>
          </div>
        </article>
      </section>
      
      <div
        className="m-5 d-flex "
        style={{ borderBottom: "1px solid #b69f2c" }}
      ></div>

      <p style={{ fontSize: "1.3rem" }} className="m-2">
        COLOURED CONTACT LENSES
      </p>

      <div className="d-flex justify-content-between mx-2 my-5">
        <p style={{ borderBottom: "1px solid #b69f2c" }}>
          WITH <span style={{ color: "#b69f2c" }}>POWER</span>
        </p>
      </div>

      <article style={containerStyle} className="my-5 d-flex gap-2">
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
              .filter(
                (product) =>
                  product.Category && product.Category.Name === "With-Power"
              )
              .map((product, index) => (
                <SwiperSlide key={index} className="bg-transparent">
                  <Link
                    to={"/single-product"}
                    state={{ product, productLoading }}
                  >
                    <div className="swiper-image-container" >
                      <img
                        style={{borderRadius:'10px'}}
                        className="swiper-image"
                        src={`https://rayn-look-backend.onrender.com/${product.Image[0]}`}
                        alt='contact lenses with power'
                      />
                      <div className="overlay">
                        <p className="m-1 fw-bold">
                          Click to see product details
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div className="d-flex justify-content-center"></div>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </article>

      <article
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
      </article>

      <div className="d-flex justify-content-between mx-2 my-5">
        <p style={{ borderBottom: "1px solid #b69f2c" }}>
          WITHOUT <span style={{ color: "#b69f2c" }}>POWER</span>
        </p>
      </div>

      <article style={containerStyle} className="my-5 d-flex gap-2">
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
              .filter(
                (product) =>
                  product.Category && product.Category.Name === "Without-Power"
              )
              .map((product, index) => (
                <SwiperSlide key={index} className="bg-transparent">
                  <Link
                    to={"/single-product"}
                    state={{ product, productLoading }}
                  >
                    <div className="swiper-image-container">
                      <img
                        style={{borderRadius:'10px'}}
                        className="swiper-image"
                        src={`https://rayn-look-backend.onrender.com/${product.Image[0]}`}
                        alt='contact lenses without power'
                      />
                      <div className="overlay">
                        <p className="m-1 fw-bold">
                          Click to see product details
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div className="d-flex justify-content-center"></div>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </article>
      <div className="m-5" style={{ borderBottom: "1px solid #b69f2c" }}></div>
      <footer className="bg-transparent my-5">
        <FrequentlyAsked />
      </footer>
    </main>
  );
};

export default Home;
