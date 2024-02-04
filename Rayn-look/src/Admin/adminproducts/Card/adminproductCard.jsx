import { MdDelete } from "react-icons/md";
import { React, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Swal from 'sweetalert2'; // Import SweetAlert library

const Adminproductcard = ({ data, onDelete }) => {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState(data);
  const [CategorybuttonName, setCategoryButtonName] = useState("Category");
  const [categories, setCategories] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(0);
  const [creationImages, setCreationImages] = useState("");
  const [ImageForm, setImageForm] = useState(false);
  const [Name, SetName] = useState("");
  const [Price, setPrice] = useState(0);
  const [Description, setDescription] = useState("");


  const ondelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:8080/Product/${newData._id}`
        );

        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        await Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        // Trigger the onDelete callback to update the UI
        onDelete(data._id);
      } catch (error) {
        console.error('There was an error!', error);
      }
    }
  };

  useEffect(() => {
    fetchCategories();

  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/Category`
        // {
        //     headers: {
        //       Authorization: `Bearer ${user.token}`,
        //     },
        //   }
      );
      // console.log(userId)
      const data = response;
      console.log(data);
      setCategories(data);
      // console.log(newData)
    } catch (error) {
      console.log(error);
      setCategories(null);
    }
  };

  const handleImageDelete = async () => {
    try {
      console.log(deleteIndex, newData._id);
      const response = await axios.delete(
        `http://localhost:8080/Product/${newData._id}/${deleteIndex}`
      );
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedImages = [...newData.Image];
      updatedImages.splice(deleteIndex, 1);
      setNewData({ ...newData, Image: updatedImages });
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const handleImageAdd = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      for (let i = 0; i < creationImages.length; i++) {
        formData.append("Image", creationImages[i]);
      }
      const response = await axios.post(
        `http://localhost:8080/Product/${newData._id}`,
        formData
      );
      const updatedImages = [...newData.Image];
      setNewData({ ...newData, Image: updatedImages });
      console.log(response);
      setImageForm(false);
      onDelete();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const requestData = {
        Name: Name,
        Price: Price,
        Description: Description,
      };
      console.log(requestData);
      console.log(newData._id);
      const response = await axios.patch(
        `http://localhost:8080/Product/${newData._id}`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setShow(false);
      onDelete();
      setNewData((prevData) => {
        // Update the properties you want to change in the existing data
        return {
          ...prevData,
          Name: requestData.Name,
          Price: requestData.Price,
          Description: requestData.Description,
        };
      });
    } catch (error) {
      console.error("There was an error!", error);
      setShow(false);
    }

  };

  return (
    <>
      <div className="Admin-product-card">
        <div className="card mb-3" key={newData._id}>
          <div
            className="card__img__container"
            style={{ width: "100%", height: "auto" }}
          >
            <Carousel controls={true} indicators={true} interval={null}>
              {newData.Image.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="card__img"
                    src={`http://localhost:8080/${image}`}
                    alt=""
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="card__descr-wrapper">
            <p className="card__title">Name : {newData.Name}</p>
            <p className="card__Desc">Description : {newData.Description}</p>
            <p className="card__title">Price : {newData.Price}$</p>
            <div className="card__buttons">
              <button className="button-Update" onClick={() => setShow(true)}>
                {" "}
                Update{" "}
              </button>
              <button
                className="button-Delete"
                onClick={() => {
                  ondelete();
                  onDelete();
                }}
              >
                {" "}
                Delete{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Header
          closeButton
          onClick={() => {
            setCategoryButtonName("Category");
          }}
        >
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Carousel
                controls={true}
                indicators={false}
                interval={null}
                onSelect={(selectedIndex) => {
                  setDeleteIndex(selectedIndex);
                  console.log(selectedIndex, newData._id);
                }}
              >
                {newData.Image.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="imgupdate"
                      src={`http://localhost:8080/${image}`}
                      alt=""
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="IMG-BUTTON">
                <Button
                  variant="danger"
                  className="DeleteImageButton"
                  onClick={() => {
                    handleImageDelete();
                    onDelete();
                  }}
                >
                  Delete Image
                </Button>
                <Button
                  variant="success"
                  className="DeleteImageButton"
                  onClick={() => {
                    setImageForm(true);
                    setShow(false);
                  }}
                >
                  Add Image
                </Button>
              </div>
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                // value={newData.Name}
                placeholder="Enter Name"
                required={true}
                onChange={(event) => SetName(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                // value={newData.Price}
                placeholder="Enter Price"
                required={true}
                onChange={(event) => setPrice(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                // value={newData.Description}
                placeholder="Enter description"
                required={true}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary mt-3"
              className="SubmitButton"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={ImageForm}
        onHide={() => {
          setImageForm(false);
          setShow(true);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="AddImages">
              <Form.Label>Add Images Here</Form.Label>
              <Form.Control
                type="file"
                multiple={true}
                placeholder="Add Images"
                required={true}
                onChange={(event) => setCreationImages(event.target.files)}
                autoFocus
              />
            </Form.Group>
            <Button
              variant="primary mt-3"
              className="SubmitButton"
              type="submit"
              onClick={(event) => {
                handleImageAdd(event);
                setCreationImages("");
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Adminproductcard;