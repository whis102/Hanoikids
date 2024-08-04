import "./Subscribe.scss";
import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import { Facebook, GitHub, LinkedIn, YouTube } from "@mui/icons-material";

export default function Subscribe() {
  return (
    <Box component={"div"} className="subscribe">
      <Grid container spacing={3} className="sub-box">
        <Grid item xs={6} className="sub-item">
          <Box className="footer-links">
            <IconButton
              href="https://www.facebook.com/oc.voi.voii/"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook />
            </IconButton>
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
          </Box>
        </Grid>

        <Grid item xs={6}>
          <TextField variant="outlined" placeholder="Email address"></TextField>
          <Button variant="contained">Subscribe</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
