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

export default function LeaderCard({ about, contact, title, reverse }) {
  return (
    <Box className="contact-container">
      <Typography variant="body1" gutterBottom>
        {about}
      </Typography>
      <Typography variant="body1" component="span">
        {contact}
      </Typography>

      <Grid container spacing={2} className="contact-box">
        <Grid item xs={4} order={reverse ? 2 : 1}>
          <Title heading={"h5"}>{title}</Title>
          <Typography variant="body1" gutterBottom></Typography>
          <Typography variant="body1" gutterBottom></Typography>
          <Typography variant="body1" gutterBottom></Typography>
        </Grid>

        <Grid item xs={4}>
          <Card className="contact-img">
            <CardMedia component="img" height="300" image={Nhoc} />
            <CardContent>
              <Typography gutterBottom variant="h6"></Typography>
              <Typography component={"p"}></Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4} order={reverse ? 1 : 2}>
          <Card className="contact-img">
            <CardMedia
              component="img"
              height={"300"}
              image={Vie}
              alt="Nguyen Quoc Dung"
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                Nguyen Quoc Dung
              </Typography>
              <Typography component={"p"}>Vice President</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
