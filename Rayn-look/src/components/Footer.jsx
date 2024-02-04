import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./components.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from "emailjs-com";

const Footer = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const userData = {
    name,
    email,
    message
  }
  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log(userData)
    emailjs
      .send(
        "service_50xsf8d",
        "template_ziys0h8",
        userData,
        "SxdeFlZArqjSkFMpF"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  return (
    <>
      <footer
        className="text-center text-lg-start text-dark"
        style={{ backgroundColor: "transparent" }}
      >
        <section
          className="d-flex justify-content-between p-4 text-white"
          style={{ backgroundColor: "black" }}
        >
          <div className="me-5 text-warning1">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a
              href="https://www.facebook.com/p/Rayn-Look-100071182973185/"
              target="_blank"
              className="text-warning1 me-4"
            >
              <FaFacebook style={{ fontSize: "20px" }} />
            </a>
            <a
              href="https://www.instagram.com/rayn_look/?hl=en"
              target="_blank"
              className="text-warning1 me-4"
            >
              <FaInstagram style={{ fontSize: "20px" }} />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center  text-md-start">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
                <h6 className="text-uppercase fw-bold text-warning1">
                  Rayn Look
                </h6>
                <hr
                  className=" mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "black",
                    height: "2px",
                  }}
                />
                <p>
                  Enhance your vision, elevate your style. See the world through
                  a new lens at Rayn-look.
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                <h6 className="text-uppercase fw-bold text-warning1">
                  Useful links
                </h6>
                <hr
                  className="mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "black",
                    height: "2px",
                  }}
                />
                <p>
                  <Link to={"/"} className="text-dark">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to={"/products"} className="text-dark">
                    Our Products
                  </Link>
                </p>
                <p>
                  <Link to={"/Feedbacks"} className="text-dark">
                    Give us a feedback
                  </Link>
                </p>
                <p>
                  <Link to={"/privacy-policy"} className="text-dark">
                    Privacy policy
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
                <h6 className="text-uppercase fw-bold text-warning1">
                  Contact
                </h6>
                <hr
                  className="mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "black",
                    height: "2px",
                  }}
                />
                <p>
                  <i className="fas fa-home mr-3"></i>Beirut, Lebanon
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> Rayn-look@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 961 78855963
                </p>

                <button
                  style={{ cursor: "pointer", textDecoration: "none" }}
                  onClick={() => setShow(true)}
                  className="btn bg-warning1"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-3">
          <span className="text-warning1">©</span> 2024 Copyright<span>@</span>
          Rayn-look
        </div>
      </footer>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                required
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter your email address"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                value={message}
                rows={3}
                placeholder="Enter Message"
                required
                onChange={(event) => setMessage(event.target.value)}
              />
            </Form.Group>
            <Button
              variant="btn bg-warning1 mt-3"
              className="SubmitButton"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Footer;
