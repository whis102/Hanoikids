import { Box } from "@mui/material";

import Slider from "react-slick";
import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ThangLongCitadel from "../../assets/imperial-citadel-of-thang-long.webp";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={ThangLongCitadel} alt="Slide 1" />
        </div>
        <div className="carousel-slide">
          <img src={ThangLongCitadel} alt="Slide 1" />
        </div>
        <div className="carousel-slide">
          <img src={ThangLongCitadel} alt="Slide 1" />
        </div>
      </Slider>
    </Box>
  );
}
