import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { delContact } from "../Actions/contactActions";
function Contact(props) {
  const { id, name, phone, email, website } = props.contact;
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(delContact(id));
  };

  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{website}</td>
        <td>
          <Link className="btn btn-primary" to={`/edit_contact/${id}`}>
            Edit
          </Link>{" "}
          !
          <button
            className="btn btn-danger"
            onClick={() => {
              handleClick(id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Contact;
