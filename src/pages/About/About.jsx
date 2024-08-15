import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "./About.scss";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import Nhoc from "../../assets/nhoc-ct.jpg";
import Vie from "../../assets/vie-pct.jpg";

export default function About() {
  return (
    <Layout>
      <Title heading={"h4"}>Who We Are</Title>
      <Container>
        <Typography gutterBottom>
          Hanoikids is a student-run organization established in 2006 that aims
          to “Be A Little Ambassador of Hanoi” through leading tours for English
          speaking travellers to Hanoi. Hanoikids hopes to bring you an insight
          into Vietnamese culture, tradition, beautiful sight-seeing and
          especially develop cross-cultural understanding between Vietnam and
          the rest of the world. Each member of the club can explore their full
          potentialthrough practical experiences and extracurricular activities.
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
