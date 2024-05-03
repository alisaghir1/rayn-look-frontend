import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios'; // Import Axios
import "./admincategories.css";
import Admincategorycard from "./admincatogeycard";
import useCategoriesHook from '../../hooks/useCategoriesHook';
import EyeLoader from '../../components/EyeLoader';
import Swal from 'sweetalert2';

const Admincategories = () => {
    const { categories, categoryLoading,setCategory } = useCategoriesHook();
    const [showModal, setShowModal] = useState(false);
    const [productName, setProductName] = useState('');



    const handleCreateButtonClick = () => {
        setShowModal(true);
    }


    const handleCloseModal = () => {
        setShowModal(false);
        setProductName('');
    }

    const handleDelete = async (deletedCateogryId) => {
        setCategory((prevCategory) => prevCategory.filter((Category) => Category._id !== deletedCateogryId));
      };

    const handleSubmit = async () => {
        try {
            // Use Axios for the POST request
            const response = await axios.post('https://rayn-look-backend.onrender.com/category', {
                Name: productName,
            });

            // Handle the response as needed
            // You can check if the response status is OK or handle errors
            console.log('Category creation response:', response.data);
            
            // Close the modal after submitting
            handleCloseModal();
            setCategory(prevCategory => [...prevCategory, response.data]);
            await Swal.fire({
                title: "Added Successfully!",
                text: "Congrats on your new Category rayn!",
                icon: "success"
              });
        } catch (error) {
            console.error('Error creating category:', error);
        }
    }

    return (
        <>
        {categoryLoading ? (<EyeLoader /> ) : (
        <div>
            <button className="admin-Main-Create" onClick={handleCreateButtonClick} style={{ marginTop: "30px" }}>
                Create
            </button>

            <div className="admin-categories-container">
            {categoryLoading ? (
                   <EyeLoader />
                ) : (
                    categories.map((category, index) => (
                        <Admincategorycard  key={index}  category={category}  onDelete={() => handleDelete(category._id)} />
                    ))
                )}
            </div>
            {/* Category creation modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                required={true}
                                value={productName}
                                onChange={(event) => setProductName(event.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary mt-3" className="SubmitButton" type="button" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            </div>
            )}
        </>
    );
}

export default Admincategories;