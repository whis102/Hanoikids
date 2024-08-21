import "./LeaderCard.scss";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
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
        {about}
      </Typography>
      <Typography variant="body1" component="span">
        {aboutContent}
      </Typography>

      <Grid container spacing={2} className="contact-box">
        <Grid item xs={4} order={reverse ? 3 : 1}>
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

        <Grid item xs={4} order={reverse ? 1 : 2 || reverse ? 2 : 1}>
          <Card className="contact-img">
            <CardMedia component="img" height="300" image={image} />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {name}
              </Typography>
              <Typography component={"p"}>{title}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4} order={reverse ? 1 : 3}>
          <Card className="contact-img">
            <CardMedia component="img" height={"300"} image={image1} />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {name1}
              </Typography>
              <Typography component={"p"}>{title1}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
