import React from "react";
import PropTypes from "prop-types";
import "../../Styles/navbar.style.css";
import { useState } from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  const handleColorChange = (color) => {
    if (props.colour === "white") {
      props.setColour(color);
      document.body.style.backgroundColor = color;
    } else {
      props.setColour("white");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
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
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              {props.aboutText}
            </a>
          </div>
        </div>
        <button
          className="btn btn-success mx-1 btns "
          onClick={() => handleColorChange("#013501")}
        ></button>
        <button
          className="btn btn-danger mx-1 btns"
          onClick={() => handleColorChange("#3b0101")}
        ></button>
        <button
          className="btn btn-primary mx-1 btns"
          onClick={() => handleColorChange("#050541")}
        ></button>
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
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable DarkMode
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
