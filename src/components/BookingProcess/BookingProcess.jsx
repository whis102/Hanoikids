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
} from "@mui/material";
import { useState } from "react";
import Title from "../Title/Title";
import BookingForm from "../BookingForm/BookingForm";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import Checkout from "../Checkout/Checkout";

const steps = ["Booking details", "Personal details", "Checkout"];

export default function BookingProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    hotelName: "",
    hotelAddress: "",
    tourOption: "",
    date: "",
    startingTime: "",
    participants: 1,
    fullName: "",
    email: "",
    dob: "",
    gender: "",
    passportNumber: "",
  });

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
    setTimeout(() => {
      handleClose();
    }, 2500);
  };

  const updateFormData = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} sx={{ mt: 5, marginX: 10 }}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Title heading={"h4"}>{steps[activeStep]}</Title>
      <Typography
        component={"p"}
        sx={{ textAlign: "center", fontStyle: "italic" }}
      >
        All fields are required
      </Typography>
      {activeStep === 0 && (
        <BookingForm formData={formData} setFormData={updateFormData} />
      )}
      {activeStep === 1 && (
        <PersonalDetails formData={formData} setFormData={updateFormData} />
      )}
      {activeStep === 2 && <Checkout formData={formData} />}
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
          <Button
            variant="contained"
            onClick={handleSubmit}
            className="btn-submit"
            size="large"
          >
            Submit
          </Button>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={"modal-box"}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            All steps completed - you're finished
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Thank you for your booking!
          </Typography>
          <Box className="btn-box" sx={{ mt: 2 }}>
            <Button variant="contained" onClick={handleReset}>
              Book Other Tour
            </Button>
          </Box>
        </Box>
      </Modal>
      ;
    </Container>
  );
}
