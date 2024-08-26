import "./TourCard.scss";
import { Card, CardMedia, Grid, Typography, Box, Link } from "@mui/material";
import {
  ChevronRight,
  EmojiTransportation,
  EmojiPeople,
} from "@mui/icons-material";

export default function TourCard({ title, description, image, reverse }) {
  return (
    <Grid container spacing={4} className="tour-package">
      <Grid item xs={6} order={reverse ? 2 : 1}>
        <Card className="img-box" sx={{ height: "100%" }}>
          <CardMedia component={"img"} height={400} image={image} />
        </Card>
      </Grid>

      <Grid item xs={6} order={reverse ? 1 : 2}>
        <Typography variant="h4" component={"h4"} marginBottom={2}>
          {title}
        </Typography>
        <Typography marginBottom={2}>{description}</Typography>

        <Box display="flex" alignItems="center" marginBottom={1}>
          <EmojiTransportation sx={{ marginRight: 1 }} />
          <Typography>
            <Box component="span" fontWeight="bold">
              Transportation:
            </Box>{" "}
            Walking or Taxi.
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <EmojiPeople sx={{ marginRight: 1 }} />
          <Typography>
            <Box component="span" fontWeight="bold">
              Pick-up location:
            </Box>{" "}
            Usually your hotel.
          </Typography>
        </Box>

        <Grid container spacing={3} className="explore-box">
          <Grid item xs={3}>
            <Link href="/book-tour" underline="none" className="tour-btn">
              <Typography component={"p"}>Explore</Typography>
              <ChevronRight />
            </Link>
          </Grid>

          <Grid item xs={3}>
            <Link href="/book-tour" underline="none" className="tour-btn">
              <Typography component={"p"}>Book Tour</Typography>
              <ChevronRight />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
