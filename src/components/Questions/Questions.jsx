import { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import questionsBank from "../../data/questions-bank";
import "./Questions.scss";
import Title from "../Title/Title";

export default function Questions() {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1);

  return (
    <Container className="questions-container">
      {questionsBank.map((questionSet, index) => (
        <>
          <Title heading={"h6"}>{questionSet.category}</Title>
          {questionSet.questions.map((question, innerIndex) => (
            <Accordion key={innerIndex}>
              <AccordionSummary
                className="question"
                onClick={() =>
                  setActiveAccordionIndex(
                    activeAccordionIndex === innerIndex ? -1 : innerIndex
                  )
                }
              >
                <Typography>
                  {question.id}. {question.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{question.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </>
      ))}
    </Container>
  );
}
