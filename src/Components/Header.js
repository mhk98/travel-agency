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
    // <div>
    //   <div className="header-main">
    //     <div className="d-flex justify-between  gap-4">
    //       <p className="text-[#697085]">(000)999-898-999</p>
    //       <p className="text-[#697085]">|</p>
    //       <p className="text-[#697085]">info@trisog</p>
    //     </div>
    //     <div className="d-flex justify-between align-items-center gap-3">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         height="1em"
    //         viewBox="0 0 512 512"
    //       >
    //         <path
    //           d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
    //           fill="#697085"
    //         />
    //       </svg>

    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         height="1em"
    //         viewBox="0 0 448 512"
    //       >
    //         <path
    //           d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
    //           fill="#697085"
    //         />
    //       </svg>

    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         height="1em"
    //         viewBox="0 0 488 512"
    //       >
    //         <path
    //           d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
    //           fill="#697085"
    //         />
    //       </svg>

    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         height="1em"
    //         viewBox="0 0 384 512"
    //       >
    //         <path
    //           d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
    //           fill="#697085"
    //         />
    //       </svg>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M12 2v20" fill="none" stroke="#697085" stroke-width="2" />
    //       </svg>

    //       <select className=" bg-[#F2F3F5]">
    //         <option className="text-[#697085]">EUR</option>
    //         <option className="text-[#697085]">Saab</option>
    //         <option className="text-[#697085]">Opel</option>
    //         <option className="text-[#697085]">Audi</option>
    //       </select>
    //     </div>
    //   </div>
    //   <Navbar expand="lg" className="bg-body-tertiary px-5">
    //     <Container fluid>
    //       <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="navbarScroll" />
    //       <Navbar.Collapse id="navbarScroll">
    //         <Nav
    //           className="me-auto my-2 my-lg-0"
    //           style={{ maxHeight: "100px" }}
    //           navbarScroll
    //         >
    //           <Nav.Link href="/">Home</Nav.Link>
    //           <Nav.Link href="/destination-details">
    //             Destination Details
    //           </Nav.Link>
    //           <Nav.Link href="/about">About</Nav.Link>
    //         </Nav>
    //         {/* <Form className="d-flex">
    //           <Form.Control
    //             type="search"
    //             placeholder="Search"
    //             className="me-2"
    //             aria-label="Search"
    //           />
    //           <Button className="me-2" variant="outline-success">
    //             Search
    //           </Button>
    //         </Form> */}
    //         <button type="button" class="btn btn-dark">
    //           Login
    //         </button>

    //         <img src={profile} alt="Avatar" className="avatar ms-4"></img>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </div>

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
