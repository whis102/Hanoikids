import { Container, Typography } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";

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
      </Container>
    </Layout>
  );
}
