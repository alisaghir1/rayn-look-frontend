import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { GiSettingsKnobs } from "react-icons/gi";
import { Link } from "react-router-dom";
import i30 from "../assets/images/30.jpeg";
import EyeLoader from '../components/EyeLoader';
import useCategoriesHook from "../hooks/useCategoriesHook";

const Products = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { categories, categoryLoading } = useCategoriesHook();

  const handleToggle = () => setShowOffcanvas(!showOffcanvas);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setShowOffcanvas(false);
  };

  const containerStyle = {
    height: categoryLoading ? "100vh" : "100%",
  };

  return (
    <div className="d-flex flex-column my-5">
      <div>
        <div className="position-relative">
          <img
            src={i30}
            className="w-100"
            style={{ height: "500px", objectFit: "cover" }}
            alt="Product Cover"
          />
          <p
            className="position-absolute fw-bold text-white custom-text-home w-50"
            style={{ top: "30%", left: "5%", fontSize: "2.5rem" }}
          >
            See your uniqueness unfold. Your gaze, our touch.
          </p>
        </div>
        <div className="text-black m-1 " style={{ fontSize: "1.5rem", cursor: "pointer" }}>
          <p className="m-5 pb-5 d-flex justify-content-between" style={{ fontSize: "35px", borderBottom: "1px solid #b69f2c" }}>
            Our Products
            <span className="text-warning1" onClick={handleToggle}>
              <GiSettingsKnobs />
            </span>
          </p>
        </div>
        <Offcanvas
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
          backdrop="auto"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ borderBottom: '1px solid #b69f2c' }}>Filter By Categories</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="accordion accordion-flush mt-5" id="accordionFlushExample">
              {categories.map((category, index) => (
                <div className="d-flex flex-column align-items-center text-warning3" key={index}>
                  <div className="d-flex justify-content-start align-items-baseline w-100 py-3" style={{ borderBottom: "1px solid #b69f2c" }}>
                    <h5
                      style={{ cursor: "pointer", fontSize: '1.5rem', fontFamily: "Helvetica" }}
                      onClick={() => handleItemSelect(category)}
                    >
                      {category.Name}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div className="w-100 vh-100">
        {categoryLoading ? (
          <EyeLoader />
        ) : (
          <div style={containerStyle} className="mx-5">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {selectedItem
                ? selectedItem.products.map((product, index) => (
                    <div className="col" key={index}>
                      <div className="d-flex flex-column">
                        <Link to={"/single-product"} state={{ product }}>
                          <img
                            src={`http://localhost:8080/${product.Image[0]}`}
                            alt={product.Name}
                            style={{ width: "100%", height: "250px", objectFit: "cover" }}
                            className="rounded"
                          />
                        </Link>
                        <p>{product.Name}</p>
                      </div>
                    </div>
                  ))
                : categories.map((category) =>
                    category.products.map((product, index) => (
                      <div className="col" key={index}>
                        <div className="d-flex flex-column">
                          <Link to={"/single-product"} state={{ product }}>
                            <img
                              src={`http://localhost:8080/${product.Image[0]}`}
                              alt={product.Name}
                              style={{ width: "100%", height: "250px", objectFit: "cover" }}
                              className="rounded"
                            />
                          </Link>
                          <p>{product.Name}</p>
                        </div>
                      </div>
                    ))
                  )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
