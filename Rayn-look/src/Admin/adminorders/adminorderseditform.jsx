import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const OrdersEdit = ({ onHide, show }) => {

  const [newData, setNewData] = useState({
    Name: "",
    Price: "",
    Description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Order</Modal.Title>
      </Modal.Header> 
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              value={newData.Name}
              placeholder="Enter Name"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="Price"
              // value={newData.Price}
              placeholder="Enter location"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="Price"
              value={newData.Price}
              placeholder="Enter Phone Number"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="Price"
              // value={newData.Price}
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="Price"
              value={newData.Price}
              placeholder="Enter Date"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Total Amount</Form.Label>
            <Form.Control
              type="number"
              name="Description"
              value={newData.Description}
              placeholder="Enter Total Amount"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary mt-3" className="SubmitButton" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OrdersEdit;
