import "./Title.scss";
import { Typography } from "@mui/material";

export default function Title({ children, heading }) {
  return (
    <Typography
      variant={heading}
      gutterBottom
      className="title"
      textAlign={"center"}
    >
      {children}
    </Typography>
  );
}
