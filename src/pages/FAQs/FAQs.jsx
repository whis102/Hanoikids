import { Container, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";

export default function FAQs() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Header />
      <Container>
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          This section provides answers to common questions from Tourists and
          Kid-wannabes. If you cannot find the answer to your questions below or
          have urgent enquiries, please{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate("/contact")}
          >
            contact us.
          </Link>
        </Typography>

        <Footer></Footer>
      </Container>
    </>
  );
}
