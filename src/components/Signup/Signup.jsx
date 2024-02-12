import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/profile");
  };
  return (
    <div className="container cont">
      <form className="signup-section" onSubmit={submitHandler}>
        <div className="row">
          <div className="column col-12 ">
            <h1 className="my-5">Create your PopX account</h1>
            <div className="input-section column col-12 d-flex flex-column gap-3">
              <div className="mb-3 input-area">
                <input
                  type="text"
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Enter your full name"
                  //required
                />
                <span className="label">Full Name</span>
              </div>
              <div className="mb-3 input-area">
                <input
                  type="number"
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Enter phone number"
                  //required
                />
                <span className="label">Phone Number</span>
              </div>
              <div className="mb-3 input-area">
                <input
                  type="email"
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Enter email address"
                  //required
                />
                <span className="label">Email Address</span>
              </div>
              <div className="mb-3 input-area">
                <input
                  type="password"
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Enter passwod"
                  //required
                />
                <span className="label">Password</span>
              </div>
              <div className="input-area">
                <input
                  type="text"
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Enter company name"
                />
                <span className="labelNOR">Company Name</span>
              </div>

              <div className="label-checkbox">Are you an Agency?</div>
              <div className="check d-flex gap-2 mb-4">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    defaultChecked
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="column col-12 d-flex align-items-end">
            <div className="d-grid gap-3 col-12 mx-auto ">
              <button className="btn btn-signup text-light my-5" type="submit">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
