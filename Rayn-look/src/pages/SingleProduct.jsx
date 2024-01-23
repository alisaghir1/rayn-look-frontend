import React from "react";
import { useLocation } from "react-router-dom";
import FrequentlyAsked from "./FrequentlyAsked";
import EyeLoader from "../components/EyeLoader";
import useProductsHook from "../hooks/useProductsHook";


function SingleProduct() {
  const location = useLocation();
  const product = location?.state?.product;
  const {productLoading} = useProductsHook()

  const containerStyle = {
    height: productLoading ? "100vh" : "100%",
  };

  
  return (
    <div style={containerStyle}>
    {productLoading ? (<EyeLoader />) : (
    <div className="container-fluid p-5">
      <div className="d-flex gap-3">
        <div className="col-md-6">
          <img
            src={`http://localhost:8080/${product.Image[0]}`}
            alt="Mayfair Ice"
            className="img-fluid rounded"
            style={{ width: "800px", height: "600px" }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4">{product.Name}</h1>
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
            Crystal-Clear Vision: Our lenses are engineered to provide sharp,
            clear vision, ensuring you see the world with utmost clarity and
            detail.
          </p>
          <p>
            All-Day Comfort: Say goodbye to discomfort. These contact lenses are
            made from breathable materials that keep your eyes feeling fresh and
            hydrated throughout the day.
          </p>
          <p>
            Easy Handling: Designed for hassle-free application and removal, our
            lenses make your daily routine a breeze. Smooth edges and a
            user-friendly design ensure a seamless experience.
          </p>
          <h3>Length of Wear</h3>
          <p>1 Year: {product.Price}$</p>
          <button className="btn bg-warning1 p-3">Add to Cart</button>
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
