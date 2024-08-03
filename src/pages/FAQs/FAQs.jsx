import {
  Link,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import Structure from "../../components/Structure/Structure";

export default function FAQs() {
  const navigate = useNavigate();

  return (
    <Structure>
      <Title>Frequently Asked Questions</Title>

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

      <Accordion>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          <Typography>1. What is a Free Tour?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hanoikids offers tours around Hanoi without charge so you only have
            to prepare the expenses during the tour such as admission fees, food
            and drinks, as well as transportation fees (if any) both for you and
            Hanoikids member(s). Your great experience is our motivation and
            happiness.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Structure>
  );
}
