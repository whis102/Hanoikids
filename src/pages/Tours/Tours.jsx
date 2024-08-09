import "./Tours.scss";
import {
  Card,
  CardMedia,
  Grid,
  Typography,
  Box,
  Link,
  Container,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Structure from "../../components/Structure/Structure";
import Title from "../../components/Title/Title";
import CityTour from "../../assets/city-tour.webp";
import FoodTour from "../../assets/food-tour.webp";

export default function Tours() {
  return (
    <Structure>
      <Title heading={"h4"}>Our Tours</Title>

      <Container>
        <Grid container spacing={4} className="tour-package">
          <Grid item xs={6}>
            <Card className="img-box">
              <CardMedia component={"img"} height={400} image={CityTour} />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h4">City Tour</Typography>
              <Typography>
                Our charming Hanoi offers you numerous chances to experience the
                modern living style well harmonizing with traditional breath.
                Get ready to discover our local life by getting lost in the maze
                of streets and bustling atmosphere. You will definitely not
                regret it!
              </Typography>

              <Typography>• Transportation: Walking / Taxi.</Typography>
              <Typography>• Pick-up location: Usually your hotel.</Typography>

              <Grid container spacing={3} className="btn-box">
                <Grid item xs={2}>
                  <Link href="/book-tour" underline="none" className="tour-btn">
                    <Typography component={"p"}>Explore</Typography>
                    <ChevronRightIcon />
                  </Link>
                </Grid>

                <Grid item xs={3}>
                  <Link href="/book-tour" underline="none" className="tour-btn">
                    <Typography component={"p"}>Book Tour</Typography>
                    <ChevronRightIcon />
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} className="tour-package">
          <Grid item xs={6}>
            <Box>
              <Typography variant="h4">Food Tour</Typography>
              <Typography>
                Hanoi street food is a fascinating combination of diverse
                flavours which will impress you at the very first try. Let’s
                take the chance to explore our culinary world and enjoy the
                local lifestyle with a food tour around the city!
              </Typography>

              <Typography>• Transportation: Walking / Taxi.</Typography>
              <Typography>• Pick-up location: Usually your hotel.</Typography>

              <Grid container spacing={3} className="btn-box">
                <Grid item xs={2}>
                  <Link href="/book-tour" underline="none" className="tour-btn">
                    <Typography component={"p"}>Explore</Typography>
                    <ChevronRightIcon />
                  </Link>
                </Grid>

                <Grid item xs={3}>
                  <Link href="/book-tour" underline="none" className="tour-btn">
                    <Typography component={"p"}>Book Tour</Typography>
                    <ChevronRightIcon />
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Card className="img-box">
              <CardMedia component={"img"} height={400} image={FoodTour} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Structure>
  );
}
