import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand navbar-dark  bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <buthrefn
          className="navbar-hrefggler"
          type="buthrefn"
          data-bs-hrefggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="hrefggle navigation"
        >
          <span className="navbar-hrefggler-icon"></span>
        </buthrefn>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-a active" aria-current="page" href="#">
                Home
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  
};

Navbar.defaultProps = {
  title: "Set Title Here!",
  
};
