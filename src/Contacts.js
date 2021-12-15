import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPos } from "./Actions/contactActions";
import Contact from "./components/Contact";

function Contacts() {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);
  useEffect(() => {
    dispatch(getPos());
  }, []);

  return (
    <div>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
