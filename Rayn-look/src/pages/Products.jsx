import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { GiSettingsKnobs } from "react-icons/gi";
import i30 from "../assets/images/30.jpeg";
import EyeLoader from '../components/EyeLoader';
import useCategoriesHook from "../hooks/useCategoriesHook";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { categories, categoryLoading } = useCategoriesHook();
  const [visibleProducts, setVisibleProducts] = useState(8);

  const handleToggle = () => setShowOffcanvas(!showOffcanvas);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setShowOffcanvas(false);
  };

  const containerStyle = {
    height: categoryLoading ? "100vh" : "100%",
  };


  const totalProducts =
  selectedItem
    ? selectedItem.products.length
    : categories.reduce((total, category) => total + category.products.length, 0);


  const hasMoreProducts = totalProducts > visibleProducts;

  const navigate = useNavigate();

  const handleNavigateToSinglePage = (product) => {
    navigate("/single-product", { state: { product } });
  }

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
      <div style={containerStyle} className="w-100">
        {categoryLoading ? (
          <EyeLoader />
        ) : (
          <div style={containerStyle} className="mx-5">
            <div className="row row-cols-1 row-cols-md-4 g-4">
            {selectedItem
                ? selectedItem.products.slice(0, visibleProducts).map((product, index) => (
                  <div class="col-lg-3 col-md-12 mb-4">
                  <div class="card">
                    <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light">
                      <img style={{aspectRatio: '16/9'}} src={`http://localhost:8080/${product.Image[0]}`}
                        class="w-100" />
                      <a href="#!">
                        <div class="mask">
                          <div class="d-flex justify-content-start align-items-end h-100">
                          </div>
                        </div>
                        <div class="hover-overlay">
                          <div class="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                        </div>
                      </a>
                    </div>
                    <div class="card-body">
                      <a href="" class="text-reset">
                        <h5 class="card-title mb-3">{product.Name}</h5>
                      </a>
                      <a href="" class="text-reset">
                        <p>{product.Description}</p>
                      </a>
                      <div className="d-flex align-items-baseline justify-content-between">
                      <h6 class="mb-3">${product.Price}</h6>
                      <button onClick={() => handleNavigateToSinglePage(product)} style={{fontSize: '1', width:'35%'}} className="btn bg-warning1">
                        View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                  ))
                : categories.map((category) =>
                category.products.slice(0, visibleProducts).map((product, index) => (
                  <div class="col-lg-3 col-md-12 mb-4">
                  <div class="card">
                    <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light">
                      <img style={{aspectRatio: '16/9'}} src={`http://localhost:8080/${product.Image[0]}`}
                        class="w-100" />
                      <a href="#!">
                        <div class="mask">
                          <div class="d-flex justify-content-start align-items-end h-100">
                          </div>
                        </div>
                        <div class="hover-overlay">
                          <div class="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                        </div>
                      </a>
                    </div>
                    <div class="card-body">
                      <a href="" class="text-reset">
                        <h5 class="card-title mb-3">{product.Name}</h5>
                      </a>
                      <a href="" class="text-reset">
                        <p>{product.Description}</p>
                      </a>
                      <div className="d-flex align-items-baseline justify-content-between">
                      <h6 class="mb-3">${product.Price}</h6>
                      <button onClick={() => handleNavigateToSinglePage(product)} style={{fontSize: '1', width:'35%'}} className="btn bg-warning1">
                        View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                    ))
                  )}
            </div>
            {hasMoreProducts && (
              <div className="d-flex justify-content-end mt-5">
              {/* <button
                style={{backgroundColor: 'black', color: '#b69f2c '}}
                className="btn mt-3 px-5"
                onClick={() => setVisibleProducts((prevCount) => prevCount + 8)}
              >
                Show More
              </button> */}
              <button class="cta"
                              onClick={() => setVisibleProducts((prevCount) => prevCount + 8)}>
  <span>Show more</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
