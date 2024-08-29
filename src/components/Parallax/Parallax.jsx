import "./Parallax.scss";
import { Card, CardMedia } from "@mui/material";
import { useEffect, useRef } from "react";

export default function Parallax() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;
    const initialY = parallaxElement.offsetTop;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const translateY = (scrollY - initialY) * 0.2;
      parallaxElement.style.transform = `translateY(${translateY}px)`;
    });
  }, []);

  return (
    <Card sx={{ maxHeight: 650, marginTop: "2rem", borderRadius: "2rem" }}>
      <CardMedia
        sx={{ width: "100%", height: 650 }}
        component={"image"}
        className="parallax-image"
        ref={parallaxRef}
      />
    </Card>
  );
}
