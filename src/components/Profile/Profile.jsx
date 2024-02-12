import React from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  return (
    <>
      <nav className="navbar bg-white">
        <div className="container-fluid">
          <a className="navbar-brand">Account Settings</a>
        </div>
      </nav>

      <div className="container cont">
        <div className="profile-section ">
          <div className="row justify-content-center align-items-start">
            <div className="column col-sm-12 col-md-6 ">
              <div className="d-flex align-items-center justify-content-start gap-4">
                <div className="Avatar">
                  <img
                    src="/images/Ellipse114@2x.png"
                    className="rounded-circle shadow-4"
                    alt="Avatar"
                  />
                  <span>
                    <FaCamera />
                  </span>
                </div>
                <div className="text-start">
                  <h5>Subhajit Bar</h5>
                  <p>subha@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="column col-12 my-info ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              accusantium quisquam, nam quos distinctio nulla non amet,
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

{
  /* 
    
            
    
    */
}
