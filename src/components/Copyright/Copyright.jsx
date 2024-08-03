import "./Copyright.scss";
import { Box, Typography } from "@mui/material";

export default function Copyright() {
  return (
    <Box className="copy-box">
      <Typography variant="body2" textAlign={"center"} className="copyright">
        © {new Date().getFullYear()} HANOIKIDS VOLUNTARY ENGLISH TOUR GUIDING
        CLUB. ALL RIGHTS RESERVED.
      </Typography>
    </Box>
  );
}
