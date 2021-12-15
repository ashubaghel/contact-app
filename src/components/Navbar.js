import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            Contact Book
          </Link>

          <Link
            className="navbar-brand  text-warning text-left"
            to="/add_contact"
          >
            Add Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
