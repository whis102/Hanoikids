// LeaderCard.jsx
import "./LeaderCard.scss";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import Title from "../../components/Title/Title";

export default function LeaderCard({
  category,
  description,
  department,
  contacts,
  email,
  members,
  reverse,
}) {
  return (
    <Box className="contact-container">
      <Box sx={{ marginTop: 4 }}>
        <Typography sx={{ fontWeight: "bold" }} gutterBottom component={"span"}>
          {category}
        </Typography>
        <Typography gutterBottom component={"span"}>
          {description}
        </Typography>
      </Box>

      <Grid container spacing={2} className="contact-box">
        <Grid item xs={4} order={reverse ? 1 : 2}>
          <Title heading={"h5"}>{department}</Title>
          {contacts.map((contact, index) => (
            <Typography key={index} variant="body1" gutterBottom>
              {contact}
            </Typography>
          ))}
          <Typography variant="body1" gutterBottom>
            Email: {email}
          </Typography>
        </Grid>

        {members.map((member, index) => (
          <Grid item xs={4} key={index} order={reverse ? index + 2 : 1}>
            <Card className="contact-img">
              <CardMedia component="img" height="350" image={member.image} />
            </Card>
            <Typography gutterBottom variant="h6">
              {member.name}
            </Typography>
            <Typography component={"p"}>{member.title}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
