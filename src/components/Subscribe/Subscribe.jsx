import "./Subscribe.scss";
import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import { Facebook, GitHub, LinkedIn, YouTube } from "@mui/icons-material";

export default function Subscribe() {
  return (
    <Box component={"div"} className="subscribe">
      <Grid container spacing={3}>
        <Grid item xs={12} className="sub-box">
          <Box className="sub-item">
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
