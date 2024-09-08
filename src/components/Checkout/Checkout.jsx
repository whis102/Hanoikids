import "./Checkout.scss";
import { Box, Paper, Typography, Link } from "@mui/material";

export default function Checkout({ formData }) {
  const bookingDetails = [
    { label: "Hotel Name:", value: formData.hotelName },
    { label: "Hotel Address:", value: formData.hotelAddress },
    { label: "Tour Option:", value: formData.tourOption },
    { label: "Date (dd/mm/yyyy):", value: formData.date },
    { label: "Time:", value: formData.startingTime },
    { label: "Participants:", value: formData.participants },
    { label: "Special Request:", value: formData.specialRequest || "none" },
  ];

  const personalDetails = [
    { label: "Full Name:", value: formData.fullName },
    { label: "Gender:", value: formData.gender },
    { label: "DoB (dd/mm/yyyy):", value: formData.dob },
    { label: "Nationality:", value: formData.nationality },
    { label: "Passport Number:", value: formData.passportNumber },
    { label: "Email:", value: formData.email },
  ];

  const renderDetailRows = (details) =>
    details.map((detail, index) => (
      <Box className="detail-row" key={index}>
        <Typography component={"span"}>{detail.label}</Typography>
        <Typography component={"span"}>{detail.value}</Typography>
      </Box>
    ));

  return (
    <Box component={"form"} className="checkout-container">
      <Paper elevation={1} className="booking-box">
        <Box className="header">
          <Typography component={"h5"}>Booking Details</Typography>
          <Link href="#" underline="hover">
            Edit
          </Link>
        </Box>
        {renderDetailRows(bookingDetails)}
      </Paper>

      <Paper elevation={1} className="booking-box">
        <Box className="header">
          <Typography component={"h5"}>Personal Details</Typography>
          <Link href="#" underline="hover">
            Edit
          </Link>
        </Box>
        {renderDetailRows(personalDetails)}
      </Paper>
    </Box>
  );
}
