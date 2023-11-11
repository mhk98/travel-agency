import Carousel from "react-bootstrap/Carousel";

import slider1 from "../images/slider-14-01.png";
import slider2 from "../images/slider-14-02.png";
import slider3 from "../images/slider-14-03.png";
import "./Slider.css";
import { useState } from "react";
function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ height: "500px" }}
    >
      <Carousel.Item>
        <img src={slider1} alt="" />
        <Carousel.Caption>
          <h3 className="text-white">Classic</h3>
          <p className="text-white">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider2} alt="" />
        <Carousel.Caption>
          <h3 className="text-white">Standard</h3>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider3} alt="" />
        <Carousel.Caption>
          <h3 className="text-white">Premimum</h3>
          <p className="text-white">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
