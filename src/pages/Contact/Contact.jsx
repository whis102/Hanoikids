import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Structure from "../../components/Structure/Structure";
import Title from "../../components/Title/Title";

import "./Contact.scss";
import Nhoc from "../../assets/nhoc-ct.jpg";
import Vie from "../../assets/vie-pct.jpg";

export default function Contact() {
  return (
    <Structure>
      <Title heading={"h4"}>Who We Are</Title>
      <Container>
        <Typography gutterBottom>
          We truly appreciate your support and contribution to our organization.
          If you have any further questions or have things make you confused in
          your mind, please don’t hesitate to contact us for clearer explanation
          and long-term cooperation in the future.
        </Typography>

        <Box className="contact-box">
          <Typography variant="body1" gutterBottom>
            About Partnership:{" "}
            <Typography variant="body1" component="span">
              For partnership, please contact our Leaderboard
            </Typography>
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                President & Vice President
              </Typography>
              <Typography variant="body1" gutterBottom>
                Ms. Thu Phuong: (+84) 931 100 703
              </Typography>
              <Typography variant="body1" gutterBottom>
                Mr. Quoc Dung: (+84) 367 160 866
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: leaderboard.hnks@gmail.com
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={Nhoc}
                  alt="Bui Thu Phuong"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" textAlign={"center"}>
                    Bui Thu Phuong
                  </Typography>
                  <Typography variant="body2" textAlign={"center"}>
                    President
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  height={"300"}
                  image={Vie}
                  alt="Nguyen Quoc Dung"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" textAlign={"center"}>
                    Nguyen Quoc Dung
                  </Typography>
                  <Typography variant="body2" textAlign={"center"}>
                    Vice President
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Box 2 */}
        <Box className="contact-box">
          <Typography variant="body1" gutterBottom>
            About Tours:{" "}
            <Typography variant="body1" component="span">
              For tour-related questions, please contact our tour operators
            </Typography>
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={Nhoc}
                  alt="Bui Thu Phuong"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" textAlign={"center"}>
                    Bui Thu Phuong
                  </Typography>
                  <Typography variant="body2" textAlign={"center"}>
                    President
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  height={"300"}
                  image={Vie}
                  alt="Nguyen Quoc Dung"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" textAlign={"center"}>
                    Nguyen Quoc Dung
                  </Typography>
                  <Typography variant="body2" textAlign={"center"}>
                    Vice President
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                Tour Operation Dept.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Mr. Truong Son: (+84) 931 100 703
              </Typography>
              <Typography variant="body1" gutterBottom>
                Ms. Thao My: (+84) 367 160 866
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: hanoikidsvn@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Structure>
  );
}
