import "./BookingProcess.scss";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { useState } from "react";
import Title from "../Title/Title";
import BookingForm from "../BookingForm/BookingForm";

const steps = ["Booking details", "Personal details", "Checkout"];

export default function BookingProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} sx={{ mt: 5, marginX: 10 }}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={index} {...stepProps} className="step-box">
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box className="btn-box">
            <Button variant="contained" onClick={handleReset}>
              Book Other Tour
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Title heading={"h4"}>{steps[activeStep]}</Title>
          <Typography
            component={"p"}
            sx={{ textAlign: "center", fontStyle: "italic" }}
          >
            All this field are required
          </Typography>
          <BookingForm />

          <Box className="btn-box">
            {activeStep > 0 && (
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            )}

            <Button
              variant="contained"
              onClick={handleNext}
              className="btn-submit"
            >
              {activeStep === steps.length - 1 ? "Submit" : "Continue"}
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}
