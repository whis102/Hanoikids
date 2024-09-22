import "./Checkout.scss";
import { Box, Paper, Typography, Link } from "@mui/material";

export default function Checkout({ formData }) {
  const bookingDetails = [
    { label: "Tour Option:", value: formData.tourOption || "N/A" },
    { label: "Date (dd/mm/yyyy):", value: formData.date || "N/A" },
    { label: "Time:", value: formData.startingTime || "N/A" },
    { label: "Participants:", value: formData.participants || "N/A" },
    { label: "Special Request:", value: formData.specialRequest || "none" },
  ];

  const personalDetails = [
    { label: "Full Name:", value: formData.fullName || "N/A" },
    { label: "Gender:", value: formData.gender || "N/A" },
    { label: "DoB (dd/mm/yyyy):", value: formData.dob || "N/A" },
    { label: "Nationality:", value: formData.nationality || "N/A" },
    { label: "Passport Number:", value: formData.passport || "N/A" },
    { label: "Email:", value: formData.email || "N/A" },
    { label: "Hotel Name:", value: formData.hotelName || "N/A" },
    { label: "Hotel Address:", value: formData.hotelAddress || "N/A" },
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
