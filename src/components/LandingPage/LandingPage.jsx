import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const navigatePage = (url) => {
    navigate(url);
  };

  return (
    <div className="container cont">
      <div className="hero-section">
        <div className="row">
          <div className="column col-sm-12 col-md-6 col-lg-6 text-start">
            <h1>Welcome to PopX</h1>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              consectetur natus vel impedit.
            </p>
          </div>
          <div className="column col-sm-12 col-md-6 col-lg-6 ">
            <div className="d-grid gap-3 col-md-6 col-sm-12 mx-auto">
              <button
                className="btn btn-signup text-light"
                type="button"
                onClick={() => navigatePage("/signup")}
              >
                Create Account
              </button>
              <button
                className="btn btn-login "
                type="button"
                onClick={() => navigatePage("/login")}
              >
                Already Registered? Login
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
