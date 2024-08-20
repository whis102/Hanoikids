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

        {/* Avatar */}
      </Container>
    </Layout>
  );
}
