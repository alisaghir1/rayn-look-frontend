import React from "react";
import { useState, useEffect } from "react";
import useProductsHook from "../hooks/useProductsHook";
import useReviesHook from "../hooks/useReviewsHook";

const Feedbacks = () => {

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: 'var(--primary)' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                className="w-100"
                style={{ borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem' }}
                alt="Sample photo"
              />
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">FeedBack</h3>

                <form className="row">
                <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label htmlFor="firstname" className="form-label">
                          First Name
                        </label>
                        <input type="text" className="form-control" id="firstname" required/>
                      </div>
                    </div>
                  
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label htmlFor="lastname" className="form-label">
                          Last Name
                        </label>
                        <input type="text" className="form-control" id="lastname" required/>
                      </div>
                    </div>
                  
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input type="email" id="email" className="form-control" placeholder="Example@gmail.com" required/>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="phonenumber">
                          Phone Number
                        </label>
                        <input type="tel" id="phonenumber" className="form-control" pattern="[0-9]{3}-[0-9]{8}" placeholder="961-12345678" required/>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4 mb-md-5">
                    <div className="col-md-6">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="feedback">
                          Feedback
                        </label>
                        <input type="text" id="feedback" className="form-control" required/>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-warning bg-warning1 p-3 text-black">
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
