import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";

export default function Nav() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white  ">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center me-auto" to="/">
          <img src="/logo.svg" alt="SATARS Logo" className="logo" />
          <h3 className="font-weight-bold">SATARS</h3>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/#home">Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/#about">About</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/#features">Features</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/#team">Our Team</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/#contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

      
        <button className="btn request-invite-btn d-none d-lg-inline-block ms-auto">
          Request Invite
        </button>
      </div>
    </nav>
  );
}
