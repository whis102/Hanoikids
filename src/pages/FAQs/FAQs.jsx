import { Container, Link, Typography } from "@mui/material";

import Title from "../../components/Title/Title";
import Structure from "../../components/Structure/Structure";
import Questions from "../../components/Questions/Questions";

export default function FAQs() {
  return (
    <Structure>
      <Title heading={"h4"}>Frequently Asked Questions</Title>

      <Container>
        <Typography variant="subtitle1" gutterBottom>
          This section provides answers to common questions from Tourists and
          Kid-wannabes. If you cannot find the answer to your questions below or
          have urgent enquiries, please{" "}
          <Link
            href="/contact-us"
            target="_blank"
            sx={{ textDecoration: "none", fontWeight: "bold" }}
          >
            contact us.
          </Link>
        </Typography>
      </Container>

      <Questions />
    </Structure>
  );
}
