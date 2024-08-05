import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";

export default function Questions() {
  return (
    <>
      <Typography variant="h5"></Typography>
      <Container>
        <Accordion>
          <AccordionSummary aria-controls="panel2-content" id="panel2-header">
            <Typography>1. What is a Free Tour?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hanoikids offers tours around Hanoi without charge so you only
              have to prepare the expenses during the tour such as admission
              fees, food and drinks, as well as transportation fees (if any)
              both for you and Hanoikids member(s). Your great experience is our
              motivation and happiness.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
}
