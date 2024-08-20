import { Container } from "@mui/material";

import TourCard from "../../components/TourCard/TourCard";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import tourData from "../../data/tourData";

export default function Tours() {
  return (
    <Layout>
      <Title heading={"h4"}>Our Tours</Title>

      <Container>
        {tourData.map((tour, index) => (
          <TourCard
            key={index}
            title={tour.title}
            description={tour.description}
            image={tour.image}
            reverse={tour.title === "Food Tour"}
          />
        ))}
      </Container>
    </Layout>
  );
}
