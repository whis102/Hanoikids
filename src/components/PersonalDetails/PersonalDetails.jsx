import "./PersonalDetails.scss";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Stack,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import countryList from "react-select-country-list";

export default function PersonalDetails({ formData, setFormData }) {
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const options = countryList().getData();
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number is not valid")
      .required("Phone number is required"),
  });

  return (
    <Box className="booking-box" component="form">
      <Stack spacing={2}>
        <TextField
          fullWidth
          label="Full Name"
          placeholder="Your full name"
          type="text"
          required
          value={formData.fullName || ""}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />

        <TextField
          fullWidth
          label="Email"
          placeholder="example@gmail.com"
          type="email"
          required
          value={formData.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            sx={{ flex: 1 }}
            label="Date of Birth"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            required
            value={formData.dob || ""}
            onChange={(e) => handleChange("dob", e.target.value)}
          />

          <FormControl sx={{ flex: 1 }}>
            <InputLabel id="gender-label" required>
              Gender
            </InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              value={formData.gender || ""}
              onChange={(e) => handleChange("gender", e.target.value)}
              label="Gender"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Rather not say</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <FormControl fullWidth>
          <InputLabel id="nationality-label" required>
            Nationality
          </InputLabel>
          <Select
            labelId="nationality-label"
            value={formData.nationality}
            onChange={(e) => handleChange("nationality", e.target.value)}
            label="Nationality"
            id="nationality"
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {" "}
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Passport Number"
          placeholder="For the safety of Hanoikids members"
          type="password"
          required
          value={formData.passport}
          onChange={(e) => handleChange("passport", e.target.value)}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Hotel Name"
          placeholder="Your hotel name use for pickup purpose"
          required
        />

        <TextField
          fullWidth
          margin="normal"
          label="Hotel Address"
          placeholder="Your hotel address use for pickup purpose"
          required
        />
      </Stack>
    </Box>
  );
}
