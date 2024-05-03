import "./Card/adminproductCard.css"
import Adminproductcard from "./Card/adminproductCard"
import { React, useState, useEffect} from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import TextField from "@mui/material/TextField";
import Swal from 'sweetalert2'



import EyeLoader from "../../components/EyeLoader";


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
    const [searchTerm, setSearchTerm] = useState("");
    const [CategorybuttonName, setCategoryButtonName] = useState("Category")
    const [loading, setLoading] = useState(false)

    const fetchCategories = async () => {
        try {
            setLoading(true)
        const response = await axios.get(`https://rayn-look-backend.onrender.com/Category`,
        // {
        //     headers: {
        //       Authorization: `Bearer ${user.token}`,
        //     },
        //   }
          );
        const data = response.data;
        console.log(data);
        setCategories(data);
        setLoading(false)
        } catch (error) {
        console.log(error);
        setCategories(null);
        setLoading(false)

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
                `https://rayn-look-backend.onrender.com/Product`,
                formData
                );
                console.log(response);
                setShow(false);
                fetchProducts()
                await Swal.fire({
                    title: "Added Successfully!",
                    text: "Congrats on your new product rayn!",
                    icon: "success"
                  });
            } catch (error) {
                console.log(error);
                setShow(true);
            }
        }
    };

    const handleDelete = async (deletedProductId) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== deletedProductId));
      };
      

    const fetchProducts = async () => {
        try {
            console.log("kousaa");
        const response = await axios.get(`https://rayn-look-backend.onrender.com/Product`,
        // {
        //     headers: {
        //       Authorization: `Bearer ${user.token}`,
        //     },
        //   }
          );
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
    }, []);

    return(
        <>
        {loading ? <EyeLoader /> : (
            <div>
        <div className="container-create-search">
            <button className="admin-Main-Create" onClick={() => setShow(true)}>Create</button>
            <div className="admin-product-search">
        <TextField 
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        />
 </div>
 </div>

            <div className="admin-product-container">
                {products && products.length > 0 ? (
                        products.filter((item) =>
                        (searchTerm === "" ||
                          (item.Name && item.Name.toLowerCase().includes(searchTerm.toLowerCase())))
                      ).map((product) => (
                        <Adminproductcard
                        key = {product._id}
                        data={product}
                        onDelete={() => handleDelete(product._id)}
                        // onUpdate = {() => handleProductUpdate(product._id)}
                        />
                        ))
                    ) : (
                        <p className="DisplayAll-Title text-center">No Products available</p>
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
                    <Button variant=" mt-3" className="SubmitButton bg-warning1" type="submit" onClick={handleSubmit} >
                        Submit
                    </Button>
                </Form>
                </Modal.Body>
            </Modal>
            </div>
            )}
        </>
    )
}


export default Adminproducts