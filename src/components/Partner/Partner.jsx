import { Card, CardMedia, Container, Grid } from "@mui/material";
import "./Partner.scss";
import partners from "../../data/partners";
import Title from "../Title/Title";

export default function Partner() {
  return (
    <Container>
      <Title heading={"h4"}>Partnership</Title>

      <Grid container spacing={4} className="partner-container">
        {partners.map((recommend, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
            <Card className="partner-img">
              <CardMedia
                component="img"
                image={recommend.image}
                alt={recommend.alt}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
