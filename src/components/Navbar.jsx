import React from "react";
import PropTypes from "prop-types";
import "../../Styles/navbar.style.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      style={{
        boxShadow:
          props.mode === "dark"
            ? "0 -3px 2px 2px white"
            : "0 -3px 2px 2px black",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/About">
              {props.aboutText}
            </Link>
          </div>
        </div>
        <div className="d-flex">
          <div
            className="bg-primary rounded mx-2"
            onClick={() => {
              props.toggleMode("primary");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-success rounded mx-2"
            onClick={() => {
              props.toggleMode("success");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-danger rounded mx-2"
            onClick={() => {
              props.toggleMode("danger");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-warning rounded mx-2"
            onClick={() => {
              props.toggleMode("warning");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
        </div>
        <div
          className={`form-check form-switch mx-2 text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={() => {
              props.toggleMode("dark");
            }}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Toggle Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// defaultProps
Navbar.defaultProps = {
  title: "Text is here",
  aboutText: "About",
};
