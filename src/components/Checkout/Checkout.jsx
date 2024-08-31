import "./Checkout.scss";
import { Box, Paper, Typography, Link } from "@mui/material";

export default function Checkout({ formData }) {
  const bookingDetails = [
    { label: "Tour Package:", value: formData.tourPackage || "City Tour" },
    { label: "Tour Option:", value: formData.tourOption || "Hoa Lo Prison" },
    { label: "Date (dd/mm/yyyy):", value: formData.date || "12/08/2024" },
    { label: "Time:", value: formData.startingTime || "14:00 Vietnam GMT +7" },
    { label: "Participants:", value: formData.participants || "01" },
    { label: "Special Request:", value: formData.specialRequest || "none" },
  ];

  const personalDetails = [
    { label: "Full Name:", value: formData.fullName || "A" },
    { label: "Gender:", value: formData.gender || "Male" },
    { label: "DoB (dd/mm/yyyy):", value: formData.dob || "16/08/2024" },
    { label: "Nationality:", value: formData.nationality || "Afganistan" },
    { label: "Passport Number:", value: formData.passportNumber || "Asdasdas" },
    { label: "Email:", value: formData.email || "Asdasd@Gmail.Com" },
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
