import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import "./feedback.css";

const Feedbacks = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!firstname || !lastname || !email || !phonenumber || !message) {
      console.log("bruh");
    } else {
      const userInfo = [`${firstname} ${lastname}`, email, phonenumber];

      const postData = {
        userInfo,
        Message: message,
      };

      try {
        console.log(postData.userInfo);
        const response = await axios.post(
          `https://rayn-look-backend.onrender.com/review`,
          postData
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        await Swal.fire({
          title: "Thank you for your Feedback!",
          icon: "success"
        });
        navigate('/');
      }
    }
  };

  return (
    <section className="custom-feedback-section">
      <div className="custom-feedback-container">
        <div className="custom-feedback-row">
          <div className="custom-feedback-col-lg-8 custom-feedback-col-xl-6">
            <div className="custom-feedback-card">
              <img
                src="https://images.ctfassets.net/u4vv676b8z52/3eSqiYDD8r4CvoCoOUMjvj/a289de057e4426ed6976e66e51aed9fe/common-eye-color-678x446.gif?fm=jpg&q=80"
                className="custom-feedback-img"
                alt="a colored eye"
              />
              <div className="custom-feedback-card-body">
                <h3 className="custom-feedback-heading mt-4">Give us your feedback</h3>
                <h6 className="custom-feedback-subheading">
                  Fill out your information below
                </h6>
                <form className="custom-feedback-form" onSubmit={handleSubmit}>
                  <div className="custom-form-row">
                    <div className="custom-form-col">
                      <div className="custom-form-group">
                        <label htmlFor="firstname" className="custom-form-label">
                          First Name
                        </label>
                        <input
                          placeholder="Please enter your first name"
                          type="text"
                          className="custom-form-control"
                          id="firstname"
                          required
                          onChange={(event) => setFirstname(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="custom-form-col">
                      <div className="custom-form-group">
                        <label htmlFor="lastname" className="custom-form-label">
                          Last Name
                        </label>
                        <input
                          placeholder="Please enter your last name"
                          type="text"
                          className="custom-form-control"
                          id="lastname"
                          required
                          onChange={(event) => setLastname(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="custom-form-row">
                    <div className="custom-form-col">
                      <div className="custom-form-group">
                        <label htmlFor="email" className="custom-form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="custom-form-control"
                          placeholder="Example@gmail.com"
                          required
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="custom-form-col">
                      <div className="custom-form-group">
                        <label htmlFor="phonenumber" className="custom-form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phonenumber"
                          className="custom-form-control"
                          pattern="[0-9]{8}"
                          placeholder="12345678"
                          required
                          onChange={(event) => setPhonenumber(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="custom-form-row">
                    <div className="custom-form-col">
                      <div className="custom-form-group">
                        <label htmlFor="feedback" className="custom-form-label">
                          Feedback
                        </label>
                        <textarea
                          id="feedback"
                          rows="6"
                          className="custom-form-control"
                          required
                          onChange={(event) => setMessage(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <button data-mdb-ripple-init type="submit" className="btn bg-warning1 w-25">
                    {loading ? (
                      <div className="spinner-border text-dark" role="status" style={{ width: '1.5rem', height: '1.5rem' }}>
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
