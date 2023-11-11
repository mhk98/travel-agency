import React from "react";
import "./Header.css";
import profile from "../images/mohsin.jpg";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };
  return (
    <div>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" />
                123 Street, New York, USA
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                +012 345 6789
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2" />
                info@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href
              >
                <i className="fab fa-twitter fw-normal" />
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href
              >
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href
              >
                <i className="fab fa-linkedin-in fw-normal" />
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href
              >
                <i className="fab fa-instagram fw-normal" />
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                href
              >
                <i className="fab fa-youtube fw-normal" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-map-marker-alt me-3" />
              Tourist
            </h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/destination-details" className="nav-item nav-link">
                Destination Details
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
            </div>
            <img src={profile} alt="Avatar" className="avatar"></img>

            {token ? (
              <Link
                onClick={handleLogout}
                className="btn btn-primary rounded-pill py-2 px-4 ms-2"
              >
                LogOut
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={handleLogout}
                className="btn btn-primary rounded-pill py-2 px-4 ms-2"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End */}
    </div>
  );
};

export default Header;
