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
import countryList from "react-select-country-list";

export default function PersonalDetails({ formData, setFormData }) {
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const options = countryList().getData();

  return (
    <Box className="booking-box" component="form">
      <Stack spacing={2}>
        <TextField
          fullWidth
          label="Full Name"
          placeholder="Your full name"
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />

        <TextField
          fullWidth
          label="Email"
          placeholder="example@gmail.com"
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            sx={{ flex: 1 }}
            label="Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            required
            onChange={(e) => handleChange("date", e.target.value)}
          />

          <FormControl sx={{ flex: 1 }}>
            <InputLabel id="gender-label" required>
              Gender
            </InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              value={formData.gender}
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
              <MenuItem key={option.value} value={option.label}>
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
      </Stack>
    </Box>
  );
}
