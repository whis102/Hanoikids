import Title from "../../components/Title/Title";
import Carousel from "../../components/Carousel/Carousel";
import Layout from "../../components/Layout/Layout";
import StatsSection from "../../components/StatsSection/StatsSection";

import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <Container>
        <Title heading={"h4"}>About Us</Title>
        <Typography gutterBottom sx={{ textAlign: "center" }}>
          Hanoikids is a vibrant student-led initiative offering complimentary
          walking tours of Hanoi. Our passionate guides, deeply connected to the
          city, are committed to sharing authentic local experiences. From
          historical landmarks to hidden gems, we offer a fresh perspective on
          Hanoi's rich culture and traditions. Join us for a memorable journey
          through the heart of Vietnam.
        </Typography>
        <StatsSection />
      </Container>
    </Layout>
  );
}
