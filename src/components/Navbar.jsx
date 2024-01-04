import React from "react";
import PropTypes from "prop-types";
import "../../Styles/navbar.style.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

export default function Navbar(props) {
  let location = useLocation();
  console.log(location);

  const homeLink = useRef();
  const aboutLink = useRef();

  useEffect(() => {
    if (location.pathname === "/") {
      homeLink.current.classList.add("active");
    } else if (location.pathname === "/About") {
      aboutLink.current.classList.add("active");
    }
  }, [location]);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      style={{
        boxShadow:
          props.mode === "dark"
            ? "0 -3px 2px 2px white"
            : "0 -3px 2px 2px black",
        position: "fixed",
        top: "0",
        width: "100vw",
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
            <Link className="nav-link " ref={homeLink} to="/">
              Home
            </Link>
            <Link className="nav-link " ref={aboutLink} to="/About">
              {props.aboutText}
            </Link>
          </div>
        </div>
        <div className="d-flex">
          <div
            className="bg-primary rounded mx-1"
            onClick={() => {
              props.toggleMode("primary");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-success rounded mx-1"
            onClick={() => {
              props.toggleMode("success");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-danger rounded mx-1"
            onClick={() => {
              props.toggleMode("danger");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-warning rounded mx-1"
            onClick={() => {
              props.toggleMode("warning");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-secondary rounded mx-1"
            onClick={() => {
              props.toggleMode("dark");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
        </div>
        <p
          className={`my-2 mx-1  text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          Toggle Mode
        </p>
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
