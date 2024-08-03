import "./Footer.scss";
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <Box component={"footer"}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card>
            <CardMedia component={"img"} image={Logo} alt="Logo" />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Paper className="footer-box" sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom className="footer-title">
              Our Pages
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="footer-box" sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom className="footer-title">
              Our Social Media
            </Typography>
            <Box className="footer-links">
              <IconButton
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <YouTube />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
