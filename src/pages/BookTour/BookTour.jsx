import { useState } from "react";

import Structure from "../../components/Structure/Structure";

export default function BookTour() {
  const step = ["Booking Details", "Personal details", "Checkout"];

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  return (
    <Structure>
      <h1>Booktour</h1>
    </Structure>
  );
}
