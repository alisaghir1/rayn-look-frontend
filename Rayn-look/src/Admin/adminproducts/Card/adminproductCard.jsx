import { MdDelete } from "react-icons/md";
import {React, useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
const Adminproductcard = ({data, onDelete}) => {

    const [show, setShow] = useState(false);
    const [CategorybuttonName, setCategoryButtonName] = useState("Category")
    const [categories, setCategories] = useState([]);

    const ondelete = async () => {
        try {
          const response = await axios.delete(
            `http://localhost:8080/Product/${data._id}`,
            // {
            //   headers: {
            //     Authorization: `Bearer ${user.token}`,
            //   },
            // }
          );
          if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } catch (error) {
          console.error('There was an error!', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

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

    return(
        <>
            <div className="Admin-product-card">
                <div className="card mb-3" key={data._id}>
                    <div className="card__img__container" style={{width: "100%", height: "auto"}}>
                        <Carousel controls={true} indicators={true} interval={null}>
                            {data.Image.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img className="card__img" src={`http://localhost:8080/${image}`} alt="" />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <div className="card__descr-wrapper">
                        <p className="card__title">{data.Name}</p>
                        <p className="card__title">{data.Description}</p>
                        <p className="card__title">{data.Price}$</p>
                        <p className="card__title">{data.Categroy}</p>
                        <div className="card__buttons">
                            <button className="button-Update" onClick={()=> setShow(true)}> Update </button>
                            <button className="button-Delete" onClick={() => {ondelete(); onDelete();}}> Delete </button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={() => {setShow(false); {/*setCategoryButtonName("Category"); setErrorMessage("")*/}}}>
                <Modal.Header closeButton onClick={()=>{setCategoryButtonName("Category")}}>
                    <Modal.Title>Create Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form >
                <Form.Group controlId="formName">
                        <Carousel controls={true} indicators={false} interval={null}>
                            {data.Image.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img className="imgupdate" src={`http://localhost:8080/${image}`} alt="" />
                                    <Button variant="danger" className="DeleteImageButton" >
                                        Delete Image
                                    </Button>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        type="text"
                        value={data.Name}
                        placeholder="Enter Name"
                        required = {true}
                        // onChange={(event) => setCreationName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                        type="number"
                        value={data.Price}
                        placeholder="Enter Price"
                        required = {true}
                        // onChange={(event) => setCreationPrice(event.target.value)}

                        />
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        type="text"
                        value={data.Description}
                        placeholder="Enter description"
                        required = {true}
                        // onChange={(event) => setCreationDescription(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formImage">
                    <Form.Label>Images</Form.Label>
                        <Form.Control
                            type="file"
                            // value={data.Image}
                            placeholder="Enter images"
                            required= {true}
                            multiple={true}
                            // onChange={(event) => setCreationImages(event.target.files)}
                        />
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

export default Adminproductcard
