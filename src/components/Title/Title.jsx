import "./Title.scss";
import { Typography } from "@mui/material";

export default function Title({ children }) {
  return (
    <Typography
      variant="h4"
      gutterBottom
      textAlign={"center"}
      className="title"
    >
      {children}
    </Typography>
  );
}
