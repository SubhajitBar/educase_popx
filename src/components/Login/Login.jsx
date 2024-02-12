import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate("/profile")
    }
  return (
    <div className="container cont">
      <div className=" login-container mt-5">
        <div className="row">
          <div className="column col-sm-12 col-md-6 col-lg-6 text-start ">
            <h2>Signin to your PopX Account</h2>
            <p className="mt-2 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              consectetur natus vel impedit.
            </p>
          </div>

          <form onSubmit={submitHandler} className="input-section column col-sm-12 col-md-6 col-lg-6 ">
            <div className="mb-3 input-area">
              <input
                type="email"
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="Enter email address"
              />
              <span>Email Address</span>
            </div>
            <div className="mb-3 mt-4 input-area">
              <input
                type="password"
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="Enter password"
              />
              <span>Password</span>
            </div>
            <div className="d-grid ">
              <button className="btn btn-login text-white" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
