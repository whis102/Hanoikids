import "./BookingProcess.scss";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  Modal,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import Title from "../Title/Title";
import BookingForm from "../BookingForm/BookingForm";
import PersonalDetails from "../PersonalDetails/PersonalDetails";

const steps = ["Booking details", "Personal details", "Checkout"];

export default function BookingProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box className="btn-box">
            <Button variant="contained" onClick={handleReset}>
              Book Other Tour
            </Button>
          </Box>
        </Modal>
      ) : (
        <>
          <Title heading={"h4"}>{steps[activeStep]}</Title>
          <Typography
            component={"p"}
            sx={{ textAlign: "center", fontStyle: "italic" }}
          >
            All this field are required
          </Typography>
          {activeStep === 0 && <BookingForm />}
          {activeStep === 1 && <PersonalDetails />}

          <Box className="btn-box">
            {activeStep > 0 && (
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleBack}
                sx={{ mr: 1 }}
                size="large"
              >
                Back
              </Button>
            )}

            {activeStep === steps.length - 1 ? (
              <FormControl onSubmit={handleSubmit}>
                <Button
                  variant="contained"
                  type="submit" // Add type="submit" for form submission
                  className="btn-submit"
                  size="large"
                >
                  Submit
                </Button>
              </FormControl>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                className="btn-submit"
                size="large"
              >
                Continue
              </Button>
            )}
          </Box>
        </>
      )}
    </Container>
  );
}
