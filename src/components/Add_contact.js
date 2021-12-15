import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_contact } from "../Actions/contactActions";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";

function Add_contact() {
  const [user, setUser] = useState();
  const disDatch = useDispatch();
  const history = useNavigate();
  const uid = shortid.generate();

  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // user.id = uid;
    disDatch(add_contact(user));
    history("/");
  };

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
          <h1 className="text-center">Add Contact</h1>

          <div className=" col-lg-6 mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              onChange={(e) => {
                handelChange(e);
              }}
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your Phone number"
              name="phone"
              onChange={(e) => {
                handelChange(e);
              }}
            />
          </div>
          <div className=" col-lg-6 mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your email"
              name="email"
              onChange={(e) => {
                handelChange(e);
              }}
            />
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Website
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your Website"
              name="website"
              onChange={(e) => {
                handelChange(e);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add_contact;
