import { useState } from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

export default function BookTour() {
  const step = ["Booking Details", "Personal details", "Checkout"];

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
    </>
  );
}
