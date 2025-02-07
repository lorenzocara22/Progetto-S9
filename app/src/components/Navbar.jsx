import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark"
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            style={{ width: "120px", height: "60px" }}
            alt="Netflix Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-bold" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                My List
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div
              id="kids"
              className="fw-bold"
              style={{ color: "#f5f5f1", fontSize: "0.8em" }}
            >
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
