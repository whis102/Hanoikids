import "./Tours.scss";
import Structure from "../../components/Structure/Structure";
import Title from "../../components/Title/Title";
import { Card, CardMedia, Grid, Typography, Box } from "@mui/material";
import CityTour from "../../assets/city-tour.webp";
import FoodTour from "../../assets/food-tour.webp";

export default function Tours() {
  return (
    <Structure>
      <Title heading={"h4"}>Our Tours</Title>

      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Card>
            <CardMedia component={"img"} height={300} image={CityTour} />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h4">City Tour</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h4">Food Tour</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia component={"img"} height={300} image={FoodTour} />
          </Card>
        </Grid>
      </Grid>
    </Structure>
  );
}
