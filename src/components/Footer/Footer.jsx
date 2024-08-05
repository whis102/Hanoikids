import "./Footer.scss";
import { Box, Card, CardMedia, Grid, Paper, Typography } from "@mui/material";

import Logo from "../../assets/logo.png";
import PayPal from "../../assets/paypal-logo.webp";
import TripAd from "../../assets/tripadvisor-logo.webp";

import Copyright from "../Copyright/Copyright";
import Subscribe from "../Subscribe/Subscribe";

export default function Footer() {
  return (
    <Box component={"footer"}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card>
            <CardMedia component={"img"} image={Logo} alt="Logo" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Paper className="footer-box" sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom className="footer-title">
              Your Contribution
            </Typography>
            <Card>
              <CardMedia component={"img"} image={PayPal} alt="Logo" />
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="footer-box" sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom className="footer-title">
              Review us
            </Typography>
            <Card>
              <CardMedia component={"img"} image={TripAd} alt="Logo" />
            </Card>
          </Paper>
        </Grid>
      </Grid>
      <Subscribe />
      <Copyright />
    </Box>
  );
}
