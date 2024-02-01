import React, { useState } from "react";
import axios from "axios";

const Feedbacks = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted");
  
    if (!firstname || !lastname || !email || !phonenumber || !Message)  {
      console.log("bruh");
    } else {
      const userInfo = [
        `${firstname} ${lastname}`,
        email,
        phonenumber
      ];
  
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
    <section
      className="h-100 h-custom w-100"
      style={{
        backgroundImage: `url('')`,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <div className="py-5 h-100 w-100">  
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img
                src="https://images.ctfassets.net/u4vv676b8z52/3eSqiYDD8r4CvoCoOUMjvj/a289de057e4426ed6976e66e51aed9fe/common-eye-color-678x446.gif?fm=jpg&q=80"
                className="w-100"
                style={{
                  borderTopLeftRadius: ".3rem",
                  borderTopRightRadius: ".3rem",
                }}
                alt="Sample photo"
              />
              <div className="card-body  d-flex flex-column align-items-center ">
                <h3 className="pb-2 pb-md-0 px-md-2">Give us your feedback</h3>
                <h6 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 opacity-50">fill out your informations below</h6>
                <form className="row " onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-between gap-5 w-100">
                    <div className="w-50">
                      <div className="mb-4">
                        <div className="form-outline">
                          <label
                            htmlFor="firstname"
                            className="form-label d-flex justify-content-start my-2 "
                          >
                            First Name
                          </label>
                          <input
                            placeholder='Please enter your first name'
                            type="text"
                            className="form-control"
                            id="firstname"
                            required
                            onChange={(event) =>
                              setfirstname(event.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="w-50">
                      <div className="mb-4">
                        <div className="form-outline">
                          <label
                            htmlFor="lastname"
                            className="form-label d-flex justify-content-start my-2"
                          >
                            Last Name
                          </label>
                          <input
                            placeholder='Please enter your last name'

                            type="text"
                            className="form-control"
                            id="lastname"
                            required
                            onChange={(event) =>
                              setlastname(event.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between gap-5 w-100">
                    <div className="w-50">
                      <div className="row mb-4">
                        <div className="form-outline">
                          <label
                            className="form-label d-flex justify-content-start my-2"
                            htmlFor="email "
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Example@gmail.com"
                            required
                            onChange={(event) => setemail(event.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="w-50">
                      <div className="row mb-4">
                        <div className="form-outline">
                          <label
                            className="form-label d-flex justify-content-start my-2"
                            htmlFor="phonenumber"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phonenumber"
                            className="form-control"
                            pattern="[0-9]{8}"
                            placeholder="12345678"
                            required
                            onChange={(event) =>
                              setphonenumber(event.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4 mb-md-5 m-auto">
                    <div className="">
                      <div className="form-outline">
                        <label
                          className="form-label d-flex justify-content-center"
                          htmlFor="feedback"
                        >
                          Feedback
                        </label>
                        <textarea
                          id="feedback"
                          rows="6"
                          className="form-control"
                          required
                          onChange={(event) => setMessage(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning bg-warning1 p-3 text-black"
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