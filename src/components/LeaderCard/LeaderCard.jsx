import "./LeaderCard.scss";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import Title from "../../components/Title/Title";

export default function LeaderCard({
  about,
  aboutContent,
  dept,
  contact1,
  contact2,
  email,
  image,
  reverse,
  name,
  title,
  name1,
  image1,
  title1,
}) {
  return (
    <Box className="contact-container">
      <Typography variant="body1" gutterBottom component={"span"}>
        {`${about} ${aboutContent}`}
      </Typography>

      <Grid container spacing={2} className="contact-box">
        <Grid item xs={4} order={reverse ? 1 : 2}>
          <Title heading={"h5"}>{dept}</Title>
          <Typography variant="body1" gutterBottom>
            {contact1}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {contact2}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {email}
          </Typography>
        </Grid>

        <Grid item xs={4} order={reverse ? 2 : 1}>
          <Card className="contact-img">
            <CardMedia component="img" height="350" image={image} />
          </Card>
          <Typography gutterBottom variant="h6">
            {name}
          </Typography>
          <Typography component={"p"}>{title}</Typography>
        </Grid>

        <Grid item xs={4} order={reverse ? 3 : 1}>
          <Card className="contact-img">
            <CardMedia component="img" height={"350"} image={image1} />
          </Card>
          <Typography gutterBottom variant="h6">
            {name1}
          </Typography>
          <Typography component={"p"}>{title1}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
