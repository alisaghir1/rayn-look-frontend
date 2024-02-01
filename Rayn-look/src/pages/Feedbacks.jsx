import React, { useState } from "react";
import axios from "axios";
import "./feedback.css"; // Import the custom CSS file

const Feedbacks = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted");

    if (!firstname || !lastname || !email || !phonenumber || !Message) {
      console.log("bruh");
    } else {
      const userInfo = [`${firstname} ${lastname}`, email, phonenumber];

      const postData = {
        userInfo,
        Message: Message,
      };

      try {
        console.log(postData.userInfo);
        const response = await axios.post(
          `http://localhost:8080/review`,
          postData
        );
        console.log(response);
      } catch (error) {
        console.log(error);
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
                alt="Sample photo"
              />
              <div className="custom-feedback-card-body">
                <h3 className="custom-feedback-heading">Give us your feedback</h3>
                <h6 className="custom-feedback-subheading">
                  fill out your information below
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
                          onChange={(event) => setfirstname(event.target.value)}
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
                          onChange={(event) => setlastname(event.target.value)}
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
                          onChange={(event) => setemail(event.target.value)}
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
                          onChange={(event) => setphonenumber(event.target.value)}
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

                  <button
                    type="submit"
                    className="custom-feedback-submit-btn"
                  >
                    Submit
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
