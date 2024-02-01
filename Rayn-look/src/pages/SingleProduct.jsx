import React from "react";
import { useLocation,Link } from "react-router-dom";
import FrequentlyAsked from "./FrequentlyAsked";
import EyeLoader from "../components/EyeLoader";
import useProductsHook from "../hooks/useProductsHook";
//import to use the cart globally from redux
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';
import { useSelector } from "react-redux";

//carousel for react
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Swal from 'sweetalert2'



function SingleProduct() {
  const location = useLocation();
  const product = location?.state?.product;
  const {productLoading} = useProductsHook()

  const cartItems = useSelector((state) => state.cart);
  const isInCart = cartItems.filter((item) => item._id === product._id).length > 0;



  //dispatch to handle the type of the action
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    Swal.fire({
      title: 'Added to cart.',
      text:'want to view your cart?',
      icon: "success",
      showDenyButton: true, 
      confirmButtonText: "Yes",
      denyButtonText: 'Continue shopping',
      preConfirm: () => {
        window.location.href = '/cart';
      },
      preDeny: () => {
        window.location.href = '/products';
      },
    });
  };


  const containerStyle = {
    height: productLoading ? "100vh" : "100%",
  };

  const renderSlides = product.Image.map((imageUrl, index) => (
    <div key={index}>
       <img
         src={`http://localhost:8080/${imageUrl}`}
         alt={`Product Image ${index + 1}`}
         className="img-fluid rounded custom-image-single-product-page"
         style={{ width: "800px", height: "600px" }}
       />
    </div>
   ));

  
  return (
    <div style={containerStyle}>
    {productLoading ? (<EyeLoader />) : (
    <div className="container-fluid p-5">
    <div  class="d-flex flex-column flex-md-row gap-3">
        <div className="col-md-6">
        <Carousel showArrows={false} autoPlay={true} infiniteLoop={true}  showThumbs={false}>
         {renderSlides}
        </Carousel>
        </div>
        <div   className="col-md-6">
          <h1 className="display-4 text-warning2">{product.Name}</h1>
          <h6 className="my-3">Price: {product.Price}$</h6>
          <p className="lead">{product.Description}</p>
          <p>
            Create an impact with these {product.Name} tones. Sensual and
            seductive, this look is simply captivating. New and exclusive to us
            The Rayn Collection by The Lebanese number 1 coloured contact lens
            brand. As seen in London Fashion Week and Vogue. The Rayn Collection
            are super strong colour to completely change your eye colour
            naturally. Suitable for dark and light eyes. The images here is an
            actual photos taken on our customer eyes . No Photoshop!
          </p>
          <p>
            Easy Handling: Designed for hassle-free application and removal, our
            lenses make your daily routine a breeze. Smooth edges and a
            user-friendly design ensure a seamless experience.
          </p>
          <h3>Length of Wear</h3>
          <p>1 Year: {product.Price}$</p>
          <button  disabled={isInCart} className="btn bg-warning1 p-3" onClick={() => handleAddToCart(product)}> {isInCart ? "Already in cart" : "Add to Cart"}</button>
        </div>
      </div>
      <div className="my-5 py-5">
        <FrequentlyAsked />
      </div>
    </div>
    )}
    </div>
  );
}

export default SingleProduct;
