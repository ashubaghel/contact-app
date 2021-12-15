import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCont } from "../Actions/contactActions";
import { useDispatch, useSelector } from "react-redux";
import { updateCont } from "../Actions/contactActions";
import { useNavigate } from "react-router-dom";

function Edit_contact() {
  const contact = useSelector((state) => state.contacts.contact);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const disPatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    disPatch(getCont(id));
    if (contact !== null) {
      setUser(contact);
    }
  }, []);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCont(user));
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Edit Contact</h1>
          <div className=" col-lg-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
              value={user.name}
            />
            <label for="exampleFormControlInput1" class="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your Phone number"
              name="phone"
              value={user.phone}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className=" col-lg-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={user.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="website"
              value={user.website}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit_contact;
