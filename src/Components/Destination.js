import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Destination.css";
import { useNavigate } from "react-router-dom";
import Destinations from "../Data/Destination.json";

const Destination = () => {
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const userInfo = JSON.stringify(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      navigate("/login");
    }
    localStorage.setItem("userInfo", userInfo);
  };

  // useEffect(() => {
  //   fetch("Destination.json")
  //     .then((res) => res.json())
  //     .then((data) =>
  //     {
  //       const match = data.filter((d) => d.location.includes(searchText));
  //       setSearchResult(match);
  //     }
  //     );
  // }, [searchText]);

  useEffect(() => {
    const match = Destinations.filter((d) =>
      d.location.toLowerCase().includes(searchText)
    );
    setSearchResult(match);
  }, [searchText]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  // const filteredProducts = destinations.filter((destination) =>
  //   destination.location.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Enjoy Your Vacation With Us
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Tempor erat elitr rebum at clita diam amet diam et eos erat
                ipsum lorem sit
              </p>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  onChange={handleSearchChange}
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Eg: Thailand"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ marginTop: 7 }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="destination1 section-padding"
        style={{ margin: "0 40px" }}
      >
        <h5>
          <i>Destination</i>
        </h5>
        <h1>Top Destination</h1>
        <div className="row">
          <div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Submit Your Information </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="register-container">
                  <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        className="form-input border"
                        type="text"
                        name="Name"
                        id="username"
                        value={formData.Name} // Corrected property name
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-input border"
                        type="email"
                        name="Email"
                        id="email"
                        value={formData.Email} // Corrected property name
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Phone</label>
                      <input
                        className="form-input border"
                        type="number"
                        name="Phone"
                        id="phone"
                        value={formData.Phone} // Corrected property name
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Date</label>
                      <input
                        className="form-input border"
                        type="date"
                        name="Date"
                        id="email"
                        value={formData.Date} // Corrected property name
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      variant="primary"
                      className="bg-primary p-2 text-white"
                      style={{ width: "100px" }}
                      onClick={handleClose}
                    >
                      Save
                    </button>
                  </form>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          {searchResult.map((item) => (
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  <img src={item.image} alt="" />
                </div>
                <div className="con">
                  <h5>
                    <a href="">
                      <i className="ti-location-pin" /> {item.location}
                    </a>
                  </h5>
                  <div className="line" />
                  <div className="row facilities">
                    <div className="col col-md-8">
                      <p>{item.packages} Tour Packages</p>
                    </div>
                    <div className="col col-md-4 text-right">
                      <div className="permalink">
                        <Button variant="transparent" onClick={handleShow}>
                          Explore <i className="ti-arrow-right" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="col-md-4">
            <div className="item">
              <div className="position-re o-hidden">
                {" "}
                <img src="assets/images/canada1.jpg" alt />
              </div>
              <div className="con">
                <h5>
                  <a href=" ">
                    <i className="ti-location-pin" /> Canada
                  </a>
                </h5>
                <div className="line" />
                <div className="row facilities">
                  <div className="col col-md-8">
                    <p>3+ Tour Packages</p>
                  </div>
                  <div className="col col-md-4 text-right">
                    <div className="permalink">
                      <a href=" ">
                        Explore <i className="ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <div className="position-re o-hidden">
                <img src="assets/images/italy1.jpg" alt />
              </div>
              <div className="con">
                <h5>
                  <a href=" ">
                    <i className="ti-location-pin" /> Italy
                  </a>
                </h5>
                <div className="line" />
                <div className="row facilities">
                  <div className="col col-md-8">
                    <p>7+ Tour Packages</p>
                  </div>
                  <div className="col col-md-4 text-right">
                    <div className="permalink">
                      <a href=" ">
                        Explore <i className="ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <div className="position-re o-hidden">
                <img src="assets/images/greece1.jpg" alt />
              </div>
              <div className="con">
                <h5>
                  <a href=" ">
                    <i className="ti-location-pin" /> Greece
                  </a>
                </h5>
                <div className="line" />
                <div className="row facilities">
                  <div className="col col-md-8">
                    <p>6+ Tour Packages</p>
                  </div>
                  <div className="col col-md-4 text-right">
                    <div className="permalink">
                      <a href=" ">
                        Explore <i className="ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <div className="position-re o-hidden">
                <img src="assets/images/france1.jpg" alt />
              </div>
              <div className="con">
                <h5>
                  <a href=" ">
                    <i className="ti-location-pin" /> France
                  </a>
                </h5>
                <div className="line" />
                <div className="row facilities">
                  <div className="col col-md-8">
                    <p>10+ Tour Packages</p>
                  </div>
                  <div className="col col-md-4 text-right">
                    <div className="permalink">
                      <a href=" ">
                        Explore <i className="ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <div className="position-re o-hidden">
                <img src="assets/images/dubai1.jpg" alt />
              </div>
              <div className="con">
                <h5>
                  <a href=" ">
                    <i className="ti-location-pin" /> Dubai
                  </a>
                </h5>
                <div className="line" />
                <div className="row facilities">
                  <div className="col col-md-8">
                    <p>7+ Tour Packages</p>
                  </div>
                  <div className="col col-md-4 text-right">
                    <div className="permalink">
                      <a href=" ">
                        Explore <i className="ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <div className="position-re o-hidden">
                {" "}
                <img src="assets/images/canada1.jpg" alt />{" "}
              </div>
              <div className="con">
                <h5>
                  <a href=" ">
                    <i className="ti-location-pin" /> Canada
                  </a>
                </h5>
                <div className="line" />
                <div className="row facilities">
                  <div className="col col-md-8">
                    <p>3+ Tour Packages</p>
                  </div>
                  <div className="col col-md-4 text-right">
                    <div className="permalink">
                      <a href=" ">
                        Explore <i className="ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <div className="position-re o-hidden">
                <img src="assets/images/italy1.jpg" alt />
              </div>
              <div className="con">
                <h5>
                  <a href=" ">
                    <i className="ti-location-pin" /> Italy
                  </a>
                </h5>
                <div className="line" />
                <div className="row facilities">
                  <div className="col col-md-8">
                    <p>7+ Tour Packages</p>
                  </div>
                  <div className="col col-md-4 text-right">
                    <div className="permalink">
                      <a href=" ">
                        Explore <i className="ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <div className="position-re o-hidden">
                <img src="assets/images/greece1.jpg" alt />
              </div>
              <div className="con">
                <h5>
                  <a href=" ">
                    <i className="ti-location-pin" /> Greece
                  </a>
                </h5>
                <div className="line" />
                <div className="row facilities">
                  <div className="col col-md-8">
                    <p>6+ Tour Packages</p>
                  </div>
                  <div className="col col-md-4 text-right">
                    <div className="permalink">
                      <a href=" ">
                        Explore <i className="ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <div className="position-re o-hidden">
                <img src="assets/images/maldives1.jpg" alt />
              </div>
              <div className="con">
                <h5>
                  <a href=" ">
                    <i className="ti-location-pin" /> Maldives
                  </a>
                </h5>
                <div className="line" />
                <div className="row facilities">
                  <div className="col col-md-8">
                    <p>4+ Tour Packages</p>
                  </div>
                  <div className="col col-md-4 text-right">
                    <div className="permalink">
                      <a href=" ">
                        Explore <i className="ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <div className="position-re o-hidden">
                {" "}
                <img src="assets/images/canada1.jpg" alt />{" "}
              </div>
              <div className="con">
                <h5>
                  <a href=" ">
                    <i className="ti-location-pin" /> Canada
                  </a>
                </h5>
                <div className="line" />
                <div className="row facilities">
                  <div className="col col-md-8">
                    <p>3+ Tour Packages</p>
                  </div>
                  <div className="col col-md-4 text-right">
                    <div className="permalink">
                      <a href=" ">
                        Explore <i className="ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <div className="position-re o-hidden">
                <img src="assets/images/italy1.jpg" alt />
              </div>
              <div className="con">
                <h5>
                  <a href=" ">
                    <i className="ti-location-pin" /> Italy
                  </a>
                </h5>
                <div className="line" />
                <div className="row facilities">
                  <div className="col col-md-8">
                    <p>7+ Tour Packages</p>
                  </div>
                  <div className="col col-md-4 text-right">
                    <div className="permalink">
                      <a href=" ">
                        Explore <i className="ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Destination;
