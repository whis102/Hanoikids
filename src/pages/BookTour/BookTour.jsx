import { Container } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import BookingProcess from "../../components/BookingProcess/BookingProcess";

export default function BookTour() {
  return (
    <Layout>
      <Container>
        <BookingProcess />
      </Container>
    </Layout>
  );
}
