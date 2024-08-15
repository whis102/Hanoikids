import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "./Contact.scss";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import Nhoc from "../../assets/nhoc-ct.jpg";
import Vie from "../../assets/vie-pct.jpg";

export default function Contact() {
  return (
    <Layout>
      <Title heading={"h4"}>Contact Us</Title>
      <Container>
        <Typography gutterBottom>
          We truly appreciate your support and contribution to our organization.
          If you have any further questions or have things make you confused in
          your mind, please don’t hesitate to contact us for clearer explanation
          and long-term cooperation in the future.
        </Typography>

        <Box className="contact-container">
          <Typography variant="body1" gutterBottom>
            About Partnership:{" "}
            <Typography variant="body1" component="span">
              For partnership, please contact our Leaderboard
            </Typography>
          </Typography>

          <Grid container spacing={2} className="contact-box">
            <Grid item xs={4}>
              <Title heading={"h5"}>President & Vice President</Title>
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

        {/* Box 2 */}
        <Box className="contact-container">
          <Typography variant="body1" gutterBottom>
            About Tours:{" "}
            <Typography variant="body1" component="span">
              For tour-related questions, please contact our tour operators
            </Typography>
          </Typography>

          <Grid container spacing={2} className="contact-box">
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
                    Pham Truong Son
                  </Typography>
                  <Typography component={"p"}>
                    Head of Tour Operation Dept.
                  </Typography>
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
                    Vu Thao My
                  </Typography>
                  <Typography component={"p"}>
                    Deputy Head of Tour Operation Dept.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Title heading={"h5"}>Tour Operation Dept.</Title>
              <Typography variant="body1" gutterBottom>
                Mr. Truong Son: (+84) 123 123 123
              </Typography>
              <Typography variant="body1" gutterBottom>
                Ms. Thao My: (+84) 123 123 123
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: hanoikidsvn@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
