import { Card, CardMedia, Grid, Typography, Box, Link } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function TourPackage({
  title,
  description,
  transportation,
  pickUpLocation,
  image,
  imgAlt,
}) {
  return (
    <Grid container spacing={4} className="tour-package">
      <Grid item xs={6}>
        <Card className="img-box">
          <CardMedia
            component={"img"}
            height={400}
            image={image}
            alt={imgAlt}
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <Typography variant="h4">{title}</Typography>
          <Typography>{description}</Typography>
          <Typography>• Transportation: {transportation}</Typography>
          <Typography>• Pick-up location: {pickUpLocation}</Typography>
          <Grid container spacing={3} className="btn-box">
            {["Explore", "Book Tour"].map((text, index) => (
              <Grid item key={index} xs={index === 0 ? 2 : 3}>
                <Link href="/book-tour" underline="none" className="tour-btn">
                  <Typography component={"p"}>{text}</Typography>
                  <ChevronRightIcon />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
