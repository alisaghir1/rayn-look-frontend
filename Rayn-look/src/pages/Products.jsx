import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { GiSettingsKnobs } from "react-icons/gi";
import useCategoriesHook from "../hooks/useCategoriesHook";
import useProductsHook from "../hooks/useProductsHook";
import { Link } from "react-router-dom";
import i30 from "../assets/images/30.jpeg";

const Products = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCategory, setIsCategory] = useState(false);
  const { categories, categoryLoading } = useCategoriesHook();
  const { productLoading } = useProductsHook();
  console.log(categories);

  const handleToggle = () => setShowOffcanvas(!showOffcanvas);

  const handleItemSelect = (item) => {
    if (item.products && item.products.length > 0) {
      setSelectedItem(item);
      setIsCategory(true);
    } else {
      setSelectedItem(item);
      setIsCategory(false);
    }
    setShowOffcanvas(false);
  };

  return (
    <div
      className="d-flex flex-column my-5 overflow-hidden"
      style={{ overflowY: "scroll" }}
    >
      <div>
        <div className="position-relative">
          <img
            src={i30}
            className="w-100"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <p
            className="position-absolute fw-bold text-white custom-text-home w-75"
            style={{ top: "30%", left: "5%", fontSize: "2.5rem" }}
          >
            See your uniqueness unfold – like rings on a tree. Elevate clarity
            with our lenses. Your gaze, our touch.
          </p>
        </div>
        <div
          className="text-black m-1 "
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
        >
          <p
            className="m-5 pb-5 d-flex justify-content-between"
            style={{ fontSize: "35px", borderBottom: "1px solid #b69f2c" }}
          >
            {" "}
            Our Products{" "}
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
            <Offcanvas.Title style={{borderBottom: '1px solid #b69f2c'}}> Filte By Categories</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              {categories.map((category, index) => (
                <div
                  className="d-flex flex-column align-items-center mt-5 text-warning3"
                  key={index}
                >
                  <h5
                    className="w-100"
                    style={{
                      borderBottom: "1px solid #b69f2c",
                      cursor: "pointer",
                    }}
                    onClick={() => handleItemSelect(category)}
                  >
                    {category.Name}
                  </h5>
                </div>
              ))}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div className="w-100 vh-100">
        <div className="mx-5  ">
          {selectedItem ? (
            <div>
              {isCategory ? (
                <div className="d-flex gap-5">
                  {selectedItem.products.map((product, index) => (
                    <div className="d-flex flex-column">
                      <Link
                        to={"/single-product"}
                        state={{ product, productLoading }}
                      >
                        <img
                          src={`http://localhost:8080/${product.Image[0]}`}
                          alt=""
                          style={{ width: "250px", height: "250px" }}
                          className="rounded"
                        />
                      </Link>
                      <p key={index}>{product.Name}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <Link
                      to={"/single-product"}
                      state={{ product: selectedItem, productLoading }}
                    >
                      <img
                        src={`http://localhost:8080/${selectedItem.Image[0]}`}
                        alt=""
                        style={{ width: "250px", height: "250px" }}
                        className="rounded"
                      />
                    </Link>
                    <p>{selectedItem.Name}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* Display all products here */}
              <div className="d-flex gap-5">
                {categories.map((category) =>
                  category.products.map((product, index) => (
                    <div className="d-flex flex-column" key={index}>
                      <Link
                        to={"/single-product"}
                        state={{ product, productLoading }}
                      >
                        <img
                          src={`http://localhost:8080/${product.Image[0]}`}
                          alt=""
                          style={{ width: "250px", height: "250px" }}
                          className="rounded"
                        />
                      </Link>
                      <p>{product.Name}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

