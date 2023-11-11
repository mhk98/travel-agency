import React, { useState } from "react";
import { Button, Card, CardGroup, Modal } from "react-bootstrap";
import card1 from "../images/d1.jpg";
import card2 from "../images/d2.jpg";
import card3 from "../images/d3.jpg";
import card4 from "../images/d4.jpeg";
import card5 from "../images/d5.jpg";
import card6 from "../images/d6.jpeg";
import card7 from "../images/d7.jpeg";
import card8 from "../images/d8.jpg";
import Destinations from "../Data/DestinationDetails.json";
import VideoModal from "../Components/VideoModal";

const DestinationDetails = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="mx-12 mt-5 row justify-content-between">
      <div className="col-lg-10 mx-auto" style={{ marginBottom: "20px" }}>
        <img src={card1} alt="" style={{height:"550px"}} />
      </div>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Submit Your Information </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <iframe
            className="mx-auto"
            width="467"
            height="315"
            src="https://www.youtube.com/embed/O4PmcP9ecE4?si=2bZBsscaZSzqaLmZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
      <div className="image-grid">
        {Destinations.map((destination) => (
          <img src={destination.image} onClick={handleShow} alt="" />
        ))}
      </div>
      <div className="col-lg-10 mx-auto" style={{ marginTop: "40px" }}>
        <h1>About Canada</h1>
        <div>
          <h4>Banff National Park, Alberta:</h4>
          <p style={{ fontSize: "20px" }}>
            Located in the Canadian Rockies, Banff National Park is known for
            its stunning mountain scenery, turquoise lakes, and abundant
            wildlife. The town of Banff itself is a charming mountain resort.
            One of the most famous natural attractions in the world, Niagara
            Falls is a breathtaking spectacle. Visitors can take boat tours to
            get up close to the falls or explore the surrounding parks.
          </p>
        </div>
        <div>
          <h4>Niagara Falls, Ontario:</h4>
          <p style={{ fontSize: "20px" }}>
            Vancouver is a vibrant city surrounded by mountains and the Pacific
            Ocean. It offers a mix of outdoor activities, cultural attractions,
            and a diverse culinary scene. Stanley Park and Granville Island are
            must-visit spots. One of the most famous natural attractions in the
            world, Niagara Falls is a breathtaking spectacle. Visitors can take
            boat tours to get up close to the falls or explore the surrounding
            parks.
          </p>
        </div>
        <div>
          <h4>Vancouver, British Columbia:</h4>
          <p style={{ fontSize: "20px" }}>
            Located in the Canadian Rockies, Banff National Park is known for
            its stunning mountain scenery, turquoise lakes, and abundant
            wildlife. The town of Banff itself is a charming mountain resort.
            Vancouver is a vibrant city surrounded by mountains and the Pacific
            Ocean. It offers a mix of outdoor activities, cultural attractions,
            and a diverse culinary scene. Stanley Park and Granville Island are
            must-visit spots.
          </p>
        </div>
        <div>
          <h4>Quebec City, Quebec:</h4>
          <p style={{ fontSize: "20px" }}>
            With its cobblestone streets and European charm, Quebec City is a
            UNESCO World Heritage site. The historic Old Town, Château
            Frontenac, and the Plains of Abraham are key attractions. One of the
            most famous natural attractions in the world, Niagara Falls is a
            breathtaking spectacle. Visitors can take boat tours to get up close
            to the falls or explore the surrounding parks.
          </p>
        </div>
        <div>
          <h4>Whistler, British Columbia:</h4>
          <p style={{ fontSize: "20px" }}>
            A world-renowned ski resort, Whistler is equally popular in the
            summer for outdoor activities such as mountain biking and hiking.
            The village is known for its alpine atmosphere and vibrant après-ski
            scene. One of the most famous natural attractions in the world,
            Niagara Falls is a breathtaking spectacle. Visitors can take boat
            tours to get up close to the falls or explore the surrounding parks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
