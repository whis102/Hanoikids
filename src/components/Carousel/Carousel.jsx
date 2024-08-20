import "./Carousel.scss";
import { Box } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slides from "../../data/slides";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box component={"div"} className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box className="carousel-slide" key={index}>
            <img src={slide.src} alt={slide.alt} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
