import "./Subscribe.scss";
import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import { GitHub, LinkedIn, YouTube, Language } from "@mui/icons-material";
import { BiLogoTripAdvisor } from "react-icons/bi";

export default function Subscribe() {
  return (
    <Box component={"div"} className="subscribe">
      <Grid container spacing={3}>
        <Grid item xs={12} className="sub-box">
          <Box className="sub-item">
            <IconButton
              href="https://github.com/whis102"
              target="_blank"
              aria-label="Github"
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/ocvoivoii/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/@zWhis155"
              target="_blank"
              aria-label="Youtube"
            >
              <YouTube />
            </IconButton>

            <IconButton
              href="https://www.tripadvisor.com/Attraction_Review-g293924-d1752779-Reviews-Hanoikids_Voluntary_English_Tour_Guiding_Club-Hanoi.html"
              target="_blank"
              aria-label="TripAdvisor"
            >
              <BiLogoTripAdvisor />
            </IconButton>

            <IconButton
              href="nguyen-chi-cong-cv.vercel.app"
              target="_blank"
              aria-label="Nguyen Chi Cong Resume"
            >
              <Language />
            </IconButton>
          </Box>

          <Box className="sub-item">
            <TextField
              variant="outlined"
              placeholder="Email address"
              className="input-box"
            />
            <Button variant="contained" className="sub-btn">
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
