import "./Footer.scss";
import { Box, Card, CardMedia, Grid, Paper, Typography } from "@mui/material";

import Logo from "../../assets/logo.png";
import Copyright from "../Copyright/Copyright";
import Subscribe from "../Subscribe/Subscribe";

export default function Footer() {
  return (
    <Box component={"footer"}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card>
            <CardMedia component={"img"} image={Logo} alt="Logo" />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Paper className="footer-box" sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom className="footer-title">
              Our Pages
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="footer-box" sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom className="footer-title">
              Our Social Media
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Subscribe />
      <Copyright />
    </Box>
  );
}
