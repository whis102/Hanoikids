import "./LeaderCard.scss";

export default function LeaderCard({ about, contact, title }) {
  return (
    <Box className="contact-container">
      <Typography variant="body1" gutterBottom>
        {about}
      </Typography>
      <Typography variant="body1" component="span">
        {contact}
      </Typography>

      <Grid container spacing={2} className="contact-box">
        <Grid item xs={4}>
          <Title heading={"h5"}>{title}</Title>
          <Typography variant="body1" gutterBottom>
            Ms. Thu Phuong: (+84) 123 123 123
          </Typography>
          <Typography variant="body1" gutterBottom>
            Mr. Quoc Dung: (+84) 123 123 123
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: leaderboard.hnks@gmail.com
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Card className="contact-img">
            <CardMedia
              component="img"
              height="300"
              image={Nhoc}
              alt="Bui Thu Phuong"
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                Bui Thu Phuong
              </Typography>
              <Typography component={"p"}>President</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
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
