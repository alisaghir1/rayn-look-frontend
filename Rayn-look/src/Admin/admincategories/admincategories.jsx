import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios'; // Import Axios
import "./admincategories.css";
import Admincategorycard from "./admincategorycard";
import useCategoriesHook from '../../hooks/useCategoriesHook';

const Admincategories = () => {
    const { categories, categoryLoading } = useCategoriesHook();
    const [showModal, setShowModal] = useState(false);
    const [productName, setProductName] = useState('');

    const handleCreateButtonClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setProductName('');
    }

    const handleSubmit = async () => {
        try {
            // Use Axios for the POST request
            const response = await axios.post('http://localhost:8080/category', {
                Name: productName,
            });

            // Handle the response as needed
            // You can check if the response status is OK or handle errors
            console.log('Category creation response:', response.data);
            
            // Close the modal after submitting
            handleCloseModal();
        } catch (error) {
            console.error('Error creating category:', error);
        }
    }

    return (
        <>
            <button className="admin-Main-Create" onClick={handleCreateButtonClick} style={{ marginTop: "30px" }}>
                Create
            </button>
            <div className="admin-categories-container">
                {categoryLoading ? (
                    <p>Loading categories...</p>
                ) : (
                    categories.map(category => (
                        <Admincategorycard key={category.id} category={category} />
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
        </>
    );
}

export default Admincategories;
