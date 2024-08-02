import { Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";

import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Copyright/Copyright";

export default function FAQs() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Header />
      <Container>
        <Title>Frequently Asked Questions</Title>

        <Typography variant="subtitle1" gutterBottom>
          This section provides answers to common questions from Tourists and
          Kid-wannabes. If you cannot find the answer to your questions below or
          have urgent enquiries, please{" "}
          <Link variant="body2" onClick={() => navigate("/contact-us")}>
            contact us.
          </Link>
        </Typography>

        <Footer></Footer>
      </Container>
      <Copyright />
    </>
  );
}
