import "./Card/adminproductCard.css"
import Adminproductcard from "./Card/adminproductCard"
import { React, useState, useEffect} from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

const Adminproducts = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [categories, setCategories] = useState([]);
    const [creationCategory, setCreationCategory] = useState("");
    const [creationName, setCreationName] = useState("");
    const [creationPrice, setCreationPrice] = useState("");
    const [creationImages, setCreationImages] = useState("");
    const [creationDescription, setCreationDescription] = useState("");

    const [CategorybuttonName, setCategoryButtonName] = useState("Category")
    const handleDelete = () => {
        fetchProducts();
    };

    const fetchCategories = async () => {
        try {
        const response = await axios.get(`http://localhost:8080/Category`,
        // {
        //     headers: {
        //       Authorization: `Bearer ${user.token}`,
        //     },
        //   }
          );
        // console.log(userId)
        const data = response.data;
        console.log(data);
        setCategories(data);
        // console.log(data)
        } catch (error) {
        console.log(error);
        setCategories(null);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("kousa");
        if (!creationName || !creationPrice || !creationDescription || !creationImages || creationCategory == "Category") {
            setErrorMessage("Please fill out all fields.");
        }
        else {
            console.log(creationImages);
            const formData = new FormData();
            formData.append('Name', creationName);
            formData.append('Price', creationPrice);
            for (let i = 0; i < creationImages.length; i++) {
                formData.append('Image', creationImages[i]);
            }
            formData.append('Description', creationDescription);
            formData.append('Category', creationCategory);

            try {
                const response = await axios.post(
                `http://localhost:8080/Product`,
                formData
                );
                console.log(response);
                setShow(false);
                fetchProducts()
            } catch (error) {
                console.log(error);
                setShow(true);
            }
        }
    };

    const fetchProducts = async () => {
        try {
        const response = await axios.get(`http://localhost:8080/Product`,
        // {
        //     headers: {
        //       Authorization: `Bearer ${user.token}`,
        //     },
        //   }
          );
        // console.log(userId)
        const data = response.data;
        setProducts(data);
        // console.log(data)
        } catch (error) {
        console.log(error);
        setProducts(null);
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, [products]);

    return(
        <>
            <button className="admin-Main-Create" onClick={() => setShow(true)}>Create</button>
            <div className="admin-product-container">
                {products && products.length > 0 ? (
                        products.map((product) => (
                        <Adminproductcard
                        key = {product._id}
                        data={product}
                        onDelete={() => handleDelete()}
                        />
                        ))
                    ) : (
                        <p className="DisplayAll-Title">No Products available</p>
                    )}
            </div>
            <Modal show={show} onHide={() => {setShow(false); setCategoryButtonName("Category"); setErrorMessage("")}}>
                <Modal.Header closeButton onClick={()=>{setCategoryButtonName("Category")}}>
                    <Modal.Title>Create Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form >
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        required = {true}
                        onChange={(event) => setCreationName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Enter Price"
                        required = {true}
                        onChange={(event) => setCreationPrice(event.target.value)}

                        />
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter description"
                        required = {true}
                        onChange={(event) => setCreationDescription(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formImage">
                    <Form.Label>Images</Form.Label>
                        <Form.Control
                            type="file"
                            placeholder="Enter images"
                            required= {true}
                            multiple={true}
                            onChange={(event) => setCreationImages(event.target.files)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formCategory">
                        <Form.Label>Choose Category</Form.Label>
                        <Dropdown onSelect={(eventKey) => {
                            const selectedCategory = categories.find(category => category._id === eventKey);
                            setCreationCategory(selectedCategory._id);
                            setCategoryButtonName(selectedCategory.Name);
                            }}>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                {CategorybuttonName}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {categories.map((category, index) => (
                                    <Dropdown.Item key={index} eventKey={category._id}>
                                        {category.Name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <p style={{color: 'red'}}>{errorMessage}</p>
                    </Form.Group>
                    <Button variant="primary mt-3" className="SubmitButton" type="submit" onClick={handleSubmit} >
                        Submit
                    </Button>
                </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}


export default Adminproducts