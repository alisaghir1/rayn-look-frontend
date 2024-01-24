import "./Card/adminproductCard.css"
import Adminproductcard from "./Card/adminproductCard"
import { React, useState, useEffect} from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

const Adminproducts = () => {
    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [categories, setCategories] = useState([]);
    const [creationCategory, setCreationCategory] = useState("");
    const [CategorybuttonName, setCategoryButtonName] = useState("Category")
    const handleDelete = (deletedProduct) => {
        setProducts(prevProduct => prevProduct.filter(Product => Product._id !== deletedProduct));
    };

    const handlesubmit = () => {

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

    useEffect(() => {
        const fetchProducts = async () => {
            try {
            const response = await axios.get(`http://localhost:8080/Product/`,
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
        fetchProducts();
        fetchCategories();
    }, []);

    return(
        <>
            <button className="admin-Main-Create" onClick={() => setShow(true)}>Create</button>
            <div className="admin-product-container">
            {products && products.length > 0 ? (
                    products.map((product) => (
                    <Adminproductcard
                    data={product}
                    onDelete={() => handleDelete(product._id)}
                    />
                    ))
                ) : (
                    <p className="DisplayAll-Title">No Products available</p>
                )}
            </div>
            <Modal show={show} onHide={() => {setShow(false); setCategoryButtonName("Category");}}>
                <Modal.Header closeButton onClick={()=>{setCategoryButtonName("Category")}}>
                    <Modal.Title>Create Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form  >
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        required = {true}
                        // onChange={handleNameCreate}
                        />
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Enter Price"
                        required = {true}
                        // onChange={handlePriceCreate}
                        />
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter description"
                        required = {true}
                        // onChange={handleDescriptionCreate}
                        />
                    </Form.Group>
                    <Form.Group controlId="formImage">
                        <Form.Label>Images</Form.Label>
                        <Form.Control
                        type="file"
                        placeholder="Enter images"
                        required = {true}
                        multiple = {true}
                        // onChange={handleImageCreate}
                        />
                    </Form.Group>
                    <Form.Group controlId="formCategory">
                        <Form.Label>Choose Category</Form.Label>
                        <Dropdown onSelect={(eventKey) => {setCreationCategory(eventKey); setCategoryButtonName(eventKey);}}>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                {CategorybuttonName}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {categories.map((category, index) => (
                                    <Dropdown.Item key={index} eventKey={category.Name}>
                                        {category.Name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                    <Button variant="primary mt-3" className="SubmitButton" type="submit" >
                        Submit
                    </Button>
                </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}


export default Adminproducts